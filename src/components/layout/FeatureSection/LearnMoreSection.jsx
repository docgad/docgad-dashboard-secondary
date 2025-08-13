import React from "react";
import { Link } from "react-router-dom";
import LearnMore_btn from "../../common/LearnMore_btn";

const LearnMoreSection = () => {
    return(
        <>
            <div className="grid grid-row-3 items-center text-center gap-[16px] mt-[64px] px-[60px] py-[40px]">
                <h1 className="text-8xl font-semibold">Transform Your Practice<br /> with AI Solutions</h1>
                <p className="text-[#666666]">Designed for doctors to spend less time on admin and more time with patients.</p>
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