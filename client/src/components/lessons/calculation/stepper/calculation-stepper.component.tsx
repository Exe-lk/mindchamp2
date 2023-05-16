import {Button, message, Steps, theme} from "antd";
import React, {useState} from "react";
import {useParams} from "react-router-dom";
import ReactPlayer from "react-player/lazy";
import CalculationLessonOverviewComponent from "../lesson-overview/calculation-lesson-overview.component";

import additionImg from "../../../../assets/addition.png"
import substraction from "../../../../assets/substraction.png"

interface Data {
    [key: string]: any;
}

const allLesson: Data = {
    "addition": {
        id: "1",
        url: "https://youtu.be/-ou9VvyJNOY",
        imgUri: additionImg,
        lessonDescription: "Numbers addition sign",
        activity: {
            ans: 1,
            question: "I want one apple"
        }
    },
    "subtraction": {
        id: "2",
        url: "https://www.youtube.com/watch?v=rqiu_xcvSk4",
        imgUri: substraction,
        lessonDescription: "Numbers subtraction sign",
        activity: {
            ans: 2,
            question: "I want two apple"
        }
    }
}
const CalculationStepperComponent = () => {

    const {id} = useParams()
    const {token} = theme.useToken();
    const [current, setCurrent] = useState(0);

    const steps = [
        {
            title: 'Introduction',
            content: <div className="flex items-center justify-center m-5">
                {id ? <CalculationLessonOverviewComponent imgUri={allLesson[id].imgUri}
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
        // {
        //     title: 'Activity',
        //     content: "Activity",
        // }
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

export default CalculationStepperComponent
