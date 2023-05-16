import React from 'react'

export default class Star extends React.Component {
    render() {
        return (
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5530 6040" preserveAspectRatio="xMidYMid meet" class="d-flex w-50 rounded mx-auto">
<g id="layer1" onClick={() => this.props.onFill(0)} fill={this.props.fillColors[0]} fill-rule="evenodd" stroke="black" stroke-width="20">
 <path d="M1175 5790 c-3 -5 120 -484 274 -1064 155 -580 281 -1060 281 -1067 -1 -8 -352 -302 -780 -653 -429 -352 -780 -643 -780 -647 0 -4 4 -10 9 -13 5 -4 452 -20 992 -36 541 -17 986 -33 989 -37 4 -5 146 -480 315 -1058 169 -577 313 -1056 320 -1063 10 -11 14 -11 22 0 5 7 148 486 318 1063 169 578 311 1053 315 1058 3 4 448 20 989 37 540 16 987 32 992 36 5 3 9 9 9 13 0 4 -351 295 -780 647 -428 351 -779 645 -780 653 0 7 126 487 281 1067 154 580 277 1059 274 1064 -4 7 -14 6 -28 -2 -12 -6 -375 -281 -806 -611 -431 -330 -789 -600 -796 -600 -7 0 -365 270 -796 600 -431 330 -794 605 -806 611 -14 8 -24 9 -28 2z"/>
 </g>

</svg>

        )
    }
}