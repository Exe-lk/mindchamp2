import React from "react";
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

import './scorebox.css';

export default function Scorebox(props) {
    return (
        <div className="container-fluid">

            <div className="container-fluid shadow-lg rounded-5 mt-5 bg-primary text-white">

                <div className="row  mb-3">
                    <div className="col-12 mb-1">
                        <center>
                            <a className='btn btn-primary' href="/SoftSkill/Painting/Report">Show Report</a>
                        </center>
                    </div>
                    <div className="col-6 border-left border-white">
                        
                        <center>
                        <img className="img-fluid mb-1 mt-1" src={"/images/badgesp/"+props.level+"P.svg"} />
                        </center>
                        {/* <h5 className="text-center">Level</h5> */}
                    </div>
                    <div className="col-6">
                        <center>
                        <svg xmlns="http://www.w3.org/2000/svg" width="46.678" height="43.904" viewBox="0 0 56.678 53.904" className="mb-1">
                            <defs>
                            </defs>
                            <g id="Group_41" data-name="Group 41" transform="translate(-1602.926 -244.87)">
                                <path id="Icon_metro-star-full" data-name="Icon metro-star-full" class="cls-1" d="M57.1,22.492,38.26,19.754,29.835,2.683,21.41,19.754,2.571,22.492,16.2,35.78,12.985,54.543l16.85-8.859,16.85,8.859L43.467,35.78,57.1,22.492Z" transform="translate(1601.429 243.317)" style={{ fill: '#fef200', stroke: '#000' }} />
                                <text id="_01" data-name="01" class="cls-2" transform="translate(1620 282)" style={{ stroke: '#0000', fontSize: '20px' }}><tspan x="0" y="0">{props.star_points}</tspan></text>
                            </g>
                        </svg>
                        </center>
                    </div>
                </div>
            </div>
        </div>

    )
}