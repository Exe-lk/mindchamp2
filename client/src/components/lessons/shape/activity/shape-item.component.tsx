import React from "react";
import {useDrag} from "react-dnd";

interface Props {
    name: string
    img: any
}

const ShapeItemComponent: React.FC<Props> = ({name, img}) => {

    const [{isDragging, didDrop, handlerId}, drag] = useDrag(() => ({
        type: 'item',
        item: {name: name},
        end: (item, monitor) => {
            const dropResult: any = monitor.getDropResult()
            if (item && dropResult) {
                // alert(`You dropped ${item.name} into ${dropResult.name}!`)
                console.log(dropResult)
                console.log("########", handlerId)
                console.log(name, " ", item.name)
                // dispatch(deleteItem(item.name))
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
            didDrop: monitor.didDrop()
        }),
    }))

    return (
        <>
            <div ref={drag} className="flex flex-col justify-center">
                <img src={img} width={100} height={100}/>
            </div>

        </>
    )
}

export default ShapeItemComponent
