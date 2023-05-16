import _ from "lodash"
import CanvasDraw from "react-canvas-draw";
import {forwardRef, useImperativeHandle, useRef} from "react";
import {useGetEnglishActivityResultMutation} from "../../../../service/english-activity-api.service";
import {useAddResultMutation} from "../../../../service/lessons-api.service";
import {useParams} from "react-router-dom";

interface Props {
    imgUri: any;
    activity: any;
}

type Ref = {
    onGetSaveDataHandler: () => void;
};

const ActivityComponent = forwardRef<Ref, Props>(({imgUri, activity}, ref) => {
    const {id} = useParams()
    const canvasRef = useRef<any>(null);
    console.log("lesson id", id)
    const [getResult, {isLoading, data}] = useGetEnglishActivityResultMutation()
    const [add, {isLoading: isMutationResultLoading, data: mutationData}] = useAddResultMutation()
    // console.log("====================>>>>", _.get(data, "result[0].text"))

    const onGetSaveDataHandler = () => {
        let canvas = null;
        if (canvasRef.current) canvas = canvasRef.current.canvas.drawing;
        const dataUrl = canvas.toDataURL();

        getResult({image: dataUrl}).unwrap().then((result) => {
            // console.log("*****", activity?.ans)
            // console.log("#####", _.get(result, "result[0].text"))
            if (activity?.ans.toUpperCase() == _.get(result, "result[0].text")) {
                window.alert("Correct")
                add({
                    "lesson_id": id,
                    "marks": 10
                })
            } else {
                window.alert("Wrong")
            }
        })
    };

    useImperativeHandle(ref, () => ({
        onGetSaveDataHandler: onGetSaveDataHandler,
    }));

    const onClearHandler = () => {
        let canvas = null;
        if (canvasRef.current) {
            canvasRef.current.eraseAll()
        }

    }

    return (
        <div className="w-full">
            <div className="flex items-center overflow-hidden gap-5 justify-between w-full">
                <div className="w-96 h-96">
                    <img src={imgUri} className="w-full h-full object-contain"/>
                </div>
                <div className="flex flex-col items-center">
                    <div className="relative overflow-hidden w-96 h-96 border-gray-900 border-2">
                        <CanvasDraw gridColor={"#ffffff"} ref={canvasRef} className="absolute object-contain"/>
                    </div>
                    <button onClick={onClearHandler} className="text-base mt-5 w-1/2 border bg-blue-300 text-black border-solid border-gray-900
                    rounded-2xl">Clear
                    </button>
                </div>
            </div>
        </div>
    );
});

export default ActivityComponent;
