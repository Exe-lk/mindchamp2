import {Link} from "react-router-dom";
import LessonCardComponent from "../../../../components/lesson-card/lesson-card.component";
import {MdOutlineQuiz} from "react-icons/md";
import quzImg from "../../../../assets/quiz/learnnumbers/quiz.png";
import React from "react";
import * as AntDesignIcon from "react-icons/ai";
import {useGetLessonsQuery} from "../../../../service/lessons-api.service";

// import a from "../../../../assets/learnEnglish/a.png"
// import b from "../../../../assets/learnEnglish/b.png"
// import c from "../../../../assets/learnEnglish/c.png"
// import d from "../../../../assets/learnEnglish/d.png"
// import e from "../../../../assets/learnEnglish/e.png"
// import f from "../../../../assets/learnEnglish/f.png"
// import g from "../../../../assets/learnEnglish/g.png"
// import h from "../../../../assets/learnEnglish/h.png"

interface Data {
    [key: string]: any;
}

// const allLesson: Data = [
//     {
//         id: "a",
//         lessonName: "Let's learn about the letter A",
//         icon: <AiFillLock color={"red"} size={"3rem"}/>,
//         lessonStatus: "unlock",
//         img: a
//     },
//     {
//         id: "b",
//         lessonName: "Let's learn about the letter B",
//         icon: <AiFillLock color={"red"} size={"3rem"}/>,
//         lessonStatus: "lock",
//         img: b
//     },
//     {
//         id: "c",
//         lessonName: "Let's learn about the letter C",
//         icon: <AiFillLock color={"red"} size={"3rem"}/>,
//         lessonStatus: "lock",
//         img: c
//     },
//     {
//         id: "d",
//         lessonName: "Let's learn about the letter D",
//         icon: <AiFillLock color={"red"} size={"3rem"}/>,
//         lessonStatus: "lock",
//         img: d
//     },
//     {
//         id: "e",
//         lessonName: "Let's learn about the letter E",
//         icon: <AiFillLock color={"red"} size={"3rem"}/>,
//         lessonStatus: "lock",
//         img: e
//     },
//     {
//         id: "f",
//         lessonName: "Let's learn about the letter F",
//         icon: <AiFillLock color={"red"} size={"3rem"}/>,
//         lessonStatus: "lock",
//         img: f
//     },
//     {
//         id: "g",
//         lessonName: "Let's learn about the letter G",
//         icon: <AiFillLock color={"red"} size={"3rem"}/>,
//         lessonStatus: "lock",
//         img: g
//     },
//     {
//         id: "h",
//         lessonName: "Let's learn about the letter H",
//         icon: <AiFillLock color={"red"} size={"3rem"}/>,
//         lessonStatus: "lock",
//         img: h
//     },
//     {
//         id: "i",
//         lessonName: "Let's learn about the letter I",
//         icon: <AiFillLock color={"red"} size={"3rem"}/>,
//         lessonStatus: "lock",
//         img: a
//     },
//     {
//         id: "j",
//         lessonName: "Let's learn about the letter J",
//         icon: <AiFillLock color={"red"} size={"3rem"}/>,
//         lessonStatus: "lock",
//         img: c
//     },
//     {
//         id: "k",
//         lessonName: "Let's learn about the letter K",
//         icon: <AiFillLock color={"red"} size={"3rem"}/>,
//         lessonStatus: "lock",
//         img: d
//     },
//     {
//         id: "l",
//         lessonName: "Let's learn about the letter L",
//         icon: <AiFillLock color={"red"} size={"3rem"}/>,
//         lessonStatus: "lock",
//         img: f
//     },
//     {
//         id: "m",
//         lessonName: "Let's learn about the letter M",
//         icon: <AiFillLock color={"red"} size={"3rem"}/>,
//         lessonStatus: "lock",
//         img: a
//     },
//     {
//         id: "n",
//         lessonName: "Let's learn about the letter N",
//         icon: <AiFillLock color={"red"} size={"3rem"}/>,
//         lessonStatus: "lock",
//         img: a
//     },
//     {
//         id: "o",
//         lessonName: "Let's learn about the letter O",
//         icon: <AiFillLock color={"red"} size={"3rem"}/>,
//         lessonStatus: "lock",
//         img: a
//     },
//     {
//         id: "p",
//         lessonName: "Let's learn about the letter P",
//         icon: <AiFillLock color={"red"} size={"3rem"}/>,
//         lessonStatus: "lock",
//         img: a
//     },
//     {
//         id: "q",
//         lessonName: "Let's learn about the letter Q",
//         icon: <AiFillLock color={"red"} size={"3rem"}/>,
//         lessonStatus: "lock",
//         img: a
//     },
//     {
//         id: "r",
//         lessonName: "Let's learn about the letter R",
//         icon: <AiFillLock color={"red"} size={"3rem"}/>,
//         lessonStatus: "lock",
//         img: a
//     },
//     {
//         id: "s",
//         lessonName: "Let's learn about the letter S",
//         icon: <AiFillLock color={"red"} size={"3rem"}/>,
//         lessonStatus: "lock",
//         img: a
//     },
//     {
//         id: "t",
//         lessonName: "Let's learn about the letter T",
//         icon: <AiFillLock color={"red"} size={"3rem"}/>,
//         lessonStatus: "lock",
//         img: a
//     },
//     {
//         id: "u",
//         lessonName: "Let's learn about the letter U",
//         icon: <AiFillLock color={"red"} size={"3rem"}/>,
//         lessonStatus: "lock",
//         img: a
//     },
//     {
//         id: "v",
//         lessonName: "Let's learn about the letter V",
//         icon: <AiFillLock color={"red"} size={"3rem"}/>,
//         lessonStatus: "lock",
//         img: a
//     },
//     {
//         id: "w",
//         lessonName: "Let's learn about the letter W",
//         icon: <AiFillLock color={"red"} size={"3rem"}/>,
//         lessonStatus: "lock",
//         img: a
//     },
//     {
//         id: "x",
//         lessonName: "Let's learn about the letter X",
//         icon: <AiFillLock color={"red"} size={"3rem"}/>,
//         lessonStatus: "lock",
//         img: a
//     },
//     {
//         id: "y",
//         lessonName: "Let's learn about the letter Y",
//         icon: <AiFillLock color={"red"} size={"3rem"}/>,
//         lessonStatus: "lock",
//         img: a
//     },
//     {
//         id: "z",
//         lessonName: "Let's learn about the letter Z",
//         icon: <AiFillLock color={"red"} size={"3rem"}/>,
//         lessonStatus: "lock",
//         img: a
//     }
// ]

const LettersLessonsPage = () => {

    const {data, isLoading} = useGetLessonsQuery({doc: "learning-skill/english"})
    // if (!isLoading) {
    //     console.log(data.message)
    // }

    return (
        <>
            {isLoading ? <h1>Loading...</h1> :
                <div className="mt-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 shadow-xl rounded-2xl p-10 border">
                    {data ? data.message.map((item: any, index: number) => {
                        // @ts-ignore
                        const IconElement = React.createElement(AntDesignIcon[item.icon])
                        const img = require(`../../../../assets/learnEnglish/${item.img}.png`)
                        return (<Link key={index}
                                      to={item.lessonStatus === 'unlock' ? `/learning/english/alphabet/${item.id}` : '#'}>
                            <LessonCardComponent key={index} lessonName={item.lessonName} icon={IconElement}
                                                 img={img}/></Link>)
                    }) : <h1>No Lesson</h1>}
                    <Link to={`/alphabetQuiz`}>
                        <LessonCardComponent lessonName={"Alphabet Lesson Quiz"} icon={<MdOutlineQuiz size={"3rem"}/>}
                                             img={quzImg}/></Link>
                </div>
            }
        </>
    )
}

export default LettersLessonsPage
