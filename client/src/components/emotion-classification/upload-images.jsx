import React, { useState } from "react";

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

//Sweet alert
import Swal from 'sweetalert2';

import "./upload-images.css"

import axios from "axios";

export default function UploadImages() {

    const [image, setImage] = useState(null)
    const [previewURL, setPreviewURL] = useState(null);

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file.type.startsWith("image/") && file.size < 100000000) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setImage(file);
                setPreviewURL(reader.result);
            };
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Invalid image file! Here you can upload image files less than 100mb only',
            })
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleRemove = () => {
        setImage(null);
        setPreviewURL(null);
    };

    const handleUpload = () => {

        const formData = new FormData();

        const renamedFile = new File([image], '123.jpg');
        formData.append("image", renamedFile);

        axios.post('http://127.0.0.1:5000/uploadimg', formData)
            .then(response => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Picture is uploaded successfully!',
                    showConfirmButton: false,
                    timer: 1500
                });
                // Handle the response
                window.location.href = '/showemmoresult';
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Picture uploading Faild!',
                })
            });

    };

    return (
        <>
            <div className="container-fluid mt-5 pt-5">
                <h3 className="text-center mt-5 mb-5">Upload your child emotion picture Here</h3>
                <div className="video-uploader">
                    {image ? (
                        <div className="container-fluid">
                            <div className="row">
                                <div className="video-preview">
                                    <img className="img-fluid" width="50%" src={previewURL} alt="Preview" />
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
                        <div className="container-fluid">
                            <div className="video-dropzone" onDrop={handleDrop} onDragOver={handleDragOver} >
                                <h5 className="text-center">Drag and drop an Image file here,</h5>
                                <h5 className="text-center mb-5">or click to select a file</h5>
                                <div className="btn btn-primary w-50">
                                    <input type="file" className="form-control-lg  custom-file-input" id="customFile" accept="image/*"
                                        onChange={(e) => {
                                            const file = e.target.files[0];
                                            if (file.type === "image/" && file.size < 100000000) {
                                                const reader = new FileReader();
                                                reader.readAsDataURL(file);
                                                reader.onloadend = () => {
                                                    setImage(file);
                                                    setPreviewURL(reader.result);
                                                };
                                            } else {
                                                // alert("Invalid video file! Here you can upload mp4 video files only");
                                                Swal.fire({
                                                    icon: 'error',
                                                    title: 'Oops...',
                                                    text: 'Invalid image file! Here you can upload image files less than 100mb',
                                                })
                                            }
                                        }}
                                    />

                                </div>
                            </div>
                            <div className="container mt-5">
                                <div className="row">
                                    <p>txt</p>
                                </div>
                            </div>
                        </div>

                    )}
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