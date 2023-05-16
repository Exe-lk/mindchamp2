#Gihan
#importing required libraries
import mediapipe as mp 
import cv2 

import csv
import os
import numpy as np

import pandas as pd
from sklearn.model_selection import train_test_split

from sklearn.pipeline import make_pipeline 
from sklearn.preprocessing import StandardScaler 

from sklearn.linear_model import LogisticRegression, RidgeClassifier
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from sklearn.metrics import accuracy_score # Accuracy metrics 
import pickle
from collections import Counter
from flask import Flask,request,jsonify
from flask_restful import Resource, Api
from flask_cors import CORS

#Ruchira
from flask import render_template
from keras.models import load_model
from tensorflow.keras.preprocessing.image import load_img, img_to_array
from PIL import Image
import os
import base64
import io

app = Flask("VideoAPI")
cors = CORS(app)
cors = CORS(app, origins=['http://localhost:3000'])
api = Api(app)


#Gihan

@app.route('/api/behaviour/data', methods=['POST'])
def behaviour():
    data = request.get_json()
    video_file = data.get("video")
    classification_results = []
        
    #mediapipe holistic solution
    mp_drawing = mp.solutions.drawing_utils
    mp_holistic = mp.solutions.holistic

    with open('body_language.pkl', 'rb') as f:
        model = pickle.load(f)

    cap = cv2.VideoCapture(video_file)
    # Initiate holistic model
    with mp_holistic.Holistic(min_detection_confidence=0.75, min_tracking_confidence=0.75) as holistic:

        while cap.isOpened():
            ret, frame = cap.read()

            # Check if the frame was successfully read
            if not ret:
            # If not, the end of the video has been reached
                break

            # Recolor Feed
            image = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
            image.flags.writeable = False        

            # Make Detections
            results = holistic.process(image)
            # print(results.face_landmarks)

            # face_landmarks, pose_landmarks, left_hand_landmarks, right_hand_landmarks

            # Recolor image back to BGR for rendering
            image.flags.writeable = True   
            image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)

            # 1. Draw face landmarks
            mp_drawing.draw_landmarks(image, results.face_landmarks, mp_holistic.FACEMESH_TESSELATION, 
                                     mp_drawing.DrawingSpec(color=(80,110,10), thickness=1, circle_radius=1),
                                     mp_drawing.DrawingSpec(color=(80,256,121), thickness=1, circle_radius=1)
                                     )

            # 2. Right hand
            mp_drawing.draw_landmarks(image, results.right_hand_landmarks, mp_holistic.HAND_CONNECTIONS, 
                                     mp_drawing.DrawingSpec(color=(80,22,10), thickness=2, circle_radius=4),
                                     mp_drawing.DrawingSpec(color=(80,44,121), thickness=2, circle_radius=2)
                                     )

            # 3. Left Hand
            mp_drawing.draw_landmarks(image, results.left_hand_landmarks, mp_holistic.HAND_CONNECTIONS, 
                                     mp_drawing.DrawingSpec(color=(121,22,76), thickness=2, circle_radius=4),
                                     mp_drawing.DrawingSpec(color=(121,44,250), thickness=2, circle_radius=2)
                                     )

            # 4. Pose Detections
            mp_drawing.draw_landmarks(image, results.pose_landmarks, mp_holistic.POSE_CONNECTIONS, 
                                     mp_drawing.DrawingSpec(color=(245,117,66), thickness=2, circle_radius=4),
                                     mp_drawing.DrawingSpec(color=(245,66,230), thickness=2, circle_radius=2)
                                     )
            # Export coordinates
            try:
                # Extract Pose landmarks
                pose = results.pose_landmarks.landmark
                pose_row = list(np.array([[landmark.x, landmark.y, landmark.z, landmark.visibility] for landmark in pose]).flatten())

                # Extract Face landmarks
                face = results.face_landmarks.landmark
                face_row = list(np.array([[landmark.x, landmark.y, landmark.z, landmark.visibility] for landmark in face]).flatten())

                # Concate rows
                row = pose_row+face_row

                # Make Detections
                X = pd.DataFrame([row])
                body_language_class = model.predict(X)[0]
                body_language_prob = model.predict_proba(X)[0]
                body_language_prob_result = round(body_language_prob[np.argmax(body_language_prob)],2)

                if body_language_prob_result > 0.9:
                    print(body_language_class.split(' ')[0], body_language_prob_result)
                    classification_results.append(body_language_class.split(' ')[0])

                    # Grab ear coords
                    coords = tuple(np.multiply(
                                    np.array(
                                        (results.pose_landmarks.landmark[mp_holistic.PoseLandmark.LEFT_EAR].x, 
                                         results.pose_landmarks.landmark[mp_holistic.PoseLandmark.LEFT_EAR].y))
                                , [640,480]).astype(int))

                    cv2.rectangle(image, 
                                  (coords[0], coords[1]+5), 
                                  (coords[0]+len(body_language_class)*20, coords[1]-30), 
                                  (245, 117, 16), -1)
                    cv2.putText(image, body_language_class, coords, 
                                cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 255, 255), 2, cv2.LINE_AA)

                    # Get status box
                    cv2.rectangle(image, (0,0), (250, 60), (245, 117, 16), -1)

                    # Display Class
                    cv2.putText(image, 'CLASS'
                                , (95,12), cv2.FONT_HERSHEY_SIMPLEX, 0.75, (0, 0, 0), 1, cv2.LINE_AA)
                    cv2.putText(image, body_language_class.split(' ')[0]
                                , (90,40), cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 255, 255), 2, cv2.LINE_AA)

                    # Display Probability
                    cv2.putText(image, 'PROB'
                                , (15,12), cv2.FONT_HERSHEY_SIMPLEX, 0.75, (0, 0, 0), 1, cv2.LINE_AA)
                    cv2.putText(image, str(round(body_language_prob[np.argmax(body_language_prob)],2))
                                , (10,40), cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 255, 255), 2, cv2.LINE_AA)

            except:
                pass

    # Create a counter object from the list of classification results
    counts = Counter(classification_results)

    # Decide on the overall classification based on the category with the highest count
    if counts['Hand_Flickering'] > counts['Head_Banging']:
        overall_classification = 'Hand Flickering'
    else:
        overall_classification = 'Head Banging'

    return jsonify({"classification" : overall_classification})


