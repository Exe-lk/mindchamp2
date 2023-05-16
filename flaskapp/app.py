import io
import base64
import numpy as np
from PIL import Image
from flask import Flask, jsonify, request
import easyocr
from flask_cors import CORS

# initialize the Flask application
app = Flask(__name__)

# enable CORS for all origins and each request method
CORS(app)

# load the EasyOCR model
reader = easyocr.Reader(['en'])

@app.route('/predict', methods=['POST'])
def predict():
    # get the image data from the request
    data = request.json['image']

    # decode the base64-encoded image data
    base64_string = data.split(',')[1]
    base64_string = base64_string.replace(" ", "+")
    image_bytes = base64.b64decode(base64_string)

    # convert the image data to a PIL Image object
    image = Image.open(io.BytesIO(image_bytes))

    # convert the PIL Image to a NumPy array
    image_array = np.array(image)

    # perform OCR on the image
    results = reader.readtext(image_array)

    # format the results as a JSON response
    output = [{'text': result[1], 'confidence': result[2]} for result in results]
    response = {'result': output}

    # return the JSON response
    return jsonify(response)

if __name__ == '__main__':
    # start the Flask app
    app.run(host='0.0.0.0', port=5000)
