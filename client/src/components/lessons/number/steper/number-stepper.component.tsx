import React, {useEffect, useState} from 'react';
import {Button, message, notification, Steps, theme} from 'antd';
import ReactPlayer from 'react-player/lazy'
import ActivityComponent from "../activity/activity.component";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../../store/store";
import {reset} from "../../../../store/reducers/activity-item.slice";

import no1 from "../../../../assets/quiz/learnnumbers/no1.png"
import no2 from "../../../../assets/quiz/learnnumbers/no2.png"
import no3 from "../../../../assets/quiz/learnnumbers/no3.png"
import no4 from "../../../../assets/quiz/learnnumbers/no4.png"
import no5 from "../../../../assets/quiz/learnnumbers/no5.png"
import no6 from "../../../../assets/quiz/learnnumbers/no6.png"
import no7 from "../../../../assets/quiz/learnnumbers/no7.png"
import no8 from "../../../../assets/quiz/learnnumbers/no8.png"
import no9 from "../../../../assets/quiz/learnnumbers/no9.png"
import no10 from "../../../../assets/quiz/learnnumbers/no10.png"
import LessonOverviewComponent from "../lesson-overview/lesson-overview.component";
import {useAddResultMutation, useGetLessonDetailsQuery} from "../../../../service/lessons-api.service";

interface Data {
    [key: string]: any;
}

type NotificationType = 'success' | 'info' | 'warning' | 'error';

const allLesson: Data = {
    "1-10_number-1": {
        id: "1",
        url: "https://www.youtube.com/watch?v=vxffHm4wy24&list=PLZS3MUjYqjUGZLdvCFH92mHPqNXxYEjaE&index=1",
        imgUri: no1,
        lessonDescription: "Number One",
        activity: {
            ans: 1,
            question: "I want one apple"
        }
    },
    "1-10_number-2": {
        id: "2",
        url: "https://youtu.be/D32JZKKgjJg",
        imgUri: no2,
        lessonDescription: "Number Two",
        activity: {
            ans: 2,
            question: "I want two apple"
        }
    },
    "1-10_number-3": {
        id: "3",
        url: "https://youtu.be/gIlqG3s6XN4",
        imgUri: no3,
        lessonDescription: "Number Three",
        activity: {
            ans: 3,
            question: "I want three apple"
        }
    },
    "1-10_number-4": {
        id: "4",
        url: "https://youtu.be/UfCj_dvNuPI?list=PLZS3MUjYqjUGZLdvCFH92mHPqNXxYEjaE",
        imgUri: no4,
        lessonDescription: "Number Four",
        activity: {
            ans: 4,
            question: "I want four apple"
        }
    },
    "1-10_number-5": {
        id: "5",
        url: "https://youtu.be/lcRg8AkyuKU?list=PLZS3MUjYqjUGZLdvCFH92mHPqNXxYEjaE",
        imgUri: no5,
        lessonDescription: "Number Five",
        activity: {
            ans: 5,
            question: "I want five apple"
        }
    },
    "1-10_number-6": {
        id: "6",
        url: "https://youtu.be/oi9tq0PTH7k?list=PLZS3MUjYqjUGZLdvCFH92mHPqNXxYEjaE",
        imgUri: no6,
        lessonDescription: "Number Six",
        activity: {
            ans: 6,
            question: "I want six apple"
        }
    },
    "1-10_number-7": {
        id: "7",
        url: "https://youtu.be/mu6mw8aqDCQ?list=PLZS3MUjYqjUGZLdvCFH92mHPqNXxYEjaE",
        imgUri: no7,
        lessonDescription: "Number Seven",
        activity: {
            ans: 7,
            question: "I want seven apple"
        }
    },
    "1-10_number-8": {
        id: "8",
        url: "https://youtu.be/n8COZPpQWgQ?list=PLZS3MUjYqjUGZLdvCFH92mHPqNXxYEjaE",
        imgUri: no8,
        lessonDescription: "Number Eight",
        activity: {
            ans: 8,
            question: "I want eight apple"
        }
    },
    "1-10_number-9": {
        id: "9",
        url: "https://youtu.be/rSoYRFYT3fA?list=PLZS3MUjYqjUGZLdvCFH92mHPqNXxYEjaE",
        imgUri: no9,
        lessonDescription: "Number Nine",
        activity: {
            ans: 9,
            question: "I want nine apple"
        }
    },
    "1-10_number-10": {
        id: "10",
        url: "https://youtu.be/b7hRdKP9HFM?list=PLZS3MUjYqjUGZLdvCFH92mHPqNXxYEjaE",
        imgUri: no10,
        lessonDescription: "Number Ten",
        activity: {
            ans: 10,
            question: "I want ten apple"
        }
    },
}
const NumberStepperComponent: React.FC = () => {
    const {id} = useParams()
    const {token} = theme.useToken();
    const [current, setCurrent] = useState(0);
    const dispatch: AppDispatch = useDispatch()
    const itemCount = useSelector<RootState, any>(state => state.activityItem.itemCount)
    const navigate = useNavigate()
    const [api, contextHolder] = notification.useNotification();

    const {data, isLoading} = useGetLessonDetailsQuery({path: "learning-skill/lesson-details"})
    const [add, {isLoading: isMutationResultLoading, data: mutationData }] = useAddResultMutation()

    useEffect(() => {
        return () => {
            dispatch(reset())
        }
    }, [])

    const openNotificationWithIcon = (type: NotificationType) => {
        api[type]({
            message: 'Wrong',
            description:
                'Incorrect Answer',
        });
    };

    let steps = [
        {
            title: 'Loading',
            content: <div className="flex items-center justify-center m-5">
                <h1>Loading...</h1>
            </div>,
        }
    ];

    if(!isLoading && data) {
        steps = [
            {
                title: 'Introduction',
                content: <div className="flex items-center justify-center m-5">
                    {id ? <LessonOverviewComponent imgUri={allLesson[id].imgUri}
                                                   description={allLesson[id].lessonDescription}/> :
                        <h1>Lesson Not Found</h1>}
                </div>,
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
                    {id ? <ActivityComponent activity={allLesson[id].activity}/> :
                        <h1>Activity Not Found</h1>}

                </div>,
            }
        ]
    }

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
                        if (id) {
                            if (allLesson[id].activity.ans !== itemCount) {
                                openNotificationWithIcon('error')
                            } else {
                                dispatch(reset())
                                add({
                                    "lesson_id": id,
                                    "marks": 25
                                })
                                if(mutationData) {
                                    message.success('Activity complete!')
                                    navigate("/")
                                }
                            }
                        }
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
    );
};

export default NumberStepperComponent;
