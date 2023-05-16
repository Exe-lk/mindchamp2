import { React, useEffect, useState } from "react";

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

import ProgressBar from 'react-bootstrap/ProgressBar';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import axios from 'axios';
import Beginner from "../beginner/Beginner";

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
                <img className="img-fluid" src={"/images/certificates/softskill/painting/" + props.ModelCName + ".png"} alt="beginner-badge" />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}


export default function ReportPS() {

    const [modalShow, setModalShow] = useState(false);
    const [modelCName, setModelCName] = useState("cname");
    const [modelTitle, setModelTitle] = useState("Title");

    const [loading, setLoading] = useState(true);

    // data
    const [data, setData] = useState(null);

    const [musicData,setMusicData] = useState(null);

    // uid
    const uid = "6420f3c32768b05b526730e6";

    var beginnerP = 0;
    var intermediateP = 0;
    var AdvancedP = 0;
    var beginnerM = 0;
    var intermediateM = 0;
    var AdvancedM = 0;

    useEffect(() => {
        // setLoading(true);
        // axios.get('http://localhost:5200/softskill/painting/level/update-beginner/' + uid).then((res) => {
        //     setData(res.data);
        //     setLoading(false);
        //     console.log(data);
        // });

        fetchpaints();
        fetchmusic();

    }, []);

    const fetchpaints = async () => {
        setLoading(true)
        await axios.get('http://localhost:5200/softskill/painting/level/update-beginner/' + uid).then((res) => {
            setData(res.data);
            
            fetchmusic();
            console.log(data);
            setLoading(false);
        });
    }

    const fetchmusic = async () =>{
        // setLoading(true)
        await axios.get("http://localhost:5200/softskill/music/645e76b60a8930972b9419f3").then((res) =>{
            setMusicData(res.data);    
            // setLoading(false);
            console.log(musicData);
        })
    }

    const OnClickBeginnerP = () => {

        fetchpaints();
        setModalShow(true)
        setModelCName("BeginnerP")
        setModelTitle("Painting Skill Beginner Level Completed Certificate")

    }

    const OnClickIntermediateP = () => {

        setModalShow(true)
        setModelCName("IntermediateP")
        setModelTitle("Painting Skill Intermediate Level Completed Certificate")
    }

    const OnClickAdvanceP = () => {

        setModalShow(true)
        setModelCName("AdvanceP")
        setModelTitle("Painting Skill Advance Level Completed Certificate")
    }

    const OnClickBeginnerM = () => {

        setModalShow(true)
        setModelCName("BeginnerM")
        setModelTitle("Music Skill Beginner Level Completed Certificate")
    }

    const OnClickIntermediateM = () => {

        setModalShow(true)
        setModelCName("IntermediateM")
        setModelTitle("Music Skill Intermediate Level Completed Certificate")
    }

    const OnClickAdvanceM = () => {

        setModalShow(true)
        setModelCName("AdvanceM")
        setModelTitle("Music Skill Advance Level Completed Certificate")

    }

    if(loading){
        return(
            <h1>Loading...</h1>
        )
    }else{
        const level = data.level
        const lastUnlock = data.last_unlock_p
        const currentPicture = lastUnlock - 1;
        
        

        if(level=="Beginner"){
            console.log("Current:"+currentPicture);
            console.log("Level:"+level);
            switch(currentPicture){
                case 1:
                beginnerP = 1/5 * 100;
                intermediateP = 0;
                AdvancedP = 0;
                    break;
                case 2:
                beginnerP = 2/5 * 100;
                intermediateP = 0;
                AdvancedP = 0;
                    break;
                case 3:
                beginnerP = 3/5 * 100;
                intermediateP = 0;
                AdvancedP = 0;
                    break;
                case 4:
                beginnerP = 4/5 * 100;
                intermediateP = 0;
                AdvancedP = 0;
                    break;
                case 5:
                beginnerP = 5/5 * 100;
                intermediateP = 0;
                AdvancedP = 0;
                    break;
            }
        }else if(level=="Intermediate"){
            console.log("Level:"+level);
            switch(currentPicture){
                case 6:
                beginnerP = 5/5 * 100;
                intermediateP = 1/4 * 100;
                AdvancedP = 0;
                    break;
                case 7:
                beginnerP = 5/5 * 100;
                intermediateP = 2/4 * 100;
                AdvancedP = 0;
                    break;
                case 8:
                beginnerP = 5/5 * 100;
                intermediateP = 3/4 * 100;
                AdvancedP = 0;
                    break;
                case 9:
                beginnerP = 5/5 * 100;
                intermediateP = 4/4 * 100;
                AdvancedP = 0;
                    break;
            }
        }else if(level=="Advance"){
            console.log("Level:"+level);
            switch(currentPicture){
                case 10:
                beginnerP = 5/5 * 100;
                intermediateP = 4/4 * 100;
                AdvancedP = 2/5 * 100;
                    break;
                case 11:
                beginnerP = 5/5 * 100;
                intermediateP = 4/4 * 100;
                AdvancedP = 3/5 * 100;
                    break;
                case 12:
                beginnerP = 5/5 * 100;
                intermediateP = 4/4 * 100;
                AdvancedP = 4/5 * 100;
                    break;
                case 13:
                beginnerP = 5/5 * 100;
                intermediateP = 4/4 * 100;
                AdvancedP = 5/5 * 100;
                    break;
                case 14:
                beginnerP = 5/5 * 100;
                intermediateP = 4/4 * 100;
                AdvancedP = 5/5 * 100;
                    break;
            }
        }

        const mlevel = musicData.currentLevel;
        const mSubLevel = musicData.subLevel;
        
        if(mlevel == "Beginner"){

            switch(mSubLevel){
                case 1:
                beginnerM = 0/6 * 100;
                intermediateM = 0;
                AdvancedM = 0;
                    break;
                case 2:
                beginnerM = 1/6 * 100;
                intermediateM = 0;
                AdvancedM = 0;
                    break;
                case 3:
                beginnerM = 2/6 * 100;
                intermediateM = 0;
                AdvancedM = 0;
                    break;
                case 4:
                beginnerM = 3/6 * 100;
                intermediateM = 0;
                AdvancedM = 0;
                    break;
                case 5:
                beginnerM = 4/6 * 100;
                intermediateM = 0;
                AdvancedM = 0;
                    break;
                case 6:
                beginnerM = 5/6 * 100;
                intermediateM = 0;
                AdvancedM = 0;
                    break;
                case 7:
                beginnerM = 6/6 * 100;
                intermediateM = 0;
                AdvancedM = 0;
                    break;
                
            }

        }else if(mlevel == "Intermediate"){

            switch(mSubLevel){

                case 1:
                beginnerM = 7/7 * 100;
                intermediateM = 0/5 * 100;
                AdvancedM = 0;
                    break;
                case 2:
                beginnerM = 7/7 * 100;
                intermediateM = 1/5 * 100;
                AdvancedM = 0;
                    break;
                case 3:
                beginnerM = 7/7 * 100;
                intermediateM = 2/5 * 100;
                AdvancedM = 0;
                    break;
                case 4:
                beginnerM = 7/7 * 100;
                intermediateM = 3/5 * 100;
                AdvancedM = 0;
                    break;
                case 5:
                beginnerM = 7/7 * 100;
                intermediateM = 4/5 * 100;
                AdvancedM = 0;
                    break;
                case 6:
                beginnerM = 7/7 * 100;
                intermediateM = 5/5 * 100;
                AdvancedM = 0;
                    break;
                
            }

        }else if(mlevel == "Advance"){

            switch(mSubLevel){

                case 1:
                beginnerM = 7/7 * 100;
                intermediateM = 6/6 * 100;
                AdvancedM = 0/4 * 100;
                    break;
                case 2:
                beginnerM = 7/7 * 100;
                intermediateM = 6/6 * 100;
                AdvancedM = 1/4 * 100;
                    break;
                case 3:
                beginnerM = 7/7 * 100;
                intermediateM = 6/6 * 100;
                AdvancedM = 2/4 * 100;
                    break;
                case 4:
                beginnerM = 7/7 * 100;
                intermediateM = 6/6 * 100;
                AdvancedM = 3/4 * 100;
                    break;
                case 5:
                beginnerM = 7/7 * 100;
                intermediateM = 6/6 * 100;
                AdvancedM = 4/4 * 100;
                    break;
                
            }

        }
        
        return(
            <>
            
            <h1 className="text-center mt-3 mb-3">Soft Skill Development Report</h1>
            <div className="container bg-dark text-light rounded-5 p-5">
                <h4 className="mt-3">Painting Skill Development</h4>
                <div className="row mb-2">
                    <div className="col-6">
                        <h6>Beginner</h6>
                        <ProgressBar now={beginnerP} label={`${beginnerP}%`} />
                        {beginnerP === 100 ?(<button className="btn btn-success mt-2" data-bs-toggle="modal" data-bs-target="#myModal" onClick={() => OnClickBeginnerP()}>View Certificate</button>):(<p>Complete the Beginner level to view certificate</p>)}
                        
                    </div>
                    <div className="col-6">
                        <center>
                            <img className="img-fluid" src="/images/badgesp/BeginnerP.svg" alt="beginner-badge" />
                        </center>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-6">
                        <h6>Intermediate</h6>
                        <ProgressBar now={intermediateP} label={`${intermediateP}%`} />
                        {intermediateP === 100 ?(<button className="btn btn-success mt-2" data-bs-toggle="modal" data-bs-target="#myModal" onClick={() => OnClickIntermediateP()}>View Certificate</button>):(<p>Complete the Beginner level to view certificate</p>)}
                        
                    </div>
                    <div className="col-6">
                        <center>

                            <img className="img-fluid" src="/images/badgesp/IntermediateP.svg" alt="intermediate-badge" />

                        </center>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-6">
                        <h6>Advanced</h6>
                        <ProgressBar now={AdvancedP} label={`${AdvancedP}%`} />
                        
                        {AdvancedP === 100 ?(<button className="btn btn-success mt-2" onClick={() => OnClickAdvanceP()}>View Certificate</button>):(<p>Complete the Beginner level to view certificate</p>)}
                    </div>
                    <div className="col-6">
                        <center>

                            <img className="img-fluid" src="/images/badgesp/AdvanceP.svg" alt="advance-badge" />

                        </center>
                    </div>
                </div>
            </div>

            {/*  */}

            <div className="container bg-success text-light rounded-5 p-5 mt-5">
                <h4 className="mt-3">Music Skill Development</h4>
                <div className="row mb-2">
                    <div className="col-6">
                        <h6>Beginner</h6>
                        <ProgressBar now={beginnerM} label={`${beginnerM}%`} />
                        {/* <button className="btn btn-dark mt-2" onClick={() => OnClickBeginnerM()}>View Certificate</button> */}
                        {beginnerM === 100 ?(<button className="btn btn-dark mt-2" onClick={() => OnClickBeginnerM()}>View Certificate</button>):(<p>Complete the Beginner level to view certificate</p>)}
                    </div>
                    <div className="col-6">
                        <center>

                            <img className="img-fluid" src="/images/badgesm/BeginnerM.svg" alt="beginner-badge" />

                        </center>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-6">
                        <h6>Intermediate</h6>
                        <ProgressBar now={intermediateM} label={`${intermediateM}%`} />
                        {/* <button className="btn btn-dark mt-2" onClick={() => OnClickIntermediateM()}>View Certificate</button> */}
                        {intermediateM === 100 ?(<button className="btn btn-dark mt-2" onClick={() => OnClickIntermediateM()}>View Certificate</button>):(<p>Complete the intermediate level to view certificate</p>)}
                    </div>
                    <div className="col-6">
                        <center>

                            <img className="img-fluid" src="/images/badgesm/IntermediateM.svg" alt="intermediate-badge" />

                        </center>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-6">
                        <h6>Advanced</h6>
                        <ProgressBar now={AdvancedM} label={`${AdvancedM}%`} />
                        {/* <button className="btn btn-dark mt-2" onClick={() => OnClickAdvanceM()}>View Certificate</button> */}
                        {AdvancedM === 100 ?(<button className="btn btn-dark mt-2" onClick={() => OnClickAdvanceM()}>View Certificate</button>):(<p>Complete the advance level to view certificate</p>)}
                    </div>
                    <div className="col-6">
                        <center>

                            <img className="img-fluid" src="/images/badgesm/AdvanceM.svg" alt="advance-badge" />

                        </center>
                    </div>
                </div>
            </div>
            <MyVerticallyCenteredModal
                ModelTitle={modelTitle}
                ModelCName={modelCName}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

        </>
        )
    }

    return (

        <>
            
            {/* <h1 className="text-center mt-3 mb-3">Soft Skill Development Report</h1>
            <div className="container bg-dark text-light rounded-5 p-5">
                <h4 className="mt-3">Painting Skill Development</h4>
                <div className="row mb-2">
                    <div className="col-6">
                        <h6>Beginner</h6>
                        <ProgressBar now={beginnerP} label={`${beginnerP}%`} />
                        <button className="btn btn-success mt-2" data-bs-toggle="modal" data-bs-target="#myModal" onClick={() => OnClickBeginnerP()}>View Certificate</button>
                    </div>
                    <div className="col-6">
                        <center>
                            <img className="img-fluid" src="/images/badgesp/BeginnerP.svg" alt="beginner-badge" />
                        </center>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-6">
                        <h6>Intermediate</h6>
                        <ProgressBar now={intermediateP} label={`${intermediateP}%`} />
                        <button className="btn btn-success mt-2" data-bs-toggle="modal" data-bs-target="#myModal" onClick={() => OnClickIntermediateP()}>View Certificate</button>
                    </div>
                    <div className="col-6">
                        <center>

                            <img className="img-fluid" src="/images/badgesp/IntermediateP.svg" alt="intermediate-badge" />

                        </center>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-6">
                        <h6>Advanced</h6>
                        <ProgressBar now={AdvancedP} label={`${AdvancedP}%`} />
                        <button className="btn btn-success mt-2" onClick={() => OnClickAdvanceP()}>View Certificate</button>
                    </div>
                    <div className="col-6">
                        <center>

                            <img className="img-fluid" src="/images/badgesp/AdvanceP.svg" alt="advance-badge" />

                        </center>
                    </div>
                </div>
            </div>

            {/*  */}

            <div className="container bg-success text-light rounded-5 p-5 mt-5">
                <h4 className="mt-3">Music Skill Development</h4>
                <div className="row mb-2">
                    <div className="col-6">
                        <h6>Beginner</h6>
                        <ProgressBar now={beginnerM} label={`${beginnerM}%`} />
                        <button className="btn btn-dark mt-2" onClick={() => OnClickBeginnerM()}>View Certificate</button>
                    </div>
                    <div className="col-6">
                        <center>

                            <img className="img-fluid" src="/images/badgesm/BeginnerM.svg" alt="beginner-badge" />

                        </center>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-6">
                        <h6>Intermediate</h6>
                        <ProgressBar now={intermediateM} label={`${intermediateM}%`} />
                        <button className="btn btn-dark mt-2" onClick={() => OnClickIntermediateM()}>View Certificate</button>
                    </div>
                    <div className="col-6">
                        <center>

                            <img className="img-fluid" src="/images/badgesm/IntermediateM.svg" alt="intermediate-badge" />

                        </center>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-6">
                        <h6>Advanced</h6>
                        <ProgressBar now={AdvancedM} label={`${AdvancedM}%`} />
                        <button className="btn btn-dark mt-2" onClick={() => OnClickAdvanceM()}>View Certificate</button>
                    </div>
                    <div className="col-6">
                        <center>

                            <img className="img-fluid" src="/images/badgesm/AdvancedM.svg" alt="advance-badge" />

                        </center>
                    </div>
                </div>
            </div>
            <MyVerticallyCenteredModal
                ModelTitle={modelTitle}
                ModelCName={modelCName}
                show={modalShow}
                onHide={() => setModalShow(false)}
            /> 

        </>
    );
}