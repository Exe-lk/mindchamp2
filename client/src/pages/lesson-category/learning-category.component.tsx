import LessonCardComponent from "../../components/lesson-card/lesson-card.component";
import React from "react";
import {Link, useParams} from "react-router-dom";
import numbers from "../../assets/quiz/learnnumbers/numbers.png"
import {ImListNumbered} from "react-icons/im";
import * as AntDesignIcon from "react-icons/ai";
import calculations from "../../assets/calculations.png"
import {FaShapes} from "react-icons/fa";
import shapes from "../../assets/shapes.png"
import {TiSortAlphabeticallyOutline} from "react-icons/ti";

import alphabet from "../../assets/learnEnglish/alphabet.png"

const LearningCategoryComponent = () => {

    const {subject} = useParams()
    const iconName = "AiFillCalculator"
    const IconElement = React.createElement(AntDesignIcon[iconName])
    return (
        <>
            {subject === "maths" ?
                <div className="mt-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 shadow-xl rounded-2xl p-10 border">
                    <Link to={"/select-lesson/number"}><LessonCardComponent lessonName={"Learn 1-10 number"}
                                                                            icon={<ImListNumbered size={"3rem"}/>}
                                                                            img={numbers}/></Link>
                    <Link to={"/select-lesson/calculation"}><LessonCardComponent lessonName={"Learn Calculation"}
                                                                                 icon={<div
                                                                                     className="text-5xl">{IconElement}</div>}
                                                                                 img={calculations}/></Link>
                    <Link to={"/select-lesson/shape"}><LessonCardComponent lessonName={"Learn Shape"}
                                                                           icon={<FaShapes size={"3rem"}/>}
                                                                           img={shapes}/></Link>
                    {/*<Link to={"/select-lesson/pattern"}><LessonCardComponent lessonName={"Learn Pattern"} icon={"ICON"}*/}
                    {/*                                                         img={"IMG"}/></Link>*/}
                </div> : <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 shadow-xl rounded-2xl p-10 border">
                    <Link to={"/select-lesson/alphabet"}><LessonCardComponent lessonName={"English Lesson 01"}
                                                                              icon={<TiSortAlphabeticallyOutline
                                                                                  size={"3rem"}/>}
                                                                              img={alphabet}/></Link>
                </div>}
        </>
    )
}

export default LearningCategoryComponent
