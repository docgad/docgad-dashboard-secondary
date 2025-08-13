import { Link } from "react-router-dom";
import LearnMore_btn from "../../common/LearnMore_btn";
import featureCardData from "../../../Data/featureCardData";

const FeatureCard = ({ title, description, bgLeft, bgRight, image, link , reverse }) => {
    return(
        <>
            <div className={`flex flex-row ${reverse ? "flex-row-reverse": ""} px-[60px] py-[40px] mt-[32px]`}>
                <div className={`flex flex-col justify-center gap-[32px] text-start ${bgLeft} w-1/2 p-[72px] rounded-2xl`}>
                    <h1 className="text-8xl font-semibold">{title}</h1>
                    <p className="text-[#111111]">{description}</p>
                    <Link to={link}><LearnMore_btn /></Link>
                </div>
                <div className={`flex flex-center items-center w-1/2 ${bgRight} p-[72px] overflow-hidden rounded-2xl`}>
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