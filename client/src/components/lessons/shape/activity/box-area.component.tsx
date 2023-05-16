import React, {useState} from "react";
import {useDrop} from "react-dnd";
import {AppDispatch} from "../../../../store/store";
import {useDispatch} from "react-redux";
import {deleteShapeItem} from "../../../../store/reducers/shape-activity-item.slice";

interface Props {
    name: string
}

const BoxAreaComponent: React.FC<Props> = ({name}) => {
    const [style, setStyle] = useState<any>([])
    const dispatch: AppDispatch = useDispatch()

    const [{canDrop, isOver, didDrop}, drop] = useDrop(() => ({
        accept: 'item',
        drop: (item: any, monitor) => {
            console.log("Box Component", item)
            if (name !== item.name) {
                alert("Wrong")
                console.log("******", name, item.name)
                setStyle(["!border-red-600"])
            }
            if (name === item.name) {
                alert("Correct")
                setStyle(["!border-blue-600"])
                // dispatch(deleteShapeItem({name: item.name}))

            }
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
            didDrop: monitor.didDrop()
        }),
    }))

    return (
        <>
            <div ref={drop}
                 className={`flex-col items-center justify-center m-5 p-5 border-dotted border-4 border-gray-400 h-32 w-32 ${style.join(',')}`}>
                <p className="text-base">drop here {name}</p>
            </div>
        </>
    )
}

export default BoxAreaComponent
