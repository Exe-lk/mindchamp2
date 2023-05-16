import React from 'react'

import "bootstrap/dist/css/bootstrap.css";

import 'bootstrap-icons/font/bootstrap-icons.css';

export default class A5 extends React.Component {

    render() {
        return (
                <svg class="d-flex w-50 rounded mx-auto" version="1.1" viewBox="0 0 1052.4 744.09" xmlns="http://www.w3.org/2000/svg" xmlnscc="http://creativecommons.org/ns#" xmlnsdc="http://purl.org/dc/elements/1.1/" xmlnsrdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
                    <g transform="translate(0 -308.27)" stroke="#000">
                    <path d="m834.9 680.31s-249.4-197.12-397.39-197.99c-151.58-0.89189-408.7 163.23-409.39 197.99-0.73284 36.955 257.81 198.92 409.39 197.99 148.21-0.9126 397.88-198.5 397.88-198.5l168.16 119.04s-36.098-76.771-36.209-118.41c-0.1108-41.64 36.209-120.7 36.209-120.7l-167.68 119.56" onClick={() => this.props.onFill(0)} fill={this.props.fillColors[0]} fill-rule="evenodd" stroke-width="15.978"/>
                    <ellipse cx="242.99" cy="632.55" rx="42.896" ry="42.197" onClick={() => this.props.onFill(1)} fill={this.props.fillColors[1]} stroke-width="7.4326"/>
                    <ellipse cx="221.81" cy="623.51" rx="16.069" ry="15.37" stroke-width="7.9888"/>
                    <path d="m114.42 757.78s73.609 9.389 108.31-3.0324c29.695-10.629 81.269-59.671 81.269-59.671" onClick={() => this.props.onFill(2)} fill={this.props.fillColors[2]} stroke-width="10.432"/>
                    <path transform="matrix(1.7555 0 0 1 -151.81 359.12)" d="m323.11 418.02 0.0115-207.49s176.52 64.053 175.99 106.81c-0.40686 32.504-176 100.68-176 100.68z" onClick={() => this.props.onFill(2)} fill={this.props.fillColors[2]} stroke-linecap="square" stroke-width="3.8039"/>
                    </g>
                </svg>
        )
    }
}