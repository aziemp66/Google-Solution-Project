import React from "react";
import Bounce from "react-reveal/Bounce";

const Title = ({title}) => {
    return (
        <Bounce top>
            <div className="flex flex-col items-center pb-1 space-x-2">
                <h1 className="text-3xl text-gray-700 poppins"><span className="font-semibold select-none text-black-600">{title}</span></h1>
                <div className="flex items-center justify-center w-16 h-1 mt-2 bg-black rounded-full"></div>
            </div>
        </Bounce>
    )
}

export default Title;