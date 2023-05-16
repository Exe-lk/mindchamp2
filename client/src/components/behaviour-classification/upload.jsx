import React from "react";

export default function Upload() {

    return (
        <>
            <h3 className="text-center mt-5 pt-5">Upload an image or a video to identify your child's conditions</h3>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-1 pt-3">
                        <a href="/uploadimage">
                            <div className="container shadow-lg mt-5 mb-5 pt-5 pb-5 rounded-5">
                                <center>
                                    <img className="img-fluid" width="50%" src="/images/upload/photo.png" />
                                </center>
                                <h3 className="text-center mt-1">Upload Image</h3>
                            </div>
                        </a>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-1 pt-3">
                        <a href="/uploadvideo2">
                            <div className="container shadow-lg mt-5 mb-5 pt-5 pb-5 rounded-5">
                                <center>
                                    <img className="img-fluid text-center" width="50%" src="/images/upload/video.png" />
                                </center>
                                <h3 className="text-center mt-1">Upload Video</h3>
                            </div>
                        </a>
                    </div>
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