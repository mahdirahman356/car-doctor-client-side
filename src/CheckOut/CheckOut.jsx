import { useContext } from "react";
import checkeout from "../assets/images/checkout/checkout.png"
import { AuthContext } from "../Context/Context";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {

    let {user} = useContext(AuthContext)
    let servises = useLoaderData()
    let {price, img} = servises
    let handleCheckOut = (e) => {
        e.preventDefault()
        let from = e.target
        let name = from.name.value
        let price = from.price.value
        let date = from.date.value
        let number = from.number.value
        let email = from.email.value
        let userInfo = {
            customerName: name,
            customerNumber: number,
            img,
            date,
            ServicesPrice: price,
            customerEmail: email
        }
        console.log(userInfo)
        fetch("http://localhost:3000/order",{
            method: "POST",
            headers: {"content-type" : "application/json"},
            body: JSON.stringify(userInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }
    return (
        <div className="w-[95%] md:full mx-auto">
            <div className=" bg-cover bg-no-repeat rounded-xl mb-20" style={{ backgroundImage: `url(${checkeout})` }}>
                <div className="bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0)] px-7 md:px-20 py-10 md:py-32 rounded-xl">
                    <h1 className="text-2xl md:text-5xl font-bold text-white w-full h-full">Check Out</h1>
                </div>
            </div>

            <form onSubmit={handleCheckOut}  className="card-body bg-[#F3F3F3] p-6 md:p-10 lg:p-16 rounded-xl">
                     {/* input-row-1 */}
                        <div className="flex flex-col md:flex-row gap-4 mb-4">
                        <div className="md:w-1/2">
                        <input type="text"
                            placeholder="Your Name"
                            name='name'
                            className="input w-full"
                            required />
                        </div>

                        <div className="md:w-1/2">
                        <input type="text"
                            placeholder="Price"
                            name='price'
                            defaultValue={price}
                            className="input w-full"
                            required /> 
                        </div>
                        </div>
                         
                         {/* input-row-2 */}
                         <div className="flex flex-col md:flex-row gap-4 mb-4">
                        <div className="md:w-1/2">
                        <input type="date"
                            placeholder="Date"
                            name='date'
                            className="input w-full"
                            required />
                        </div>

                        <div className="md:w-1/2">
                        <input type="email"
                            placeholder="Email"
                            name='email'
                            defaultValue={user.email}
                            className="input w-full"
                            required /> 
                        </div>
                        </div>
                        

                       {/* input-row-3 */}
                        <div className="">
                        <input type="text"
                            placeholder="Phone Number"
                            name='number'
                            className="input w-full"
                            required /> 
                        </div>
                        <input className='btn mt-5 text-white bg-[#FF3811]' type="submit" value="Order Confirm" />
                    </form>
        </div>
    );
};

export default CheckOut;