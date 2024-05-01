import parson1 from "../assets/images/parson/parson-2.png"
import parson2 from "../assets/images/parson/parson-1.png"
import icon from "../assets/icons/quote.png"
import { FaStar } from "react-icons/fa";
const Customer = () => {
    return (
        <div className="my-20">
            <div className="w-[90%] md:w-[50%] mx-auto text-center mb-20">
                <p className="text-xl font-bold text-[#FF3811] mb-5">Testimonial</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">What Customer Says</h2>
                <p className="text-gray-500">the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
            </div>

            <div className="flex flex-col md:flex-row gap-6 mb-20 w-[95%] md:w-full mx-auto">
                {/* 1 */}
                     <div className="p-4 md:p-7 lg:p-12 border rounded-xl">
                        <div className="flex justify-between mb-5">
                        <div className="flex gap-3">
                        <img src={parson1} alt="" />
                        <div>
                        <p className="text-xl font-bold">Awlad Hossain</p>
                        <p className="font-semibold text-gray-500">Businessman</p>
                        </div>
                        </div>
                            <img src={icon} alt="" />
                        </div>
                        <p className="mb-4 text-gray-500">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                        <div className="text-orange-500 flex gap-1">
                        <FaStar className="text-[20px]"/>
                        <FaStar className="text-[20px]"/>
                        <FaStar className="text-[20px]"/>
                        <FaStar className="text-[20px]"/>
                        <FaStar className="text-[20px]"/>
                        </div>
                     </div>
                {/* 2 */}
                    <div className="p-4 md:p-7 lg:p-12 border rounded-xl">
                        <div className="flex justify-between mb-5">
                        <div className="flex gap-3">
                        <img src={parson2} alt="" />
                        <div>
                        <p className="text-xl font-bold">Awlad Hossain</p>
                        <p className="font-semibold text-gray-500">Businessman</p>
                        </div>
                        </div>
                            <img src={icon} alt="" />
                        </div>
                        <p className="mb-4 text-gray-500">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                        <div className="text-orange-500 flex gap-1">
                        <FaStar className="text-[20px]"/>
                        <FaStar className="text-[20px]"/>
                        <FaStar className="text-[20px]"/>
                        <FaStar className="text-[20px]"/>
                        <FaStar className="text-[20px]"/>
                        </div>
                     </div>
            </div>

        </div>
    );
};

export default Customer;