import {Button, message, notification, Steps, theme} from "antd";
import React, {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import QuizComponent from "./shapes-quiz.component";
import circle from "../../../../assets/quiz/shapes/circle.png"
import rectangle from "../../../../assets/quiz/shapes/rectangle.png"
import square from "../../../../assets/quiz/shapes/square.png"
import trangle from "../../../../assets/quiz/shapes/trangle.png"
import cone from "../../../../assets/quiz/shapes/cone.png"
import pyramid from "../../../../assets/quiz/shapes/pyramid.png"

interface Data {
    [key: string]: any;
}

type NotificationType = 'success' | 'info' | 'warning' | 'error';

const allLesson: Array<Data> = [
    {
        quizId: "1",
        question: "What is this shape?",
        ans: "one",
        imgUri: rectangle
    },
    {
        quizId: "2",
        question: "What is this shape?",
        ans: "two",
        imgUri: square
    },
    {
        quizId: "3",
        question: "What is this shape?",
        ans: "three",
        imgUri: circle
    },
    {
        quizId: "4",
        question: "What is this shape?",
        ans: "four",
        imgUri: trangle
    },
    {
        quizId: "5",
        question: "What is this shape?",
        ans: "five",
        imgUri: pyramid
    },
    {
        quizId: "6",
        question: "What is this shape?",
        ans: "six",
        imgUri: cone
    }
]
const ShapesQuizStepperComponent = () => {

    const {id} = useParams()
    const {token} = theme.useToken();
    const [current, setCurrent] = useState(0);
    const [answer, setAnswer] = useState<any>({})
    const navigate = useNavigate()

    const [api, contextHolder] = notification.useNotification();

    const openNotificationWithIcon = (type: NotificationType, errorMsg: string) => {
        api[type]({
            message: 'Error',
            description:
            errorMsg,
        });
    };

    const getAnswerHandler = (value: any) => {
        console.log("receved Answer", value)
        setAnswer(value)
    }

    const steps = allLesson.map((value: any, index: number) => ({
        title: `Question ${index + 1}`,
        content: <QuizComponent quizId={value.quizId} ans={value.ans} question={value.question}
                                imgUri={value.imgUri} getAnswerHandler={getAnswerHandler}/>
    }))

    const next = () => {
        // if (answer.ans) {
        //     const obj: any = allLesson.filter(item => item.quizId === answer.qId)
        //
        //     const result = answer.ans.some(function (item: any) {
        //         return item.includes(obj[0].ans);
        //     });
        //
        //     if (result) {
        //         answer.current = {}
        //         setCurrent(current + 1);
        //     } else {
        //         openNotificationWithIcon('error', "Your answer is wrong")
        //         console.log("wrong", answer.ans, obj[0].ans, answer.ans.includes("one"))
        //     }
        // } else {
        //     openNotificationWithIcon('error', "Please tell me your answer")
        // }
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
            {contextHolder}
            <Steps current={current} items={items}/>
            <div style={contentStyle}>{steps[current].content}</div>
            <div style={{marginTop: 24}}>
                {current < steps.length - 1 && (
                    <Button onClick={() => nextStep()}>
                        Next
                    </Button>

                )}
                {current === steps.length - 1 && (
                    <Button onClick={() => {
                        message.success('Processing complete!')
                        navigate("/select-lesson/shape")
                    }
                    }>
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

export default ShapesQuizStepperComponent
