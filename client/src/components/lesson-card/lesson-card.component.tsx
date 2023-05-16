import React from "react";

interface Props {
    lessonName: string,
    icon: any,
    img: any
}

const LessonCardComponent: React.FC<Props> = ({img, lessonName, icon}) => {

    return (
        <>
            <div className="bg-white rounded-full shadow-xl p-6 mx-10 my-10">
                <div className="flex items-center">
                    <div className="text-lg font-medium">{lessonName}</div>
                    <div className="flex items-center ml-auto">
                        <div className="text-sm font-medium mx-36 text-5xl text-red-600">{icon}</div>
                        <div className="text-sm font-medium mr-10">{<img src={img} style={{width: 50, height: 50}}></img>}</div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default LessonCardComponent
