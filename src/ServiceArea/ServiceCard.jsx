
const ServiceCard = ({ service }) => {
    let {img, title, price} = service
    return (
        <div>
            <div className="card h-full bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body ">
                    <h2 className="text-xl font-bold">{title}</h2>
                    <p className="text-[18px] font-bold text-red-600">Price: {price}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;