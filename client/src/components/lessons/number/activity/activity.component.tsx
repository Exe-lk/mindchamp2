import humanImg from "../../../../assets/activity/human.png"
import trayImg from "../../../../assets/activity/tray.png"
import apple from "../../../../assets/activity/apple.png"
import BucketComponent from "./bucket.component";
import ItemComponent from "./item.component";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store/store";
import React, {memo, useEffect, useRef} from "react";
import {notification} from "antd";
import {SmileOutlined} from "@ant-design/icons";

interface Props {
    activity: any
}

const ActivityComponent: React.FC<Props> = ({activity}) => {
    const lifeCycleController = useRef(true)
    const items = useSelector<RootState, any>(state => state.activityItem.item)
    const itemCount = useSelector<RootState, any>(state => state.activityItem.itemCount)
    // console.log(itemCount)
    const [api, contextHolder] = notification.useNotification();
    console.log("********")
    useEffect(() => {
        if (lifeCycleController.current) {
            lifeCycleController.current = false
        } else {
            if (itemCount) {
                openNotification()
            }
        }
    }, [itemCount])

    const openNotification = () => {
        api.open({
            message: 'Notification Title',
            description:
                'Item Drop',
            icon: <SmileOutlined style={{color: '#108ee9'}}/>,
        });
    };

    return (
        <>
            {contextHolder}
            <div className="flex flex-row h-auto relative">
                <div className="absolute left-80 italic font-bold text-5xl">{activity.question}</div>
                <div className="mx-20">
                    <img src={humanImg} width={300} height={400}/>
                </div>
                <div className="flex flex-col justify-end mx-20">
                    <BucketComponent bucketImg={trayImg}/>
                </div>
                <div className="flex flex-col justify-start mx-20">
                    <div className="grid grid-cols-4 gap-3">
                        {
                            items.map((item: string, index: number) => (
                                <ItemComponent key={index} name={item} src={apple}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(ActivityComponent)
