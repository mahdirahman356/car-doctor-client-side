import { Link, useLoaderData } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import checkeout from "../assets/images/checkout/checkout.png"
import { useEffect, useState } from "react";
import logo from "../assets/images/logo/logoW.png"
const ServiceDetails = () => {
    let servicesSingleOne  = useLoaderData()
    let {_id, img, facility, price, description} = servicesSingleOne

    let [service, setService] = useState([])
    useEffect(() => {
        fetch("https://car-doctors-sarver-side.vercel.app/services")
        .then(res => res.json())
        .then(data => {
            setService(data)
        })
        },[])
    return (
        <div className="w-[95%] md:full mx-auto">
            <div className=" bg-cover bg-no-repeat rounded-xl" style={{ backgroundImage: `url(${checkeout})` }}>
                <div className="bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0)] px-7 md:px-20 py-10 md:py-32 rounded-xl">
                    <h1 className="text-2xl md:text-5xl font-bold text-white w-full h-full">Service Details</h1>
                </div>
            </div>

            <div className="w-full mt-10 md:mt-24">
                    <div className="flex flex-col lg:flex-row gap-6 justify-center items-center lg:items-start">
                        <img src={img} className="rounded-lg lg:w-[60%]" />
                        <div className="p-7 bg-[#F3F3F3] rounded-xl w-full lg:w-[40%]">
                           <h2 className="font-bold text-xl mb-4">Services</h2>
                           {
                           service?.map((service, index) =>  <div key={index} className="bg-white px-5 py-2 rounded-xl flex justify-between items-center mb-3">
                                  <p className="font-semibold">{service.title}</p>
                                  <Link className="btn btn-ghost" to={`/ServiceDetails/${service._id}`}><FaArrowRightLong className="text-[20px]"/></Link>
                             </div>)
                             }
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row justify-between mt-14 gap-7">
                        <div className="lg:w-[60%]">
                        <h3 className="text-2xl font-bold mb-5">Unique Car Engine Service</h3>  
                        <p className="mb-3 text-gray-500">{description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {facility.map((facility, index) => <div key={index} className="">
                            <div className="p-6  bg-[#F3F3F3] rounded-xl">
                                <p className="font-semibold text-[18px]">{facility.name}</p>
                                <p>{facility.details}</p>
                            </div>
                        </div>)}
                        </div>
                        </div>

                        
                        <div className="lg:w-[40%]">
                        <div className="p-6 bg-[#151515] rounded-xl text-white mb-3">
                        <div className="flex justify-center items-center mb-6">
                        <img src={logo} alt="" />
                        </div>
                        <p className="text-[18px] font-bold text-center mb-4">Need Help? We Are Here To Help You</p>
                        <div className="bg-white p-4 text-center rounded-xl">
                            <p className="text-[18px] font-bold text-[#151515]"><span className="text-red-600">Car Doctor</span> Special</p>
                            <p className="text-[#151515] font-bold">Save up to <span className="text-red-500">60% off</span></p>
                        </div>
                        </div>
                        <h3 className="text-2xl font-bold mb-5 text-center">Price {price} </h3>  
                        <Link to={`/checkOut/${_id}`}><button className="btn text-white bg-[#FF3811] w-full">Proceed Checkout</button></Link>
                        </div>
                        </div>
                </div>
        </div>
    );
};

export default ServiceDetails;