@app.route('/upload', methods=['POST'])
def upload():
    if 'video' not in request.files:
        return 'No video file uploaded', 400

    video_file = request.files['video']
    if video_file.filename == '':
        return 'Invalid video file', 400

    # Specify the folder where you want to save the uploaded video
    save_folder = 'video'  # Replace with your desired folder path

    file_path = os.path.join(save_folder, video_file.filename)
    print(file_path)
    
    # Save the video file to the specified folder
    video_file.save(file_path)

    return jsonify({'res':'Video uploaded successfully'})


#Ruchira

# Load the Xception CNN image classifier model
model = load_model('imageclassifier.h5')

@app.route('/uploadimg', methods=['POST'])
def uploadimg():
    if 'image' not in request.files:
        return 'No image file uploaded', 400

    image_file = request.files['image']
    if image_file.filename == '':
        return 'Invalid image file', 400
    
    # Specify the folder where you want to save the uploaded video
    save_folder = 'Image'  # Replace with your desired folder path

    file_path = os.path.join(save_folder, image_file.filename)
    print(file_path)
    
    # Save the video file to the specified folder
    image_file.save(file_path)    

    # Read the image file as binary data
    image_data = image_file.read()

    return jsonify({'res':'Image uploaded successfully'})


#Ruchira

# Define a route to handle image classification requests
@app.route('/imagepredict', methods=['POST'])
def predict():
    # Get the JSON data from the request
    data = request.get_json()
    image_name = data.get('image')

    # Preprocess the image
    img_array = preprocess_image(image_name)

    # Make a prediction with the model
    prediction = model.predict(img_array)

    # Convert the prediction to a string label
    label = np.argmax(prediction)
    labels_dict = {0: 'Neutral', 1: 'Happy', 2: 'Anger', 3: 'Sadness'}
    label_str = labels_dict[label]

    # Return the prediction as a JSON response
    response = {'prediction': label_str}
    return jsonify(response)


def preprocess_image(image_name):
    # Load the image from the file system using the provided image name
    image_path = os.path.join('Image', image_name)
    # Preprocess the image
    img = load_img(image_path, target_size=(224, 224))
    img_array = img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    img_array = img_array / 255.
    return img_array


# api.add_resource(AutismBehaviourClassifier, '/VideoClassify')

if __name__ == '__main__':
    app.run()