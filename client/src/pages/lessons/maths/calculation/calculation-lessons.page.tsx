import {Link} from "react-router-dom";
import LessonCardComponent from "../../../../components/lesson-card/lesson-card.component";
import React from "react";
// import {GrFormAdd, GrFormSubtract} from "react-icons/gr";
import {MdOutlineQuiz} from "react-icons/md";
// import additionImg from "../../../../assets/addition.png"
// import substraction from "../../../../assets/substraction.png"
import quzImg from "../../../../assets/quiz/learnnumbers/quiz.png"
import {useGetLessonsQuery} from "../../../../service/lessons-api.service";
import * as AntDesignIcon from "react-icons/gr";

interface Data {
    [key: string]: any;
}

// const allLesson: Data = [
//     {
//         id: "addition",
//         lessonName: "Addition Lesson",
//         icon: <GrFormAdd size="3rem"/>,
//         img: additionImg
//     },
//     {
//         id: "subtraction",
//         lessonName: "Subtraction Lesson",
//         icon: <GrFormSubtract size="3rem"/>,
//         img: substraction
//     }
// ]

const CalculationLessonsPage = () => {
    const {data, isLoading} = useGetLessonsQuery({doc: "learning-skill/calculation-lessons"})
    // console.log(data.message[0].calculations)
    return (
        <>
            {
                isLoading ? <h1>Loading...</h1> :
                    <div className="mt-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 shadow-xl rounded-2xl p-10 border">
                        {data.message[0].calculations ? data.message[0].calculations.map((item: any, index: number) => {
                            // @ts-ignore
                            const IconElement = React.createElement(AntDesignIcon[item.icon])
                            const img = require(`../../../../assets/${item.img}.png`)
                            return <Link key={index} to={`/learning/maths/calculation/${item.id}`}>
                                <LessonCardComponent key={index} lessonName={item.lessonName} icon={IconElement}
                                                     img={img}/></Link>
                        }) : <h1>No Lesson</h1>}
                        <Link to={`/calculationQuiz`}>
                            <LessonCardComponent lessonName={"Calculation Lesson Quiz"}
                                                 icon={<MdOutlineQuiz size={"3rem"}/>}
                                                 img={quzImg}/></Link>
                    </div>
            }
        </>
    )
}

export default CalculationLessonsPage
