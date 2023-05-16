import React from "react";

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

// Here, we display our Navbar
export default function NavbarDynamic() {
    return (
        <div className = "container-fluid shadow-lg">
            <header className = "d-flex justify-content-center py-3">
                <ul className = "nav nav-pills">
                    <li className = "nav-item"><a href = "/Home" className = "nav-link" aria-current ="page">Home</a></li>
                    <li className = "nav-item"><a href = "/Upload" className = "nav-link">Upload</a></li>
                    <li className = "nav-item"><a href = "/SoftSkill/Painting/Beginner" className = "nav-link active">Soft skill</a></li>
                    <li className = "nav-item"><a href = "/" className = "nav-link">Learning Skill</a></li>
                    <li className = "nav-item"><a href = "/Help" className = "nav-link">Help</a></li>
                </ul>
            </header>
            
        </div>
    );
}