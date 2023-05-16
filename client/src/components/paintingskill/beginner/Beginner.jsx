import React, { useState, useEffect } from 'react';

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
//Bootstrap icons
import 'bootstrap-icons/font/bootstrap-icons.css';

//Sweet alert
import Swal from 'sweetalert2';

// Css
import '../painting.css'

import LevelNav from '../../nav/levelNav/levelNav';

import ColorBox from '../colorbox/colorbox';

//React Bootstrap components
import { Button, Carousel } from 'react-bootstrap';

// SVG Components
import Cloud from '../SVG/Beginner/cloud';
import Circle from '../SVG/Beginner/Circle';
import Gerald from '../SVG/Beginner/Gerald';
import Star from '../SVG/Beginner/star';
import Rectangle from '../SVG/Beginner/rectangle';

import axios from 'axios';

import Scorebox from '../scorebox/scorebox';

export default function Beginner() {

    // Carousel State
    const [index, setIndex] = useState(0);
    //Fill Color
    const [fillColors, setFillColors] = useState(Array(0))
    //Current Color
    const [currentColor, setCurrentColor] = useState('white')

    // data
    const [data, setData] = useState([true]);

    // data loading state
    const [loading, setLoading] = useState();

    // uid
    const uid = "6420f3c32768b05b526730e6";


    const fetchpaints = async () => {

        const responsePosts = await axios.get('http://localhost:5200/softskill/painting/level/update-beginner/' + uid);
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
            case 2:
                unlock("p2_lock");
                lock("p3_lock");
                lock("p4_lock");
                lock("p5_lock");
                break;
            case 3:
                unlock("p2_lock");
                unlock("p3_lock");
                lock("p4_lock");
                lock("p5_lock");
                break;
            case 4:
                unlock("p2_lock");
                unlock("p3_lock");
                unlock("p4_lock");
                lock("p5_lock");
                break;
            case 5:
                unlock("p2_lock");
                unlock("p3_lock");
                unlock("p4_lock");
                unlock("p5_lock");
                break;
            case 6:
                unlock("p2_lock");
                unlock("p3_lock");
                unlock("p4_lock");
                unlock("p5_lock");
                break;
        }

        if (data.level == "Advance" || data.level == "Intermediate") {
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
            }

        } else if (loading == false) {

            switch (index) {
                case 0:
                    setFillColors([data.Beginner.fill_color.bp1]);
                    checklock();
                    break;
                case 1:
                    setFillColors([data.Beginner.fill_color.bp2]);
                    checklock();
                    break;
                case 2:
                    setFillColors([data.Beginner.fill_color.bp3]);
                    checklock();
                    break;
                case 3:
                    setFillColors([data.Beginner.fill_color.bp4]);
                    checklock();
                    break
                case 4:
                    setFillColors([data.Beginner.fill_color.bp5]);
                    checklock();
                    break
            }
        }

    }

    useEffect(() => {
        fetchpaints();
        colorsetforimg(data);


    }, [index]);


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


    //SweeetArlert Success
    const levelup_swalSuccess = () => {
        Swal.fire({
            title: 'Congraturalions! You have unlocked Intermediate. ',
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

        const url = "http://localhost:5200/softskill/painting/level/update-beginner/";

        const Painting = {
            uid: "user123",
            current_state: currentstate,
            last_unlock_p: lastUnlock_pic,
            star_points: addStarpoints,
            level: currentlevel,
            Beginner: {
                fill_color: {
                    bp1: color1,
                    bp2: color2,
                    bp3: color3,
                    bp4: color4,
                    bp5: color5,
                }
            },
            Intermediate: {
                fill_color: {
                    Ip1: ["white", "white"],
                    Ip2: ["white", "white"],
                    Ip3: ["white", "white"],
                    Ip4: ["white", "white"],
                    Ip5: ["white", "white"],
                }
            },
            Advanced: {
                fill_color: {
                    Ap1: ["white", "white", "white"],
                    Ap2: ["white", "white", "white"],
                    Ap3: ["white", "white", "white"],
                    Ap4: ["white", "white", "white"],
                    Ap5: ["white", "white", "white"],
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

    const validate_Beginer = () => {

        const lastunlock = data.last_unlock_p;
        const lavel = data.level;

        switch (index) {
            case 0:
                if (fillColors == 'gray') {

                    unlock("p2_lock");
                    swalSuccess();
                    onSubmit("gray", "white", "white", "white", "white", 5, "Beginner", 2, "Inprogress", "put", uid);
                    fetchpaints();
                } else {
                    swalUnsuccess();

                }
                break;
            case 1:
                if (fillColors == 'red') {
                    unlock("p3_lock");
                    swalSuccess();
                    onSubmit("gray", "red", "white", "white", "white", 10, "Beginner", 3, "Inprogress", "put", uid);
                    fetchpaints();
                } else {
                    swalUnsuccess();
                }
                break;
            case 2:
                if (fillColors == 'green') {
                    unlock("p4_lock");
                    swalSuccess();
                    onSubmit("gray", "red", "green", "white", "white", 15, "Beginner", 4, "Inprogress", "put", uid);
                    fetchpaints();
                } else {
                    swalUnsuccess();
                }
                break;
            case 3:
                if (fillColors == 'blue') {
                    unlock("p5_lock");
                    swalSuccess();
                    onSubmit("gray", "red", "green", "blue", "white", 20, "Beginner", 5, "Inprogress", "put", uid);
                    fetchpaints();

                } else {
                    swalUnsuccess();
                }
                break;
            case 4:
                if (fillColors == 'yellow') {
                    swalSuccess();
                    onSubmit("gray", "red", "green", "blue", "yellow", 25, "Beginner", 6, "Inprogress", "put", uid);
                    fetchpaints();
                    handleClick();
                } else {
                    swalUnsuccess();
                }
                break;
        }
    }//End Validate Beginner Images

    // Onfill
    const onFillColor = (i) => {
        let newFillColors = fillColors.slice(0)
        newFillColors[i] = currentColor
        setFillColors(newFillColors)
        // console.log(currentColor)
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

            {loading ? <div>Loading</div> :

                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                        <div className="container">
                            <div className="row mb-3">
                                <center><LevelNav level={1} /></center>
                            </div>
                            <div className="row">
                                <div className="container boder shadow-lg p-5">
                                    {/* Colored img carousel*/}
                                    <Carousel interval={null} activeIndex={index} onSelect={(selectedIndex) => setIndex(selectedIndex)} variant="dark">
                                        <Carousel.Item>

                                            <img
                                                className="d-block w-50 rounded mx-auto"
                                                src="/images/SVG/Beginner/cloud.svg"
                                                alt="Image 2"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-50 rounded mx-auto"
                                                src="/images/SVG/Beginner/star.svg"
                                                alt="Image 2"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-50 rounded mx-auto"
                                                src="/images/SVG/Beginner/Gerald.svg"
                                                alt="Image 3"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-50 rounded mx-auto"
                                                src="/images/SVG/Beginner/rectangle.svg"
                                                alt="Image 2"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-50 rounded mx-auto"
                                                src="/images/SVG/Beginner/Circle.svg"
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
                                            <Cloud fillColors={fillColors} onFill={onFillColor} className="w-50" />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <div id="p2_lock" class="bg-dark text-white p-5 text-center opacity-50 position-absolute w-100 h-100"><span><i class="bi bi-lock-fill me-2 lock-icon"></i></span><h1>Locked</h1></div>
                                            <Star fillColors={fillColors} onFill={onFillColor} />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <div id="p3_lock" class="bg-dark text-white p-5 text-center opacity-50 position-absolute w-100 h-100"><span><i class="bi bi-lock-fill me-2 lock-icon"></i></span><h1>Locked</h1></div>
                                            <Gerald fillColors={fillColors} onFill={onFillColor} />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <div id="p4_lock" class="bg-dark text-white p-5 text-center opacity-50 position-absolute w-100 h-100"><span><i class="bi bi-lock-fill me-2 lock-icon"></i></span><h1>Locked</h1></div>
                                            <Rectangle fillColors={fillColors} onFill={onFillColor} />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <div id="p5_lock" class="bg-dark text-white p-5 text-center opacity-50 position-absolute w-100 h-100"><span><i class="bi bi-lock-fill me-2 lock-icon"></i></span><h1>Locked</h1></div>
                                            <Circle fillColors={fillColors} onFill={onFillColor} />
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            }
            <div className="row">
                <center><Button className='btn btn-Primary w-25 mt-3' onClick={validate_Beginer}>Submit</Button></center>
            </div>

        </div>

    );
}