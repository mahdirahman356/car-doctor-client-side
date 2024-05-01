import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { FaCalendarAlt } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { IoLocationSharp, IoTime } from "react-icons/io5";

const Contact = () => {
    return (
        <div className="my-20 flex flex-col md:flex-row justify-between gap-4 bg-[#151515] text-white p-4 py-10 lg:p-20 md:rounded-xl">
            <div className="flex items-center gap-4">
            <div className="relative">
            <FaCalendarAlt className="text-[30px]"/>
            <IoTime className="text-[18px] text-[#FF3811] absolute left-4 top-4"/>
            </div>
              <div>
                <p>We are open monday-friday</p>
                <p className="text-xl font-bold">7:00 am - 9:00 pm</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
            <div className="relative">
            <BiSolidMessageRoundedDots className="absolute right-0 bottom-4 text-[20px] text-[#FF3811]"/>
            <IoMdCall className="text-[30px]"/>
            </div>
              <div>
                <p>Have a question?</p>
                <p className="text-xl font-bold">+2546 251 2658</p>
              </div>
            </div>


            <div className="flex items-center gap-4">
            <div className="relative">
            <IoLocationSharp className="text-[30px] text-[#FF3811]"/>
            </div>
              <div>
                <p>Need a repair? our address  </p>
                <p className="text-xl font-bold">Liza Street, New York</p>
              </div>
            </div>
        </div>
    );
};

export default Contact;