import React, { useState, useEffect } from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import ResponsivePiano from '../piano/ResponsivePiano';

import LevelNavM from '../../nav/levelNav/levelNavM';

import Scoreboxm from '../scorebox/scoreboxm';

//Sweet alert
import Swal from 'sweetalert2';

import axios from 'axios';

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.ModelTitle}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <video src={"/videos/" + props.CurrentLevel + "M/" + props.SubLevel + ".mp4"} width="100%" height="auto" controls autoplay />

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default function MusicB() {

    const [modalShow, setModalShow] = useState(false);
    const [modelTitle, setModelTitle] = useState("Beginner Level - Tutorial");
    const [level, setLevel] = useState();
    const [sublevel, setSubLevel] = useState();
    const [starpoints, setStarPoints] = useState();
    const [noLevel, setNoLevel] = useState(0);
    // data
    const [data, setData] = useState([true]);

    const [loading, setLoading] = useState(true);

    var flag = 0;
    var tempArray = [2];
    const levelup = true;
    const uid = '645e76b60a8930972b9419f3'
    const url = 'http://localhost:5200/softskill/music/'

    const putdata = (myStarPoints,myLevel,mySublevel) => {

        const musicObj = {
            uid:"user123",
            starPoints:myStarPoints,
            currentLevel:myLevel,
            subLevel:mySublevel
        }
        
        axios
                .put(url+"update/"+uid, musicObj)
                .then(res => {
                    console.log("Put Res"+res.data);
                    fetchdata();;
                })
                .catch(err => console.log("Error"+err.msg))
    }

    const fetchdata = async () => {

        setLoading(true)

        axios.get(url + uid).then((res) => {
            setData(res.data);
            setLevel(data.currentLevel);
            setSubLevel(data.subLevel);
            setStarPoints(data.starPoints);
            if (data.currentLevel == "Beginner") {
                setNoLevel(1);
            } else if (data.currentLevel == "Intermediate") {
                setNoLevel(2);
            } else if (data.currentLevel == "Advance") {
                setNoLevel(3);
            }
            if(data.currentLevel == "Advance" && data.subLevel == 5){
                setModalShow(false);
            }else{
                setModalShow(true);
            }
            setLoading(false);
            
        });

    }

    useEffect(() => {
        fetchdata();
        console.log("useEffect running...")

    }, [])

    //SweeetArlert Success
    const swalSuccess = (levelup) => {
        if (levelup) {

            if (level == "Beginner") {
                Swal.fire({
                    title: "Level up! You are now Intermediate Level",
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
            } else if (level == "Intermediate") {
                Swal.fire({
                    title: "Level up! You are now Advance Level",
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
            } else if (level == "Advance") {
                Swal.fire({
                    title: "Congratulations! you completed music skill development",
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

        } else {

            Swal.fire({
                title: "You played successfully!",
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


    }

    const funOnLevel = (indexid) => {
        setNoLevel(indexid);
        console.log("check:" + indexid);
    }

    const validateStopNote = (midiNumber) => {

        console.log("Level :" + data.currentLevel);

        if (data.currentLevel == "Beginner") {
            validateStopNoteBeginner(midiNumber);
        } else if (data.currentLevel == "Intermediate") {
            validateStopNoteIntermediate(midiNumber);
        } else if (data.currentLevel == "Advance") {
            validateStopNoteAdvance(midiNumber);
        }

    }

    const validateStopNoteBeginner = (midiNumber) => {

        console.log("sub level" + data.subLevel);

        switch (data.subLevel) {

            case 1:
                if (midiNumber == 48) {
                    swalSuccess();
                    setSubLevel(2);
                    setStarPoints(5);
                    putdata(5,"Beginner",2);
                    
                }
                break
            case 2:
                if (midiNumber == 50) {
                    swalSuccess();
                    setSubLevel(3);
                    setStarPoints(10);
                    putdata(10,"Beginner",3);

                }
                break
            case 3:
                if (midiNumber == 52) {
                    swalSuccess();
                    setSubLevel(4);
                    setStarPoints(15);
                    putdata(15,"Beginner",4);

                }
                break
            case 4:
                if (midiNumber == 53) {
                    swalSuccess();
                    setSubLevel(5);
                    setStarPoints(20);
                    putdata(20,"Beginner",5);

                }
                break
            case 5:
                if (midiNumber == 55) {
                    swalSuccess();
                    setSubLevel(6);
                    setStarPoints(25);
                    putdata(25,"Beginner",6);

                }
                break
            case 6:
                if (midiNumber == 57) {
                    swalSuccess();
                    setSubLevel(7);
                    setStarPoints(30);
                    putdata(30,"Beginner",7);

                }
                break
            case 7:
                if (midiNumber == 59) {
                    swalSuccess();
                    setSubLevel(8);
                    setStarPoints(35);
                    putdata(35,"Beginner",8);

                }
                break
            case 8:
                if (midiNumber == 60) {
                    swalSuccess(levelup);
                    setStarPoints(40);
                    setLevel("Intermediate");
                    setSubLevel(1);
                    setModelTitle("Intermediate Level - Tutorial");
                    putdata(40,"Intermediate",1);

                }
                break
        }
    }



    const validateStopNoteIntermediate = (midiNumber) => {

        if (flag == 0) {
            tempArray[0] = midiNumber
            console.log("@ Flag 0" + flag + ":" + tempArray);
            flag = 1;
        } else if (flag == 1) {
            tempArray[1] = midiNumber
            console.log("@ Flag 0" + flag + ":" + tempArray);
            flag = 0;
            switch (data.subLevel) {
                case 1:
                    if (tempArray[0] == 48 && tempArray[1] == 50) {
                        swalSuccess();
                        setSubLevel(2);
                        setStarPoints(45);
                        putdata(45,"Intermediate",2);

                    }
                    break
                case 2:
                    if (tempArray[0] == 50 && tempArray[1] == 52) {
                        swalSuccess();
                        setSubLevel(3);
                        setStarPoints(50);
                        putdata(50,"Intermediate",3);
                    }
                    break
                case 3:
                    if (tempArray[0] == 52 && tempArray[1] == 53) {
                        swalSuccess();
                        setSubLevel(4);
                        setStarPoints(55);
                        putdata(55,"Intermediate",4);
                    }
                    break
                case 4:
                    if (tempArray[0] == 53 && tempArray[1] == 55) {
                        swalSuccess();
                        setSubLevel(5);
                        setStarPoints(60);
                        putdata(60,"Intermediate",5);
                    }
                    break
                case 5:
                    if (tempArray[0] == 55 && tempArray[1] == 57) {
                        swalSuccess();
                        setSubLevel(6);
                        setStarPoints(65);
                        putdata(65,"Intermediate",6);
                    }
                    break
                case 6:
                    if (tempArray[0] == 57 && tempArray[1] == 59) {
                        swalSuccess();
                        setSubLevel(7);
                        setStarPoints(70);
                        putdata(70,"Intermediate",7);
                    }
                    break
                case 7:
                    if (tempArray[0] == 59 && tempArray[1] == 60) {
                        swalSuccess(levelup);
                        setStarPoints(75);
                        setLevel("Advance");
                        setSubLevel(1);
                        setModelTitle("Advance Level - Tutorial");
                        putdata(75,"Advance",1);
                    }
                    break

            }
        }
    }

    const validateStopNoteAdvance = (midiNumber) => {

        if (flag == 0) {
            tempArray[0] = midiNumber;
            console.log("@ Flag 0" + flag + ":" + tempArray);
            flag = 1;
        } else if (flag == 1) {
            tempArray[1] = midiNumber;
            console.log("@ Flag 0" + flag + ":" + tempArray);
            flag = 2;
        } else if (flag == 2) {
            tempArray[2] = midiNumber;
            console.log("@ Flag 0" + flag + ":" + tempArray);
            flag = 0;

            switch (data.subLevel) {
                case 1:
                    if (tempArray[0] == 48 && tempArray[1] == 50 && tempArray[2] == 52) {
                        swalSuccess();
                        setSubLevel(2);
                        setStarPoints(80);
                        putdata(80,"Advance",2);
                    }
                    break
                case 2:
                    if (tempArray[0] == 52 && tempArray[1] == 53 && tempArray[2] == 55) {
                        swalSuccess();
                        setSubLevel(3);
                        setStarPoints(85);
                        putdata(85,"Advance",3);
                    }
                    break
                case 3:
                    if (tempArray[0] == 55 && tempArray[1] == 57 && tempArray[2] == 59) {
                        swalSuccess();
                        setSubLevel(4);
                        setStarPoints(90);
                        putdata(90,"Advance",4);
                    }
                    break
                case 4:
                    if (tempArray[0] == 59 && tempArray[1] == 60 && tempArray[2] == 50) {
                        swalSuccess(levelup);
                        setStarPoints(95);
                        setLevel("Advance");
                        setSubLevel(5);
                        setModelTitle("Advance Level - Tutorial");
                        putdata(95,"Advance",5);
                    }
                    break

            }

        }

    }

    if (loading) {
        return (
            <h1>Loading...</h1>
        )
    }
    return (
        <div className="container-fluid">
            <div className="container mt-5 pt-5">
                <h2 className='text-center '>Music Skill Development - {data.currentLevel} Level</h2>
                <div className="row">
                    <div className="col-6">
                        <center>
                            <LevelNavM level={noLevel} onNoLevel={funOnLevel} />
                        </center>
                    </div>
                    <div className="col-6">
                        <center>
                            <Scoreboxm level={data.currentLevel} star_points={data.starPoints} />
                        </center>
                    </div>

                </div>
                <ResponsivePiano className="shadow-lg mt-5" onData={validateStopNote} />
            </div>
            <MyVerticallyCenteredModal
                CurrentLevel={data.currentLevel}
                SubLevel={data.subLevel}
                ModelTitle={modelTitle}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>

    );

}