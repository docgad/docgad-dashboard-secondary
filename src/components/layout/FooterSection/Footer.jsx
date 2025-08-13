import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <>
        <div className="px-[60px] py-[40px] mx-[60px] rounded-t-4xl bg-[#214DD0] text-[#FFFFFF] flex justify-between">

            <div className="grid grid-row-2 gap-5">
                <h1 className='text-3xl text-[#FFFFFF] mb-5'>Docgad</h1>
                <p>Revolutionizing clinic management <br />with AI-driven tools.</p>
                <p>Copyright © 2025 DocGad. All rights reserved.</p>
            </div>

            <div className="flex flex-col gap-3">
                <p className="text-[#FFEFCD80] mb-5">Company</p>
                <Link to="/about-us">About Us</Link>
                <Link to="/our-pricing">Our Pricing</Link>
            </div>

            <div className="flex flex-col gap-3">
                <p className="text-[#FFEFCD80] mb-5 ">Our Solutions</p>
                <Link to="/ai-patient-record">AI-Powered Patient Record System</Link>
                <Link to="/appointment-secheduling">Smart Appointment Scheduling</Link>
                <Link to="/vital-tracking">Medical History & Vitals Tracking</Link>
                <Link to="/anylytics">Data Analytics for Clinics</Link>
            </div>

            <div className="flex flex-col gap-3 ">
                <p className="text-[#FFEFCD80] mb-5">Contact Us</p>
                <p>📍 21/4, MG Road, Bengaluru, India</p>
                <p>✉️ docgad525@gmail.com</p>
                <p>📞 +91 6201827571</p>
            </div>
        </div>
        </>
    )
}
export default Footer