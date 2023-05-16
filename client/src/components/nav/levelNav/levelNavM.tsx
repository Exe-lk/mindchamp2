import React, { useState,useEffect } from 'react';


// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

import 'bootstrap-icons/font/bootstrap-icons.css';

import './levelnav.css'

export default function LevelNavM(props:any) {

    const [activeButton, setActiveButton] = useState(1);

    function handleClick(id:any) {
        setActiveButton(id);
        props.onNoLevel(id);
    }

    

    useEffect(()=>{
        setActiveButton(props.level);
    },[])

    return (
        
        <>
        <style>
            {
                `
                .img_paint_tab{
                    width:auto;
                    height: 100px;
                    display:inline !important;
                }
                `
            }
        </style>
        <div className="container-fluid">
            <img alt="b" className="mt-3 img_paint_tab img-fluid" src="/images/boss-baby-1.jpg" />
            <img alt="i" className="mt-3 img_paint_tab img-fluid" src="/images/boss-baby-2.jpg" />
            <img alt="a" className="mt-3 img_paint_tab img-fluid" src="/images/boss-baby-3.jpg" />
            
            <div className="btn-group shadow-lg">
                <button className={`btn ${activeButton === 1 ? 'btn-primary' : 'btn-white'}`} onClick={() => handleClick(1)}><span><i className="bi bi-unlock-fill me-2"></i></span>Beginner</button>
                <button className={`btn ${activeButton === 2 ? 'btn-primary' : 'btn-white'}`} onClick={() => handleClick(2)}><span><i className="bi bi-lock-fill me-2"></i></span>Intermediate</button>
                <button className={`btn ${activeButton === 3 ? 'btn-primary' : 'btn-white'}`} onClick={() => handleClick(3)}><span><i className="bi bi-lock-fill me-2"></i></span>Advanced</button>
            </div>

        </div>
        </>
        

    );
}