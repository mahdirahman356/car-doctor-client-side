import icon1 from "../assets/icons/group.svg"
import icon2 from "../assets/icons/deliveryt.svg"
import icon3 from "../assets/icons/person.svg"
import icon4 from "../assets/icons/Wrench.svg"
import icon5 from "../assets/icons/check.svg"
const CoreFeatures = () => {
    return (
        <div className="my-20">
            <div className="w-[90%] md:w-[50%] mx-auto text-center mb-20">
                <p className="text-xl font-bold text-[#FF3811] mb-5">Core Features</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Why Choose Us</h2>
                <p className="text-gray-500">the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
            </div>
            <div className="w-[95%] md:w-full mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                 {/* features-1 */}
            <div className="border p-5 flex flex-col justify-center items-center rounded-xl">
                 <img src={icon1} alt="" />
                 <p className="text-[18px] font-bold mt-5">Expert Team</p>
            </div>
                 {/* features-2 */}
            <div className="border p-5 flex flex-col justify-center items-center rounded-xl">
                 <img src={icon2} alt="" />
                 <p className="text-[18px] font-bold mt-5">Expert Team</p>
            </div>
                 {/* features-3 */}
            <div className="border p-5 flex flex-col justify-center items-center rounded-xl">
                 <img src={icon3} alt="" />
                 <p className="text-[18px] font-bold mt-5">Expert Team</p>
            </div>
                 {/* features-4 */}
            <div className="border p-5 flex flex-col justify-center items-center rounded-xl">
                 <img src={icon4} alt="" />
                 <p className="text-[18px] font-bold mt-5">Expert Team</p>
            </div>
                 {/* features-5 */}
            <div className="border p-5 flex flex-col justify-center items-center rounded-xl">
                 <img src={icon5} alt="" />
                 <p className="text-[18px] font-bold mt-5">Expert Team</p>
            </div>
            </div>
        </div>
    );
};

export default CoreFeatures;