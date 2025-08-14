import { Link } from "react-router-dom";
import Frame1 from "../../../assets/Frame1.svg"
import { HiArrowRight } from "react-icons/hi";
import { PiSparkleFill } from "react-icons/pi";

const HeroSection = () => {
    return(
        <section className="grid grid-row-3 gap-[16px]">
            <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl max-md:mt-8 flex justify-center text-center font-semibold leading-tight">
                <h1>
                    <PiSparkleFill className="hidden sm:block text-3xl text-[#214DD0]" />
                    AI-Powered Healthcare,<br  /> Real-World Care.
                </h1>
            </div>
            
            <div>
                <p className="text-[#666666] text-center text-sm sm:text-base max-w-3xl mx-auto px-4">
                    We help doctors, clinics, and hospitals simplify patient management, automate records,<br /> and improve care using cutting-edge AI solutions.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
                <Link to="/get-demo">
                    <button className="flex justify-center items-center gap-2 text-white bg-[#FE6347] px-[24px] p-2 rounded-3xl cursor-pointer">
                        Get Demo
                        <HiArrowRight className="text-md" />
                    </button>
                </Link>
                <Link to="/talk-to-expert">
                    <button className="text-[#214DD0] bg-[#FFFCF5] border-[1px] p-2 rounded-3xl px-[24px] cursor-pointer">
                        Talk to Our Tech Expert
                    </button>
                </Link>
            </div>

            <div>
                <img
                    src={Frame1}
                    alt="AI healthcare illustratio"
                    className="w-full max-w-4xl mx-auto py-[20px] sm:py-[40px] px-4"
                />
            </div>
        </section>
    )
}
export default HeroSection