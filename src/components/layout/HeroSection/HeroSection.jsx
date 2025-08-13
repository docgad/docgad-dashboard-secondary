import React from "react";
import { Link } from "react-router-dom";
import Frame1 from "../../../assets/Frame1.svg"
import { HiArrowRight } from "react-icons/hi";
import { PiSparkleFill } from "react-icons/pi";

const HeroSection = () => {
    return(
        <>
            <section className="grid grid-row-3 gap-[16px]">
                <div className="text-8xl flex justify-center text-center font-semibold">
                    <h1>
                        <PiSparkleFill className="text-3xl text-[#214DD0]" />
                        AI-Powered Healthcare,<br /> Real-World Care.
                    </h1>
                </div>
                <div>
                    <p className="text-[#666666] text-center">
                        We help doctors, clinics, and hospitals simplify patient management, automate records,<br /> and improve care using cutting-edge AI solutions.
                    </p>
                </div>
                <div className="flex justify-center items-center gap-8">
                    <Link to="/get-demo">
                        <button className="flex justify-center items-center gap-2 text-white bg-[#FE6347] px-[24px] p-2 rounded-4xl cursor-pointer">
                            Get Demo
                            <HiArrowRight className="text-md" />
                        </button>
                    </Link>
                    <Link to="/talk-to-expert">
                        <button className="text-[#214DD0] bg-[#FFFCF5] border-[1px] p-2 rounded-4xl px-[24px] cursor-pointer">
                            Talk to Our Tech Expert
                        </button>
                    </Link>
                </div>
                <div>
                    <img
                      src={Frame1}
                      alt="Hero_section_image"
                      className="xl:px-[60px] py-[40px]"
                    />
                </div>
            </section>
        </>
    )
}
export default HeroSection