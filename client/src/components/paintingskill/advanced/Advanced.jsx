import React, { useState, useEffect } from 'react';


// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
//Bootstrap icons
import 'bootstrap-icons/font/bootstrap-icons.css';

//Sweet alert
import Swal from 'sweetalert2';

//Css
import '../painting.css'

//Level Navbar
import LevelNav from '../../nav/levelNav/levelNav';

//Color Box
import ColorBox from '../colorbox/colorbox';

//React Bootstrap components
import { Button, Carousel } from 'react-bootstrap';

// SVG Components
import A2 from '../SVG/Advanced/a2';
import A1 from '../SVG/Advanced/a1';
import A3 from '../SVG/Advanced/a3';
import A4 from '../SVG/Advanced/a4';
import A5 from '../SVG/Advanced/a5';

import axios from 'axios';

import Scorebox from '../scorebox/scorebox';

export default function Advanced() {
    // Carousel State
    const [index, setIndex] = useState(0);
    //Fill Color
    const [fillColors, setFillColors] = useState(Array(2).fill('white'))
    //Current Color
    const [currentColor, setCurrentColor] = useState('white')

    // data
    const [data, setData] = useState([true]);

    // data loading state
    const [loading, setLoading] = useState();

    // uid
    const uid = "6420f3c32768b05b526730e6";

    const url = "http://localhost:5200/softskill/painting/level/update-beginner/";

    const fetchpaints = async () => {

        const responsePosts = await axios.get(url + uid);
        setData(responsePosts.data);
        setLoading(false);
        console.log(data);

    }

    useEffect(() => {

        setFillColors(['white']);
        fetchpaints();

    }, []);

    const checklock = () => {
        const lastunlock = data.last_unlock_p;

        console.log(lastunlock);

        switch (lastunlock) {
            case 9:
                unlock("p1_lock");
                lock("p2_lock");
                lock("p3_lock");
                lock("p4_lock");
                lock("p5_lock");
                break;
            case 10:
                unlock("p1_lock");
                unlock("p2_lock");
                lock("p3_lock");
                lock("p4_lock");
                lock("p5_lock");
                break;
            case 11:
                unlock("p1_lock");
                unlock("p2_lock");
                unlock("p3_lock");
                lock("p4_lock");
                lock("p5_lock");
                break;
            case 12:
                unlock("p1_lock");
                unlock("p2_lock");
                unlock("p3_lock");
                unlock("p4_lock");
                lock("p5_lock");
                break;
            case 13:
                unlock("p1_lock");
                unlock("p2_lock");
                unlock("p3_lock");
                unlock("p4_lock");
                unlock("p5_lock");
                break;
        }

        if (data.lastunlock == 14) {
            unlock("p1_lock");
            unlock("p2_lock");
            unlock("p3_lock");
            unlock("p4_lock");
            unlock("p5_lock");
        }

    }

    const colorsetforimg = (data) => {

        if (loading) {

            switch (index) {
                case 0:
                    setFillColors(["white"]);
                    break;
                case 1:
                    setFillColors(["white"]);
                    break;
                case 2:
                    setFillColors(["white"]);
                    break
                case 3:
                    setFillColors(["white"]);
                    break
                case 4:
                    setFillColors(["white"]);
                    break
            }

        } else if (loading == false) {

            switch (index) {
                case 0:
                    setFillColors(data.Advanced.fill_color.Ap1);
                    checklock();
                    break;
                case 1:
                    setFillColors(data.Advanced.fill_color.Ap2);
                    checklock();
                    break;
                case 2:
                    setFillColors(data.Advanced.fill_color.Ap3);
                    checklock();
                    break;
                case 3:
                    setFillColors(data.Advanced.fill_color.Ap4);
                    checklock();
                    break
                case 4:
                    setFillColors(data.Advanced.fill_color.Ap5);
                    checklock();
                    break
            }
        }

    }

    useEffect(() => {
        fetchpaints();
        colorsetforimg(data);


    }, [index]);

    //SweeetArlert Success
    const levelup_swalSuccess = () => {
        Swal.fire({
            title: 'Congratulations!You have completed all the levels. ',
            confirmButtonText: 'GO',
            width: 500,
            padding: '7em',
            color: 'brown',
            background: '#fff url(/images/celeb.webp) no-repeat top',
            backdrop: `
                    rgba(0,0,123,0.4)
                    url("/images/celebration.gif")
                    left top
                    no-repeat
                `
        })

    }

    const handleClick = () => {
        window.location.href = '/SoftSkill/Painting/Intermediate';
    }



    //SweeetArlert Success
    const swalSuccess = () => {
        Swal.fire({
            title: 'You have unlocked next level !',
            confirmButtonText: 'GO',
            width: 500,
            padding: '7em',
            color: 'brown',
            background: '#fff url(/images/celeb.webp) no-repeat top',
            backdrop: `
              rgba(0,0,123,0.4)
              url("/images/celebration.gif")
              left top
              no-repeat
            `
        })

    }

    //Sweet Alert Unsuccess
    const swalUnsuccess = () => {
        Swal.fire({
            title: "Don't worry.",
            text: "Please Try Again",
            imageUrl: '/images/celebracion.png',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
        })
    }

    const onSubmit = (color1, color2, color3, color4, color5, addStarpoints, currentlevel, lastUnlock_pic, currentstate, http_rq, uid) => {



        const Painting = {
            uid: "user123",
            current_state: currentstate,
            last_unlock_p: lastUnlock_pic,
            star_points: addStarpoints,
            level: currentlevel,
            Beginner: {
                fill_color: {
                    bp1: "gray",
                    bp2: "red",
                    bp3: "green",
                    bp4: "blue",
                    bp5: "yellow",
                }
            },
            Intermediate: {
                fill_color: {
                    Ip1: ["red", "yellow"],
                    Ip2: ["green", "#784315"],
                    Ip3: ["green", "purple"],
                    Ip4: ["red", "green"],
                    Ip5: ["white", "white"],
                }
            },
            Advanced: {
                fill_color: {
                    Ap1: color1,
                    Ap2: color2,
                    Ap3: color3,
                    Ap4: color4,
                    Ap5: color5,
                }
            },
        }

        if (http_rq == "post") {
            axios
                .post(url, Painting)
                .then(res => console.log(res.data))
                .catch(err => console.log(err.msg))
        } else if (http_rq == "put") {
            axios
                .put(url + "/update/" + uid, Painting)
                .then(res => console.log(res.data))
                .catch(err => console.log(err.msg))
        }

    }

    const unlock = (elementID) => {
        var lock = document.getElementById(elementID);
        lock.style.display = "none";
    };

    const lock = (elementID) => {
        var lock = document.getElementById(elementID);
        lock.style.display = "block";
    };

    // Start Validate Advanced Images
    const validate_Beginer = () => {
        var lock;
        var color1 = [2], color2 = [2], color3 = [2], color4 = [2], color5 = [2];
        switch (index) {
            case 0:
                if (fillColors[1] === "#00A2E8" && fillColors[0] === "red" && fillColors[2] === "#B5E61D") {
                    unlock("p2_lock");
                    color1[0] = "red";
                    color1[1] = "#00A2E8";
                    color1[2] = "#B5E61D";
                    color2[0] = "white";
                    color2[1] = "white";
                    color2[2] = "white";
                    color3[0] = "white";
                    color3[1] = "white";
                    color3[2] = "white";
                    color4[0] = "white";
                    color4[1] = "white";
                    color4[2] = "white";
                    color5[0] = "white";
                    color5[1] = "white";
                    color5[2] = "white";
                    onSubmit(color1, color2, color3, color4, color5, 55, "Advance", 10, "Inprogress", "put", uid);
                    swalSuccess();
                } else {
                    swalUnsuccess();
                } break;
            case 1:
                if (fillColors[1] === "green" && fillColors[0] === "red" && fillColors[2] === "yellow") {
                    unlock("p3_lock");
                    color1[0] = "red";
                    color1[1] = "#00A2E8";
                    color1[2] = "#B5E61D";
                    color2[0] = "red";
                    color2[1] = "green";
                    color2[2] = "yellow";
                    color3[0] = "white";
                    color3[1] = "white";
                    color3[2] = "white";
                    color4[0] = "white";
                    color4[1] = "white";
                    color4[2] = "white";
                    color5[0] = "white";
                    color5[1] = "white";
                    color5[2] = "white";
                    onSubmit(color1, color2, color3, color4, color5, 60, "Advance", 11, "Inprogress", "put", uid);
                    swalSuccess();
                } else {
                    swalUnsuccess();
                } break;
            case 2:
                if (fillColors[1] === "#B5E61D" && fillColors[2] === "#FF7F27" && fillColors[0] === "#784315") {
                    unlock("p4_lock");
                    color1[0] = "red";
                    color1[1] = "#00A2E8";
                    color1[2] = "#B5E61D";
                    color2[0] = "red";
                    color2[1] = "green";
                    color2[2] = "yellow";
                    color3[0] = "#784315";
                    color3[1] = "#B5E61D";
                    color3[2] = "#FF7F27";
                    color4[0] = "white";
                    color4[1] = "white";
                    color4[2] = "white";
                    color5[0] = "white";
                    color5[1] = "white";
                    color5[2] = "white";
                    onSubmit(color1, color2, color3, color4, color5, 65, "Advance", 12, "Inprogress", "put", uid);
                    swalSuccess();
                } else {
                    swalUnsuccess();
                } break;
            case 3:
                if (fillColors[0] === "yellow" && fillColors[1] === "black" && fillColors[2] === "#EFE4B0") {
                    unlock("p5_lock");
                    color1[0] = "red";
                    color1[1] = "#00A2E8";
                    color1[2] = "#B5E61D";
                    color2[0] = "red";
                    color2[1] = "green";
                    color2[2] = "yellow";
                    color3[0] = "#784315";
                    color3[1] = "#B5E61D";
                    color3[2] = "#FF7F27";
                    color4[0] = "yellow";
                    color4[1] = "black";
                    color4[2] = "#EFE4B0";
                    color5[0] = "white";
                    color5[1] = "white";
                    color5[2] = "white";
                    onSubmit(color1, color2, color3, color4, color5, 70, "Advance", 13, "Inprogress", "put", uid);
                    swalSuccess();
                } else {
                    swalUnsuccess();
                } break;
            case 4:
                if (fillColors[0] === "blue" && fillColors[1] === "black" && fillColors[2] === "#00A2E8") {
                    lock = document.getElementById("p2_lock");
                    lock.style.display = "none";
                    color1[0] = "red";
                    color1[1] = "#00A2E8";
                    color1[2] = "#B5E61D";
                    color2[0] = "red";
                    color2[1] = "green";
                    color2[2] = "yellow";
                    color3[0] = "#784315";
                    color3[1] = "#B5E61D";
                    color3[2] = "#FF7F27";
                    color4[0] = "yellow";
                    color4[1] = "black";
                    color4[2] = "#EFE4B0";
                    color5[0] = "blue";
                    color5[1] = "black";
                    color5[2] = "#00A2E8";
                    onSubmit(color1, color2, color3, color4, color5, 75, "Advance", 14, "Inprogress", "put", uid);
                    levelup_swalSuccess(); 


                } else {
                    swalUnsuccess();
                } break;
        }
    }//End Validate Advanced Images

    // Onfill
    const onFillColor = (i) => {
        let newFillColors = fillColors.slice(0)
        newFillColors[i] = currentColor
        setFillColors(newFillColors)
        console.log(currentColor)
    }

    //ColorBox
    const colors = ['black', 'gray', '#880015', 'yellow', 'green', 'blue', '#FF7F27', '#784315', 'purple', '#EA3FF7', 'white', '#C3C3C3', 'red', '#EFE4B0', '#B5E61D', '#00A2E8', '#FFC90E', '#F09B59', '#EE8AF8', '#FF91CB']

    //Color Change
    const onChangeColors = (i) => {

        switch (i) {
            case 0:
                setCurrentColor(colors[i])
                break
            case 1:
                setCurrentColor(colors[i])
                break
            case 2:
                setCurrentColor(colors[i])
                break
            case 3:
                setCurrentColor(colors[i])
                break
            case 4:
                setCurrentColor(colors[i])
                break
            case 5:
                setCurrentColor(colors[i])
                break
            case 6:
                setCurrentColor(colors[i])
                break
            case 7:
                setCurrentColor(colors[i])
                break
            case 8:
                setCurrentColor(colors[i])
                break
            case 9:
                setCurrentColor(colors[i])
                break
            case 10:
                setCurrentColor(colors[i])
                break
            case 11:
                setCurrentColor(colors[i])
                break
            case 12:
                setCurrentColor(colors[i])
                break
            case 13:
                setCurrentColor(colors[i])
                break
            case 14:
                setCurrentColor(colors[i])
                break
            case 15:
                setCurrentColor(colors[i])
                break
            case 16:
                setCurrentColor(colors[i])
                break
            case 17:
                setCurrentColor(colors[i])
                break
            case 18:
                setCurrentColor(colors[i])
                break
            case 19:
                setCurrentColor(colors[i])
                break
            case 20:
                setCurrentColor(colors[i])
                break

        }
    }



    return (
        <div class="container mt-5 pt-5">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                    <div className="container">
                        <div className="row mb-3">
                            <center>
                                <LevelNav level={3} />
                            </center>
                        </div>
                        <div className="row">
                            <div className="container boder shadow-lg p-5">
                                {/* Colored img carousel*/}
                                <Carousel interval={null} activeIndex={index} onSelect={(selectedIndex) => setIndex(selectedIndex)} variant="dark">
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-50 rounded mx-auto"
                                            src="/images/SVG/Advanced/a1.svg"
                                            alt="Image 2"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-50 rounded mx-auto"
                                            src="/images/SVG/Advanced/a2.svg"
                                            alt="Image 2"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-50 rounded mx-auto"
                                            src="/images/SVG/Advanced/a3.svg"
                                            alt="Image 3"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-50 rounded mx-auto"
                                            src="/images/SVG/Advanced/a4.svg"
                                            alt="Image 2"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-75 rounded mx-auto"
                                            src="/images/SVG/Advanced/a5.svg"
                                            alt="Image 3"
                                        />
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                    <div className="container">
                        <div className="row mb-3">
                            <div className="col-4">
                                <Scorebox level={data.level} star_points={data.star_points} />
                            </div>
                            <div className="col-8">
                                {/* Color Box */}
                                <ColorBox onChangeColor={onChangeColors} slcColors={currentColor} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="container boder shadow-lg p-5">
                                {/* Uncolored img carousel*/}
                                <Carousel controls={false} indicators={false} interval={null} activeIndex={index} onSelect={(selectedIndex) => setIndex(selectedIndex)} variant="dark">
                                    <Carousel.Item>
                                        <div id="p1_lock" class="bg-dark text-white p-5 text-center opacity-50 position-absolute w-100 h-100"><span><i class="bi bi-lock-fill me-2 lock-icon"></i></span><h1>Locked</h1></div>
                                        <A1 fillColors={fillColors} onFill={onFillColor} />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div id="p2_lock" class="bg-dark text-white p-5 text-center opacity-50 position-absolute w-100 h-100"><span><i class="bi bi-lock-fill me-2 lock-icon"></i></span><h1>Locked</h1></div>
                                        <A2 fillColors={fillColors} onFill={onFillColor} />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div id="p3_lock" class="bg-dark text-white p-5 text-center opacity-50 position-absolute w-100 h-100"><span><i class="bi bi-lock-fill me-2 lock-icon"></i></span><h1>Locked</h1></div>
                                        <A3 fillColors={fillColors} onFill={onFillColor} />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div id="p4_lock" class="bg-dark text-white p-5 text-center opacity-50 position-absolute w-100 h-100"><span><i class="bi bi-lock-fill me-2 lock-icon"></i></span><h1>Locked</h1></div>
                                        <A4 fillColors={fillColors} onFill={onFillColor} />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div id="p5_lock" class="bg-dark text-white p-5 text-center opacity-50 position-absolute w-100 h-100"><span><i class="bi bi-lock-fill me-2 lock-icon"></i></span><h1>Locked</h1></div>
                                        <A5 fillColors={fillColors} onFill={onFillColor} />
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <center><Button className='btn btn-Primary w-25 mt-3' onClick={validate_Beginer}>Submit</Button></center>
            </div>
        </div>
    );
}