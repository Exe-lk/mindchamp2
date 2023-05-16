import React from "react";

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";

export default function Home() {
    return (
        <>
            {/* <!-- Carousel --> */}
            <div id="demo" class="carousel slide" data-bs-ride="carousel">

                {/* <!-- Indicators/dots --> */}
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                </div>

                {/* <!-- The slideshow/carousel --> */}
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="/images/home/slide-1.jpg" alt="Los Angeles" class="d-block w-100" />
                    </div>
                    <div class="carousel-item">
                        <img src="/images/home/slide-2.jpg" alt="Chicago" class="d-block w-100" />
                    </div>
                    <div class="carousel-item">
                        <img src="/images/home/slide-3.jpg" alt="New York" class="d-block w-100" />
                    </div>
                </div>

                {/* <!-- Left and right controls/icons --> */}
                <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </button>
            </div>
            <div className="container">
                <div className="row mt-5">
                    <h2 className="text-center text-primary">What is Mind Champ ?</h2>
                    <p className="mt-4 lead">
                        Mind Champ is an effective educational platform for children with autism spectrum disorder (ASD) aged between 6-10 years. Our platform uses emotional and behavioral analysis through a system to identify the individual learning and soft skills needs of each individual child with autism, providing a special classroom for them that is more convenient.  We offer engaging lessons, activities, and quizzes that are tailored to their specific needs, helping them to learn at their own pace and in a way that suits their individual learning style. Our mission is to provide a supportive and inclusive learning environment for children with autism, helping them to achieve their full potential. Join us at Mind Champs and start your child's journey towards a brighter future.
                    </p>
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
    )
}