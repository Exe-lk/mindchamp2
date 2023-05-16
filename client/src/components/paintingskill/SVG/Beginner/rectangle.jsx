import React from 'react'

import "bootstrap/dist/css/bootstrap.css";

import 'bootstrap-icons/font/bootstrap-icons.css';

export default class rectangle extends React.Component {
    render() {
        return (
            <svg
    xmlnsrdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
    xmlns="http://www.w3.org/2000/svg"
    xmlnscc="http://web.resource.org/cc/"
    xmlnsxlink="http://www.w3.org/1999/xlink"
    xmlnsdc="http://purl.org/dc/elements/1.1/"
    xmlnssvg="http://www.w3.org/2000/svg"
    xmlnsinkscape="http://www.inkscape.org/namespaces/inkscape"
    xmlnssodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
    xmlnsns1="http://sozi.baierouge.fr"
    id="Layer_1"
    enable-background="new 0 0 86.949 93.715"
    xmlspace="preserve"
    viewBox="0 0 100 100"
    version="1.1"
    y="0px"
    x="0px"
    class="d-flex w-50 rounded mx-auto"
  >
<path
      d="m0 0v100h100v-100z"
      stroke="#000000"
      stroke-linecap="square"
      stroke-miterlimit="10"
      stroke-width="10"
      onClick={() => this.props.onFill(0)} fill={this.props.fillColors[0]} fill-rule="evenodd"
  />

    </svg>

        )
}
}