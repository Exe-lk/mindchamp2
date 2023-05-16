import learningMathsImg from "../../assets/select-subject/learnmaths.png"
import learningEnglishImg from "../../assets/select-subject/learnenglish.png"
import {Button} from "antd";
import {useNavigate} from "react-router-dom";

const SelectSubjectPage = () => {

    const navigate = useNavigate()

    return (
        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 shadow-xl rounded-2xl p-10 border mt-5">
                <div className="flex">
                    <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200 mx-10">
                        <div className="px-4 py-5 sm:p-6">
                            <img src={learningEnglishImg} alt=""/>
                        </div>
                        <div className="bg-blue-500 h-full">
                            <Button type="text" block onClick={() => navigate("/select/english")}
                                    className="h-fit py-5">
                                <p className="text-base text-3xl font-black">Learn English</p>
                            </Button>
                        </div>
                    </div>

                    <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200 mx-10">
                        <div className="px-4 py-5 sm:p-6">
                            <img src={learningMathsImg} alt=""/>
                        </div>
                        <div className="bg-blue-500 h-full">
                            <Button type="text" block onClick={() => navigate("/select/maths")} className="h-fit py-5">
                                <p className="text-base text-3xl font-black">Learn Maths</p>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SelectSubjectPage
