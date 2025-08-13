import { HiArrowRight } from "react-icons/hi";

function LearnMore_btn() {
  return (
    <button className="flex items-center gap-2 text-white bg-[#FE6347] px-[24px] p-2 rounded-4xl cursor-pointer">
        Learn More
        <HiArrowRight className="text-md" />
    </button>
  )
}

export default LearnMore_btn
