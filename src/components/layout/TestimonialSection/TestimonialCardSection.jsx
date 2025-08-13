import React from "react";
import doc_img from "../../../assets/doc_img.png"
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

const TestimonialCardSection = () => {
    return(
        <div className="px-[60px] py-[40px] flex flex-col gap-10">
            <div>
                <h1 className="text-6xl font-semibold ">Trusted by Clinics & Healthcare Leaders</h1>
            </div>
            <div className="bg-[#FFF7E5] flex flex-row justify-center items-start rounded-3xl">
                <img src={doc_img} alt="Doc_img" className="px-[60px] py-[40px]" />
                <div className="px-[40px] py-[40px]">
                    <p className="text-2xl font-medium text-start">
                        "DocGad completely transformed how I run my clinic. 
                        From patient records to automated reminders, everything is faster
                         and more organized. I’ve cut down my daily admin work by almost 
                         two hours, giving me more time to focus on my patients."
                    </p>
                    <ul className=" list-disc py-[32px] items-start p-2">
                        <li>Saved 2 hours per day on paperwork & scheduling</li>
                        <li>Reduced missed appointments by 35% through smart reminders</li>
                        <li>Instant access to patient history and treatment plans</li>
                    </ul>
                    <div className="bg-blue-800 rounded-2xl p-5 flex flex-col items-start">
                        <h1 className="font-bold text-white">Dr. Priya Sharma</h1>
                        <p className="text-white">
                            Owner, Sunrise Family Clinic
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCardSection