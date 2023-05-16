import React from "react";

export default function SoftSkill() {

    const SoftSkillStyle = {
        textAlign: 'justify'
    }

    return (
        <>
            <h3 className="text-center mt-5 pt-5 mb-5 text-primary">SoftSkill Development</h3>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-1 pt-3">
                        <a href="/SoftSkill/Music/">
                            <div className="container shadow-lg mt-4 mb-5 pt-5 pb-5 rounded-5">
                                <center>
                                    <img className="img-fluid" width="50%" src="/images/softskill/music.png" />
                                </center>
                                <h3 className="text-center">Music Skill Development</h3>
                            </div>
                        </a>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-1 pt-3">
                        <a href="/SoftSkill/Painting/Beginner">
                            <div className="container shadow-lg mt-4 mb-5 pt-5 pb-5 rounded-5">
                                <center>
                                    <img className="img-fluid text-center" width="50%" src="/images/softskill/paint-palette.png" />
                                </center>
                                <h3 className="text-center">Painting Skill Development</h3>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <h2 className="text-center text-primary">Soft Skills Development for Autistic Children</h2>
                </div>
                <div className="row mt-3">
                    <p className="lead" style={SoftSkillStyle}>
                        Autistic kids often struggle with developing their soft skills relevant to social interaction , emotional regulation , effective problem solving and Communication.
                        However , with the right support and guidance , these skills can be developed and improved .
                        One such effective approach is to use visual aids with the use of technology to  help autistic children
                        Understand their own interests and capabilities.
                        Providing interactive activities with role play  can help autistic children enhance and develop their creativity , thinking skills and many more.
                        Our Aim which is to provide a supportive environment with the use of technology
                        It is Important for parents and educators to recognize  the unique strengths and challenges of each autistic child and to tailor their approach to  meet heir needs effectively .
                        With patience , continuous practice , understanding and consistent effort  soft skills development can be considered as a rewarding and empowering process for autistic children and their families.
                        This platform is mainly designed to provide a support to the autistic children of age six years to develop their soft skills through continuous practice and interactivity.

                    </p>
                </div>
                <div className="row mt-3">
                    <div className="col-4">
                        <center>
                            <img src="/images/softskill/contentss1.jpg" className="img-fluid" />
                        </center>
                    </div>
                    <div className="col-4">
                        <center>
                            <img src="/images/softskill/contentss2.jpg" className="img-fluid" />
                        </center>
                    </div>
                    <div className="col-4">
                        <center>
                            <img src="/images/softskill/contentss3.jpg" className="img-fluid" />
                        </center>
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