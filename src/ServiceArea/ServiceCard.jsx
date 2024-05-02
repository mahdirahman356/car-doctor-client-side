import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    let {_id, img, title, price} = service
    return (
        <div>
            <div className="card h-full bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body ">
                    <h2 className="text-xl font-bold">{title}</h2>
                   <div className="flex justify-between items-center text-red-600">
                   <p className="text-[18px] font-bold ">Price: {price}</p>
                    <Link to={`/ServiceDetails/${_id}`}><FaArrowRightLong className="text-[20px]"/></Link>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;