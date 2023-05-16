import {createSlice} from "@reduxjs/toolkit";

import square from "../../assets/shape/square.png";
import rectangle from "../../assets/shape/rectangle.png";
import circle from "../../assets/shape/circle.png";
import oval from "../../assets/shape/oval.png";
import triangle from "../../assets/shape/traingle.png";
import pentagon from "../../assets/shape/pentogon.png";
import hexagon from "../../assets/shape/hexagon.png";
import octagon from "../../assets/shape/octagon.png";

import cylinder from "../../assets/volumeShapes/cylinder.png"
import cube from "../../assets/volumeShapes/cube.png"
import pyramid from "../../assets/volumeShapes/pyramid.png"
import rectangular from "../../assets/volumeShapes/rectangular-prism.png"
import sphere from "../../assets/volumeShapes/sphere.png"

const initialData: Array<any> = [
    {
        name: "square",
        img: square
    },
    {
        name: "rectangle",
        img: rectangle
    },
    {
        name: "circle",
        img: circle
    },
    {
        name: "oval",
        img: oval
    },
    {
        name: "triangle",
        img: triangle
    },
    {
        name: "pentagon",
        img: pentagon
    },
    {
        name: "hexagon",
        img: hexagon
    },
    {
        name: "octagon",
        img: octagon
    }
]

const volumeShapeInitialData: Array<any> = [
    {
        name: "cylinder",
        img: cylinder
    },
    {
        name: "cube",
        img: cube
    },
    {
        name: "pyramid",
        img: pyramid
    },
    {
        name: "rectangular",
        img: rectangular
    },
    {
        name: "sphere",
        img: sphere
    }
]

const initialState = {
    item: initialData,
    volumeShapeItem: volumeShapeInitialData
}

const ShapeActivityItemSlice = createSlice({
    name: "ShapeActivityItem",
    initialState: initialState,
    reducers: {
        deleteShapeItem: (state: any, {payload}) => {
            state.item = removeByName(state.item, payload.name)
        },
        shapeItemReset: (state: any) => {
            state.item = initialData
        }
    }
})

export const {deleteShapeItem, shapeItemReset} = ShapeActivityItemSlice.actions
export default ShapeActivityItemSlice


function removeByName(arr: Array<any>, name: string) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name === name) {
            arr.splice(i, 1);
            break;
        }
    }
    return arr;
}
