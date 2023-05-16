import React, {memo, useState} from 'react';
import {Button, Input} from "antd";
import {BsFillMicFill, BsMicMuteFill} from "react-icons/bs";
import speechToTextUtils from "../../../../utils/utility_transcribe"

interface Props {
    quizId: string
    question: string
    ans: string,
    imgUri: any,
    getAnswerHandler: any,
}

const CalculationQuizComponent: React.FC<Props> = ({quizId, ans, question, imgUri, getAnswerHandler}) => {
    console.log("############",quizId)
    const [transcribedData, setTranscribedData] = useState<Array<any>>([]);
    const [interimTranscribedData, setInterimTranscribedData] = useState('');
    const [isRecording, setIsRecording] = useState(false);

    function flushInterimData() {
        if (interimTranscribedData !== '') {
            setInterimTranscribedData('')
            setTranscribedData(oldData => [...oldData, interimTranscribedData])
        }
    }

    function handleDataReceived(data: any, isFinal: any) {

        if (isFinal) {
            setInterimTranscribedData('')
            setTranscribedData(oldData => [...oldData, data])
            console.log("******************", quizId)
            getAnswerHandler({
                qId: quizId,
                ans: [...transcribedData, data]
            })
        } else {
            setInterimTranscribedData(data)
        }
    }

    function getTranscriptionConfig() {
        return {
            audio: {
                encoding: 'LINEAR16',
                sampleRateHertz: 16000,
                languageCode: 'en-IN',
            },
            interimResults: true
        }
    }

    function onStart() {
        setTranscribedData([])
        setIsRecording(true)

        speechToTextUtils.initRecording(
            getTranscriptionConfig(),
            handleDataReceived,
            (error: any) => {
                console.error('Error when transcribing', error);
                setIsRecording(false)
                // No further action needed, as stream already closes itself on error
            });
    }

    function onStop() {
        setIsRecording(false)
        flushInterimData() // A safety net if Google's Speech API doesn't work as expected, i.e. always sends the final result
        speechToTextUtils.stopRecording();
    }

    return (
        <>
            <div className="flex justify-center p-5 h-full">
                <div className="flex flex-col mx-20 p-2">
                    <p className="text-base text-4xl font-bold mt-5">{question}</p>
                    <div className="text-base my-5"><Input size="large" value={transcribedData}
                                                           placeholder={transcribedData + ""}/></div>
                    {isRecording ?
                        <BsFillMicFill onClick={onStop} size='8rem' color="red"
                                       className="flex-1 self-center justify-self-center"/>
                        : <BsMicMuteFill onClick={onStart} size='8rem' color="blue"
                                         className="flex-1 self-center justify-self-center"/>}
                    <div className="text-base my-5"><Button block onClick={() => setTranscribedData([])}>
                        Clear Answer</Button></div>
                    {/*<div>*/}
                    {/*    <TranscribeOutput transcribedText={transcribedData}*/}
                    {/*                      interimTranscribedText={interimTranscribedData}/>*/}
                    {/*</div>*/}
                </div>
                <div className="">
                    <img src={imgUri} alt="" width={"400"} height={"500"}/>
                </div>
            </div>
        </>
    );
}

export default memo(CalculationQuizComponent)
