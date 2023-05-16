import {Link} from "react-router-dom";
import LessonCardComponent from "../../../../components/lesson-card/lesson-card.component";
import React from "react";
import quiz from "../../../../assets/quiz/learnnumbers/quiz.png"
import * as AntDesignIcon from "react-icons/ai";
import {AiFillLock} from "react-icons/ai";

// import no1 from "../../../../assets/quiz/learnnumbers/no1.png"
// import no2 from "../../../../assets/quiz/learnnumbers/no2.png"
// import no3 from "../../../../assets/quiz/learnnumbers/no3.png"
// import no4 from "../../../../assets/quiz/learnnumbers/no4.png"
// import no5 from "../../../../assets/quiz/learnnumbers/no5.png"
// import no6 from "../../../../assets/quiz/learnnumbers/no6.png"
// import no7 from "../../../../assets/quiz/learnnumbers/no7.png"
// import no8 from "../../../../assets/quiz/learnnumbers/no8.png"
// import no9 from "../../../../assets/quiz/learnnumbers/no9.png"
// import no10 from "../../../../assets/quiz/learnnumbers/no10.png"
import {useGetLessonsQuery} from "../../../../service/lessons-api.service";

interface Data {
    [key: string]: any;
}

// const allLesson: Data = [
//     {
//         id: "1-10_number-1",
//         lessonName: "Learn Number 01",
//         icon: <AiFillLock color={"red"} size={"3rem"}/>,
//         lessonStatus: "unlock",
//         img: no1
//     },
//     {
//         id: "1-10_number-2",
//         lessonName: "Learn Number 02",
//         icon: <AiFillLock color={"red"} size={"3rem"}/>,
//         lessonStatus: "unlock",
//         img: no2
//     },
//     {
//         id: "1-10_number-3",
//         lessonName: "Learn Number 03",
//         icon: <AiFillLock color={"red"} size={"3rem"}/>,
//         lessonStatus: "unlock",
//         img: no3
//     },
//     {
//         id: "1-10_number-4",
//         lessonName: "Learn Number 04",
//         icon: <AiFillLock color={"red"} size={"3rem"}/>,
//         lessonStatus: "unlock",
//         img: no4
//     },
//     {
//         id: "1-10_number-5",
//         lessonName: "Learn Number 05",
//         icon: <AiFillLock color={"red"} size={"3rem"}/>,
//         lessonStatus: "unlock",
//         img: no5
//     },
//     {
//         id: "1-10_number-6",
//         lessonName: "Learn Number 06",
//         icon: <AiFillLock color={"red"} size={"3rem"}/>,
//         lessonStatus: "unlock",
//         img: no6
//     },
//     {
//         id: "1-10_number-7",
//         lessonName: "Learn Number 07",
//         icon: <AiFillLock color={"red"} size={"3rem"}/>,
//         lessonStatus: "unlock",
//         img: no7
//     },
//     {
//         id: "1-10_number-8",
//         lessonName: "Learn Number 08",
//         icon: <AiFillLock color={"red"} size={"3rem"}/>,
//         lessonStatus: "unlock",
//         img: no8
//     },
//     {
//         id: "1-10_number-9",
//         lessonName: "Learn Number 09",
//         icon: <AiFillLock color={"red"} size={"3rem"}/>,
//         lessonStatus: "unlock",
//         img: no9
//     },
//     {
//         id: "1-10_number-10",
//         lessonName: "Learn Number 10",
//         icon: <AiFillLock color={"red"} size={"3rem"}/>,
//         lessonStatus: "unlock",
//         img: no10
//     },
// ]
const NumberLessonsPage = () => {

    const {data, isLoading} = useGetLessonsQuery({doc: "learning-skill"})
    if (!isLoading) {
        console.log(data.message)
    }
    return (
        <>
            {isLoading ? <h1>Loading...</h1> :
                <div className="mt-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 shadow-xl rounded-2xl p-10 border">
                    {data ? data.message.map((item: any, index: number) => {
                        // @ts-ignore
                        const IconElement = React.createElement(AntDesignIcon[item.icon])
                        const img = require(`../../../../assets/quiz/learnnumbers/${item.img}.png`)
                        return <Link key={index}
                                     to={item.lessonStatus === 'unlock' ? `/learning/maths/1-10_number/${item.id}` : '#'}>
                            <LessonCardComponent key={index} lessonName={item.lessonName} icon={IconElement}
                                                 img={img}/></Link>
                    }) : <h1>No Lesson</h1>}
                    <Link to={`/numberQuiz`}>
                        <LessonCardComponent lessonName={"Number Lesson Quiz"}
                                             icon={<AiFillLock color={"red"} size={"3rem"}/>}
                                             img={quiz}/></Link>
                </div>
            }
        </>
    )
}

export default React.memo(NumberLessonsPage)
