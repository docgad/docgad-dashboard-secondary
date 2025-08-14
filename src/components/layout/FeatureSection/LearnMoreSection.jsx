import React from "react";
import { Link } from "react-router-dom";
import LearnMore_btn from "../../common/LearnMore_btn";

const LearnMoreSection = () => {
    return(
        <>
            <div className="grid grid-row-3 items-center text-center gap-4 mt-16 px-4 sm:px-10 lg:px-20 py-10">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-4xl mx-auto">Transform Your Practice<br /> with AI Solutions</h1>
                <p className="text-[#666666] text-base sm:text-lg max-w-2xl mx-auto">Designed for doctors to spend less time on admin and more time with patients.</p>
            </div>
            <div className="flex justify-center items-center my-[16px]">
                <Link to="/learn_more">
                    <LearnMore_btn />
                </Link>
            </div>
        </>
    )
}

export default LearnMoreSection