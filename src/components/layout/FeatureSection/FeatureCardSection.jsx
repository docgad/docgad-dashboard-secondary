import { Link } from "react-router-dom";
import LearnMore_btn from "../../common/LearnMore_btn";
import featureCardData from "../../../Data/featureCardData";

const FeatureCard = ({ title, description, bgLeft, bgRight, image, link , reverse }) => {
    return(
        <>
            <div className={`flex flex-col lg:flex-row ${reverse ? "lg:flex-row-reverse" : ""} px-4 sm:px-8 lg:px-[60px] py-6 lg:py-[40px] mt-8`}>
                <div className={`flex flex-col justify-center gap-6 text-start ${bgLeft} w-full lg:w-1/2 p-6 sm:p-10 lg:p-[72px] rounded-2xl`}>
                    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold leading-tight">{title}</h1>
                    <p className="text-[#111111]">{description}</p>
                    <Link to={link}><LearnMore_btn /></Link>
                </div>
                <div className={`flex justify-center items-center w-full lg:w-1/2 ${bgRight} p-6 sm:p-10 lg:p-[72px] overflow-hidden rounded-2xl`}>
                    <img src={image} alt={title}/>
                </div>
            </div>
        </>
    )
}

const FeatureCardSection = () => {
    return(
        <div className="flex flex-col gap-8">
            {featureCardData.map((card,index) => (
                <FeatureCard key={index} {...card} reverse={index %2 !==0} />
            ))}
        </div>
    )
}

export default FeatureCardSection