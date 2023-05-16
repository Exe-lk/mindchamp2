import {Outlet} from "react-router-dom";

interface Data {
    [key: string]: any;
}

const allLesson: Data = {}
const MainCardComponent = () => {

    return (
        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 shadow-xl rounded-2xl p-10 border">
                <Outlet/>
            </div>
        </>
    )
}

export default MainCardComponent
