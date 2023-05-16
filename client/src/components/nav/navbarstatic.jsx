import React, { useState, useEffect } from 'react';

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

export default function Navbar() {

    const [activeButton, setActiveButton] = useState(0);

    function handleClick(id) {
        setActiveButton(id);
    }

    useEffect(() => {

    }, [])

    return (
        <div className="container-fluid shadow-lg bg-white fixed-top">
            <header className="d-flex justify-content-center py-3">
                <a href="/home" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                    {/* <img src='/images/logo.jpg' className='bi me-2' width="40" height="32"/> */}
                    <h5 className='text-primary'>Mind Champ</h5>                    
                </a>
                <ul className="nav nav-pills">
                    <li className="nav-item"><a href="/Home" className={`nav-link ${activeButton === 1 ? 'active' : ' '}`} aria-current="page" onClick={() => handleClick(1)}>Home</a></li>
                    <li className="nav-item"><a href="/Upload" className={`nav-link ${activeButton === 2 ? 'active' : ' '}`} onClick={() => handleClick(2)}>Upload</a></li>
                    <li className="nav-item"><a href="/SoftSkill" className={`nav-link ${activeButton === 3 ? 'active' : ' '}`} onClick={() => handleClick(3)}>Soft Skill</a></li>
                    <li className="nav-item"><a href="/" className={`nav-link ${activeButton === 4 ? 'active' : ' '}`} onClick={() => handleClick(4)}>Learning Skill</a></li>
                    <li className="nav-item"><a href="/Help" className={`nav-link ${activeButton === 5 ? 'active' : ' '}`} onClick={() => handleClick(5)}>Help</a></li>
                </ul>
            </header>
        </div>
    );
}