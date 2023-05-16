import React from "react";

interface Props {
    imgUri: any,
    description: string
}

const CalculationLessonOverviewComponent: React.FC<Props> = ({imgUri, description}) => {

    return (
        <>
            <div className="flex justify-center p-5 h-full">
                <div className="flex flex-col mx-20 p-2">
                    <img src={imgUri} width={400} height={500} alt=""/>
                </div>
                <div className={"self-center"}>
                    <p className="text-base text-8xl font-black">{description}</p>
                </div>
            </div>
        </>
    )
}

export default CalculationLessonOverviewComponent
