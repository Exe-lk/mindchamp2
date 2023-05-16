import React from 'react'

import "bootstrap/dist/css/bootstrap.css";

import 'bootstrap-icons/font/bootstrap-icons.css';

export default class A1 extends React.Component {

    render() {
        return (
            <svg className='d-flex w-50 rounded mx-auto' version="1.0" viewBox="0 0 15 16" xmlns="http://www.w3.org/2000/svg" xmlnscc="http://creativecommons.org/ns#" xmlnsdc="http://purl.org/dc/elements/1.1/" xmlnsrdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
<g transform="translate(0 -9.351)">
<path d="m0 11.851 7.5-2.5 7.5 2.5v8l-7.5091 5.5-7.4909-5.5z" fill="#2a2a2a"/>
<path d="m14 13.351v6.0221l-6 3.9779v-6z" onClick={() => this.props.onFill(0)} fill={this.props.fillColors[0]}/>
<path d="m1 13.351 6 4v6l-6-4z" onClick={() => this.props.onFill(2)} fill={this.props.fillColors[2]}/>
<path d="m7.5 10.351 6.5 2-6.5 4-6.5-4z" onClick={() => this.props.onFill(1)} fill={this.props.fillColors[1]}/>
</g>
</svg>
        )
    }
}