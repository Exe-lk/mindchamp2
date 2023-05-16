import {Link} from "react-router-dom";
import LessonCardComponent from "../../../../components/lesson-card/lesson-card.component";
import React from "react";
import {AiFillLock} from "react-icons/ai";
import quiz from "../../../../assets/quiz/learnnumbers/quiz.png"
import shapes from "../../../../assets/quiz/shapes/shapes.png"
import shapes2 from "../../../../assets/quiz/shapes/shapes2.png"
import {useGetShapeLessonsQuery} from "../../../../service/lessons-api.service";

interface Data {
    [key: string]: any;
}

const allLesson: Data = [
    {
        id: "plane_shapes",
        lessonName: "Plane shapes Lesson",
        icon: <AiFillLock color={"red"} size={"3rem"}/>,
        img: shapes
    },
    {
        id: "with_volume",
        lessonName: "With volume Lesson",
        icon: <AiFillLock color={"red"} size={"3rem"}/>,
        img: shapes2
    }
]
const ShapesLessonsPage = () => {
    const {data, isLoading, isError} = useGetShapeLessonsQuery({path: "learning-skill/shape-lessons"})
    console.log(data)
    return (
        <>
            <div className="mt-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 shadow-xl rounded-2xl p-10 border">
                {allLesson ? allLesson.map((item: any, index: number) => (
                    <Link key={index} to={`/learning/maths/shape/${item.id}`}>
                        <LessonCardComponent key={index} lessonName={item.lessonName} icon={item.icon}
                                             img={item.img}/></Link>
                )) : <h1>No Lesson</h1>}
                <Link to={`/shapesQuiz`}>
                    <LessonCardComponent lessonName={"shapes Lesson Quiz"} icon={<AiFillLock color={"red"} size={"3rem"}/>}
                                         img={quiz}/></Link>
            </div>
        </>
    )
}

export default ShapesLessonsPage
