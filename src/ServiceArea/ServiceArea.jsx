import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const ServiceArea = () => {
    
    let [service, setService] = useState([])
     
    useEffect(() => {
    fetch("http://localhost:3000/services")
    .then(res => res.json())
    .then(data => {
        setService(data)
    })
    },[])

    return (
        <div>
            <div className="w-[90%] md:w-[50%] mx-auto text-center mb-20">
                   <p className="text-xl font-bold text-[#FF3811] mb-5">Service</p>
                   <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Service Area</h2>
                   <p>the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 w-[90%] md:w-full mx-auto">
           {service.map((service, index) => <ServiceCard
            key={index}
            service={service}>   
            </ServiceCard>
            )}
            </div>
            
        </div>
    );
};

export default ServiceArea;