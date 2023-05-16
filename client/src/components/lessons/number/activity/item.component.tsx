import {useDrag} from "react-dnd";
import React from "react";
import {AppDispatch} from "../../../../store/store";
import {useDispatch} from "react-redux";
import {deleteItem} from "../../../../store/reducers/activity-item.slice";

const style = {
    width: 60,
    height: 60
}

interface Props {
    name: string,
    src: string
}

const ItemComponent: React.FC<Props> = ({name, src}) => {

    const dispatch: AppDispatch = useDispatch()

    const [{isDragging, didDrop, handlerId}, drag] = useDrag(() => ({
        type: 'item',
        item: {name},
        end: (item, monitor) => {
            const dropResult: any = monitor.getDropResult()
            if (item && dropResult) {
                // alert(`You dropped ${item.name} into ${dropResult.name}!`)
                console.log(dropResult)
                console.log("########", handlerId)
                dispatch(deleteItem(item.name))
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
            didDrop: monitor.didDrop()
        }),
    }))
    const opacity = isDragging ? 0.4 : 1
    return (
        <>
            <div ref={drag} style={{opacity}}>
                <img src={src} alt="" style={{...style}}/>
            </div>
        </>
    )
}

export default ItemComponent
