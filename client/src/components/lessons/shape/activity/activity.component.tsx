import React from "react";
import ShapeItemComponent from "./shape-item.component";
import BoxAreaComponent from "./box-area.component";

import {useSelector} from "react-redux";
import {RootState} from "../../../../store/store";
import {useParams} from "react-router-dom";


const ActivityComponent = () => {
    const params = useParams()
    const items = useSelector<RootState, any>(state => state.shapeActivityItem.item)
    const volumeItems = useSelector<RootState, any>(state => state.shapeActivityItem.volumeShapeItem)
    // const boxItem = useRef<any>(items)
    console.log(params.id)

    console.log(items)

    return (
        <>
            <div className="flex flex-row h-auto justify-between relative">
                <div className="absolute left-80 italic font-bold text-5xl">Question</div>
                {
                    params.id === "with_volume" ?
                        <>
                            <div className="m-5 p-5 grid grid-cols-4 gap-4">
                                {
                                    volumeItems.map((item: any, index: number) => (
                                        <ShapeItemComponent name={item.name} img={item.img} key={index}/>
                                    ))
                                }
                            </div>
                            <div className="m-5 p-5 grid grid-cols-4 gap-4">
                                {
                                    volumeItems.map((item: any, index: number) => (
                                        <BoxAreaComponent name={item.name} key={index}/>
                                    ))
                                }
                            </div>
                        </>
                        : <>
                            <div className="m-5 p-5 grid grid-cols-4 gap-4">
                                {
                                    items.map((item: any, index: number) => (
                                        <ShapeItemComponent name={item.name} img={item.img} key={index}/>
                                    ))
                                }
                            </div>
                            <div className="m-5 p-5 grid grid-cols-4 gap-4">
                                {
                                    items.map((item: any, index: number) => (
                                        <BoxAreaComponent name={item.name} key={index}/>
                                    ))
                                }
                            </div>
                        </>
                }
            </div>
        </>
    )
}

export default ActivityComponent
