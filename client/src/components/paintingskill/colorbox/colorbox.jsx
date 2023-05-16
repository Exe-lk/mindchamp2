import React from "react";
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

import './colorbox.css';

export default class ColorBox extends React.Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="row ">
                    <div className="col-2">
                        <div id="selected_color" style={{ backgroundColor: this.props.slcColors }} className="selected_color shadow-lg">

                        </div>
                    </div>
                    <div className ="col-10">
                        <div className ="color_box shadow-lg">

                        <div className="color_box_wrapper_row">
                                <div id="r2c1" onClick={() => this.props.onChangeColor(10)} className="color_cube color_cube_white">

                                </div>
                                <div id="r2c2" onClick={() => this.props.onChangeColor(11)} className="color_cube color_cube_light_gray">

                                </div>
                                <div id="r2c3" onClick={() => this.props.onChangeColor(12)} className="color_cube color_cube_light_red">

                                </div>
                                <div id="r2c4" onClick={() => this.props.onChangeColor(13)} className="color_cube color_cube_light_yello">

                                </div>
                                <div id="r2c5" onClick={() => this.props.onChangeColor(14)} className="color_cube color_cube_light_green">

                                </div>
                                <div id="r2c6" onClick={() => this.props.onChangeColor(15)} className="color_cube color_cube_light_blue">

                                </div>
                                <div id="r2c7" onClick={() => this.props.onChangeColor(16)} className="color_cube color_cube_light_gold">

                                </div>
                                <div id="r2c8" onClick={() => this.props.onChangeColor(17)} className="color_cube color_cube_light_brown">

                                </div>
                                <div id="r2c9" onClick={() => this.props.onChangeColor(18)} className="color_cube color_cube_light_purple">

                                </div>
                                <div id="r2c10" onClick={() => this.props.onChangeColor(19)} className="color_cube color_cube_light_pink">

                                </div>
                            </div>

                            <div className ="color_box_wrapper_row">
                                <div id="r1c1" onClick={() => this.props.onChangeColor(0)} className="color_cube color_cube_black">

                                </div>
                                <div id="r1c2" onClick={() => this.props.onChangeColor(1)} className="color_cube color_cube_gray">

                                </div>
                                <div id="r1c3" onClick={() => this.props.onChangeColor(2)} className="color_cube color_cube_darkred">

                                </div>
                                <div id="r1c4" onClick={() => this.props.onChangeColor(3)} className="color_cube color_cube_yellow">

                                </div>
                                <div id="r1c5" onClick={() => this.props.onChangeColor(4)} className="color_cube color_cube_green">

                                </div>
                                <div id="r1c6" onClick={() => this.props.onChangeColor(5)} className="color_cube color_cube_blue">

                                </div>
                                <div id="r1c7" onClick={() => this.props.onChangeColor(6)} className="color_cube color_cube_orange">

                                </div>
                                <div id="r1c8" onClick={() => this.props.onChangeColor(7)} className="color_cube color_cube_brown">

                                </div>
                                <div id="r1c9" onClick={() => this.props.onChangeColor(8)} className="color_cube color_cube_purple">

                                </div>
                                <div id="r1c10" onClick={() => this.props.onChangeColor(9)} className="color_cube color_cube_pink">

                                </div>
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
