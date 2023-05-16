import React, { useState } from "react";

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

//Sweet alert
import Swal from 'sweetalert2';

// import firebase from "firebase/app";
// import { storage } from "../../firebase"
// import { ref, uploadBytes } from "firebase/storage";

import axios from "axios";

//Css
import './uploadvideo.css'

export default function UploadVideo2() {

    const [video, setVideo] = useState(null);
    const [previewURL, setPreviewURL] = useState(null);

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file.type === "video/mp4" && file.size < 100000000) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setVideo(file);
                setPreviewURL(reader.result);
            };
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Invalid video file! Here you can upload mp4 video files less than 100mb and less than 1 minute playtime only',
            })
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleRemove = () => {
        setVideo(null);
        setPreviewURL(null);
    };

    // const handleUpload = () => {
    //     const formData = new FormData();
    //     formData.append("video", video);
    //     // Use an API endpoint or library to upload the video formData
    //     const videoRef = ref(storage, `Video/123.mp4`)
    //     uploadBytes(videoRef, video).then((snapshot) => {
    //         console.log("Video uploaded successfully!");
    //         Swal.fire({
    //             position: 'top-end',
    //             icon: 'success',
    //             title: 'Video uploaded successfully!',
    //             showConfirmButton: false,
    //             timer: 1500
    //           });
    //           handleClick();

    //         // You can get the download URL of the uploaded video from the snapshot
    //         snapshot.ref.getDownloadURL().then((url) => {
    //             console.log("Video URL:", url);
    //             // Do something with the video URL, like saving it to a database
    //         });
    //     }).catch((error) => {
    //         console.error(error);
    //     });

    //     // Example: axios.post("/api/videos", formData)
    //     console.log(formData);
    // };

    const handleUpload = () => {

        const formData = new FormData();

        const renamedFile = new File([video], '123.mp4');
        formData.append("video", renamedFile);

        axios.post('http://127.0.0.1:5000/upload', formData)
            .then(response => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Video uploaded successfully!',
                    showConfirmButton: false,
                    timer: 1500
                });
                // Handle the response
                window.location.href = '/showresult';
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Video uploading Faild!',
                })
            });

        // Example: axios.post("/api/videos", formData)
        console.log(formData);
    };

    const UploadVideo2Style = {
        textAlign: 'justify'
    }

    return (
        <>
            <div className="container-fluid mt-5 pt-5">
                <h3 className="text-center mt-5 mb-5 text-primary">Upload your child behaviour video here</h3>
                <div className="video-uploader">
                    {video ? (
                        <div className="container-fluid">
                            <div className="row">
                                <div className="video-preview">
                                    <video src={previewURL} controls />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <button className="btn btn-danger" onClick={handleRemove}>Remove</button>
                                </div>
                                <div className="col-6">
                                    <button className="btn btn-primary" onClick={handleUpload}>Upload</button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className="container-fluid">
                                <div className="video-dropzone" onDrop={handleDrop} onDragOver={handleDragOver} >
                                    <h5 className="text-center">Drag and drop an MP4 video file (less than 100mb and less than 1 minute playtime) here,</h5>
                                    <h5 className="text-center mb-5">or click to select a file</h5>
                                    <div className="btn btn-primary w-50">
                                        <input type="file" className="form-control-lg  custom-file-input" id="customFile" accept="video/mp4"
                                            onChange={(e) => {
                                                const file = e.target.files[0];
                                                if (file.type === "video/mp4" && file.size < 100000000) {
                                                    const reader = new FileReader();
                                                    reader.readAsDataURL(file);
                                                    reader.onloadend = () => {
                                                        setVideo(file);
                                                        setPreviewURL(reader.result);
                                                    };
                                                } else {
                                                    // alert("Invalid video file! Here you can upload mp4 video files only");
                                                    Swal.fire({
                                                        icon: 'error',
                                                        title: 'Oops...',
                                                        text: 'Invalid video file! Here you can upload mp4 video files less than 100mb and less than 1 minute playtime only',
                                                    })
                                                }
                                            }}
                                        />

                                    </div>
                                </div>

                            </div>

                        </>

                    )}
                </div>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <p className="lead" style={UploadVideo2Style}>Autism Spectrum Disorder (ASD) affects how people communicate, learn, behave, and socially interact. Early intervention and effective educational practices can greatly improve the condition. Finding solutions for autism should be done from the early stages of diagnosis since helping a person's development in the child stage has a positive impact. There are limited opportunities for autistic students in the Information Technology space, so it is necessary to provide applications or technical assistance to help them. Developing an application for autistic children requires more experimental attention. In this research paper I am suggesting a solution for enhance the soft and learning skills which identified based on their behaviors over a constant average period of a time.</p>
                </div>
            </div>
            <div class="container">
                <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div class="col-md-4 d-flex align-items-center">
                        <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                            <svg class="bi" width="30" height="24"><use href="#bootstrap"></use></svg>
                        </a>
                        <span class="text-muted">© 2023 Mind Champ</span>
                    </div>

                    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"><use href="#twitter"></use></svg></a></li>
                        <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"><use href="#instagram"></use></svg></a></li>
                        <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"><use href="#facebook"></use></svg></a></li>
                    </ul>
                </footer>
            </div>
        </>

    );
}