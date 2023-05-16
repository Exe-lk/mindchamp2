import React from 'react'

import "bootstrap/dist/css/bootstrap.css";

import 'bootstrap-icons/font/bootstrap-icons.css';

export default class Circle extends React.Component {
    render() {
        return (
                <svg width="210" height="210" xmlns="http://www.w3.org/2000/svg" className='d-block rounded mx-auto'>

 <g>
  <title>Layer 1</title>
  <circle r="100" cy="105" cx="105" stroke-width="10" stroke="black" onClick={() => this.props.onFill(0)} fill={this.props.fillColors[0]} fill-rule="evenodd" id="imagebot_2"/>
 </g>

</svg>
        )
}
}