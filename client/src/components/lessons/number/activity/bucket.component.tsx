import appleBucket from "../../../../assets/activity/applebucket.png"
import {useDrop} from "react-dnd";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store/store";

const style = {
    height: 200,
    width: 200,
}
const BucketComponent = ({bucketImg}: any) => {

    const itemCount = useSelector<RootState, any>(state => state.activityItem.itemCount)

    const [{canDrop, isOver, didDrop}, drop] = useDrop(() => ({
        accept: 'item',
        drop: (item, monitor) => ({item}),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
            didDrop: monitor.didDrop()
        }),
    }))
    const isActive = canDrop && isOver
    if (isActive) {
        bucketImg = appleBucket
    }

    if (itemCount) {
        bucketImg = appleBucket
    }

    return (
        <>
            <div ref={drop} style={{...style}}>
                <img src={bucketImg} alt="" style={{...style}}/>
            </div>
        </>
    )
}

export default BucketComponent
