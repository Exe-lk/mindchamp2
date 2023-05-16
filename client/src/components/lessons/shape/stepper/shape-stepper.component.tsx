import {Button, message, Steps, theme} from "antd";
import React, {useState} from "react";
import {useParams} from "react-router-dom";
import ReactPlayer from "react-player/lazy";
import ShapesLessonOverviewComponent from "../lesson-overview/shapes-lesson-overview.component";

import shapes from "../../../../assets/quiz/shapes/shapes.png";
import shapes2 from "../../../../assets/quiz/shapes/shapes2.png";
import ActivityComponent from "../activity/activity.component";

interface Data {
    [key: string]: any;
}

const allLesson: Data = {
    "plane_shapes": {
        id: "1",
        url: "https://www.youtube.com/watch?v=4tkRwMHu9NQ",
        imgUri: shapes,
        lessonDescription: "Some grant plain shapes are shown here",
        activity: {
            ans: 1,
            question: "I want one apple"
        }
    },
    "with_volume": {
        id: "2",
        url: "https://www.youtube.com/watch?v=9pjDhl4dWN8",
        imgUri: shapes2,
        lessonDescription: "A few grant volume shapes are shown here",
        activity: {
            ans: 2,
            question: "I want two apple"
        }
    }
}
const ShapeStepperComponent = () => {

    const {id} = useParams()
    const {token} = theme.useToken();
    const [current, setCurrent] = useState(0);

    const steps = [
        {
            title: 'Introduction',
            content: <div className="flex items-center justify-center m-5">
                {id ? <ShapesLessonOverviewComponent imgUri={allLesson[id].imgUri}
                                                     description={allLesson[id].lessonDescription}/> :
                    <h1>Lesson Not Found</h1>}
            </div>
        },
        {
            title: 'Lesson',
            content: <div className="flex items-center justify-center m-5">
                {id ? <ReactPlayer url={allLesson[id].url}/> : <h1>Lesson Not Found</h1>}
            </div>,
        },
        {
            title: 'Activity',
            content: <ActivityComponent/>,
        }
    ];

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const items = steps.map((item) => ({key: item.title, title: item.title}));

    const contentStyle: React.CSSProperties = {
        lineHeight: '260px',
        textAlign: 'center',
        color: token.colorTextTertiary,
        backgroundColor: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: `1px dashed ${token.colorBorder}`,
        marginTop: 20,
        marginBottom: 20
    };

    const nextStep = () => {
        next()
    }

    return (
        <>
            <Steps current={current} items={items}/>
            <div style={contentStyle}>{steps[current].content}</div>
            <div style={{marginTop: 24}}>
                {current < steps.length - 1 && (
                    <Button onClick={() => nextStep()}>
                        Next
                    </Button>

                )}
                {current === steps.length - 1 && (
                    <Button onClick={() => message.success('Processing complete!')}>
                        Done
                    </Button>
                )}
                {current > 0 && (
                    <Button style={{margin: '0 8px'}} onClick={() => prev()}>
                        Previous
                    </Button>
                )}
            </div>
        </>
    )
}
export default ShapeStepperComponent
