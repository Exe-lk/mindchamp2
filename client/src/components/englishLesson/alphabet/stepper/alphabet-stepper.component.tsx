import {Button, Steps, theme} from "antd";
import React, {useRef, useState} from "react";
import {useParams} from "react-router-dom";
import CalculationLessonOverviewComponent
    from "../../../lessons/calculation/lesson-overview/calculation-lesson-overview.component";
import ReactPlayer from "react-player/lazy";

import a from "../../../../assets/learnEnglish/a.png"
import b from "../../../../assets/learnEnglish/b.png"
import c from "../../../../assets/learnEnglish/c.png"
import d from "../../../../assets/learnEnglish/d.png"
import e from "../../../../assets/learnEnglish/e.png"
import f from "../../../../assets/learnEnglish/f.png"
import g from "../../../../assets/learnEnglish/g.png"
import h from "../../../../assets/learnEnglish/h.png"
import ActivityComponent from "../activity/activity.component";

interface Data {
    [key: string]: any;
}

const allLesson: Data = {
    "a": {
        id: "1",
        url: "https://youtu.be/-ou9VvyJNOY",
        imgUri: a,
        lessonDescription: "This is the letter A of the English alphabet",
        activity: {
            ans: 'A',
            question: "I want one apple"
        }
    },
    "b": {
        id: "2",
        url: "https://www.youtube.com/watch?v=rqiu_xcvSk4",
        imgUri: b,
        lessonDescription: "This is the letter B of the English alphabet",
        activity: {
            ans: 'B',
            question: "I want two apple"
        }
    },
    "c": {
        id: "1",
        url: "https://youtu.be/-ou9VvyJNOY",
        imgUri: c,
        lessonDescription: "This is the letter C of the English alphabet",
        activity: {
            ans: 'C',
            question: "I want one apple"
        }
    },
    "d": {
        id: "2",
        url: "https://www.youtube.com/watch?v=rqiu_xcvSk4",
        imgUri: d,
        lessonDescription: "This is the letter D of the English alphabet",
        activity: {
            ans: 'D',
            question: "I want two apple"
        }
    },
    "e": {
        id: "1",
        url: "https://youtu.be/-ou9VvyJNOY",
        imgUri: e,
        lessonDescription: "This is the letter E of the English alphabet",
        activity: {
            ans: 'E',
            question: "I want one apple"
        }
    },
    "f": {
        id: "2",
        url: "https://www.youtube.com/watch?v=rqiu_xcvSk4",
        imgUri: f,
        lessonDescription: "This is the letter F of the English alphabet",
        activity: {
            ans: 'F',
            question: "I want two apple"
        }
    },
    "g": {
        id: "1",
        url: "https://youtu.be/-ou9VvyJNOY",
        imgUri: g,
        lessonDescription: "This is the letter G of the English alphabet",
        activity: {
            ans: 'G',
            question: "I want one apple"
        }
    },
    "h": {
        id: "2",
        url: "https://www.youtube.com/watch?v=rqiu_xcvSk4",
        imgUri: h,
        lessonDescription: "This is the letter H of the English alphabet",
        activity: {
            ans: 'H',
            question: "I want two apple"
        }
    },
    "i": {
        id: "1",
        url: "https://youtu.be/-ou9VvyJNOY",
        imgUri: a,
        lessonDescription: "This is the letter I of the English alphabet",
        activity: {
            ans: 'I',
            question: "I want one apple"
        }
    },
    "j": {
        id: "2",
        url: "https://www.youtube.com/watch?v=rqiu_xcvSk4",
        imgUri: b,
        lessonDescription: "This is the letter J of the English alphabet",
        activity: {
            ans: 'J',
            question: "I want two apple"
        }
    },
    "k": {
        id: "1",
        url: "https://youtu.be/-ou9VvyJNOY",
        imgUri: a,
        lessonDescription: "This is the letter K of the English alphabet",
        activity: {
            ans: 'K',
            question: "I want one apple"
        }
    },
    "l": {
        id: "2",
        url: "https://www.youtube.com/watch?v=rqiu_xcvSk4",
        imgUri: b,
        lessonDescription: "This is the letter L of the English alphabet",
        activity: {
            ans: 'L',
            question: "I want two apple"
        }
    },
    "m": {
        id: "1",
        url: "https://youtu.be/-ou9VvyJNOY",
        imgUri: a,
        lessonDescription: "This is the letter M of the English alphabet",
        activity: {
            ans: 'M',
            question: "I want one apple"
        }
    },
    "n": {
        id: "2",
        url: "https://www.youtube.com/watch?v=rqiu_xcvSk4",
        imgUri: b,
        lessonDescription: "This is the letter N of the English alphabet",
        activity: {
            ans: 'N',
            question: "I want two apple"
        }
    },
    "o": {
        id: "1",
        url: "https://youtu.be/-ou9VvyJNOY",
        imgUri: a,
        lessonDescription: "This is the letter O of the English alphabet",
        activity: {
            ans: 'O',
            question: "I want one apple"
        }
    },
    "p": {
        id: "2",
        url: "https://www.youtube.com/watch?v=rqiu_xcvSk4",
        imgUri: b,
        lessonDescription: "This is the letter P of the English alphabet",
        activity: {
            ans: 'P',
            question: "I want two apple"
        }
    },
    "q": {
        id: "1",
        url: "https://youtu.be/-ou9VvyJNOY",
        imgUri: a,
        lessonDescription: "This is the letter Q of the English alphabet",
        activity: {
            ans: 'Q',
            question: "I want one apple"
        }
    },
    "r": {
        id: "2",
        url: "https://www.youtube.com/watch?v=rqiu_xcvSk4",
        imgUri: b,
        lessonDescription: "This is the letter R of the English alphabet",
        activity: {
            ans: 'R',
            question: "I want two apple"
        }
    },
    "s": {
        id: "1",
        url: "https://youtu.be/-ou9VvyJNOY",
        imgUri: a,
        lessonDescription: "This is the letter S of the English alphabet",
        activity: {
            ans: 'S',
            question: "I want one apple"
        }
    },
    "t": {
        id: "2",
        url: "https://www.youtube.com/watch?v=rqiu_xcvSk4",
        imgUri: b,
        lessonDescription: "This is the letter T of the English alphabet",
        activity: {
            ans: 'T',
            question: "I want two apple"
        }
    },
    "u": {
        id: "1",
        url: "https://youtu.be/-ou9VvyJNOY",
        imgUri: a,
        lessonDescription: "This is the letter U of the English alphabet",
        activity: {
            ans: 'U',
            question: "I want one apple"
        }
    },
    "v": {
        id: "2",
        url: "https://www.youtube.com/watch?v=rqiu_xcvSk4",
        imgUri: b,
        lessonDescription: "This is the letter V of the English alphabet",
        activity: {
            ans: 'V',
            question: "I want two apple"
        }
    },
    "w": {
        id: "1",
        url: "https://youtu.be/-ou9VvyJNOY",
        imgUri: a,
        lessonDescription: "This is the letter W of the English alphabet",
        activity: {
            ans: 'W',
            question: "I want one apple"
        }
    },
    "x": {
        id: "2",
        url: "https://www.youtube.com/watch?v=rqiu_xcvSk4",
        imgUri: b,
        lessonDescription: "This is the letter X of the English alphabet",
        activity: {
            ans: 'X',
            question: "I want two apple"
        }
    },
    "y": {
        id: "1",
        url: "https://youtu.be/-ou9VvyJNOY",
        imgUri: a,
        lessonDescription: "This is the letter Y of the English alphabet",
        activity: {
            ans: 'Y',
            question: "I want one apple"
        }
    },
    "z": {
        id: "2",
        url: "https://www.youtube.com/watch?v=rqiu_xcvSk4",
        imgUri: b,
        lessonDescription: "This is the letter Z of the English alphabet",
        activity: {
            ans: 'Z',
            question: "I want two apple"
        }
    }
}
const AlphabetStepperComponent = () => {

    const {id} = useParams()
    const {token} = theme.useToken();
    const [current, setCurrent] = useState(0);
    const activityRef = useRef<any>(null);

    const onButtonClickHandler = () => {
        if (activityRef && activityRef.current) {
            activityRef.current.onGetSaveDataHandler();
        }
    };

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
        {
            title: 'Activity',
            content: <div className="flex items-center justify-center m-5">
                {
                    id ? <ActivityComponent ref={activityRef} imgUri={allLesson[id].imgUri}
                                            activity={allLesson[id].activity}/> :
                        <h1>Activity Not Found</h1>
                }
            </div>,
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
                    <Button onClick={onButtonClickHandler}>
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

export default AlphabetStepperComponent
