import { useContext, useEffect, useState } from "react";
import ordersImg from "../assets/images/order/order.png"
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/Context";
import axios from "axios";

const MyOrder = () => {
    let [order, setOrder] = useState([])
    let {user} = useContext(AuthContext)
    let url = `http://localhost:5000/orders?email=${user.email}&sort=1`
    useEffect(() => {
        axios.get(url, {withCredentials:true})
        .then(res => {
            setOrder(res.data)
        })
    }, [url])

    let handleDelete = (id) => {
        console.log(id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/orders/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });
                           let deleleOrder = order.filter(order => order._id !== id)
                           setOrder(deleleOrder)
                        }
                    })
            }
        });
    }
    return (
        <div className="w-[95%] md:full mx-auto">
            <div className=" bg-cover bg-no-repeat rounded-xl mb-20" style={{ backgroundImage: `url(${ordersImg})` }}>
                <div className="bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0)] px-7 md:px-20 py-10 md:py-32 rounded-xl">
                    <h1 className="text-2xl md:text-5xl font-bold text-white w-full h-full">Manage All Orders</h1>
                </div>
            </div>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>User ID</th>
                                <th>Price</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {order.map((order, index) => <tr key={index}>
                                <th>
                                    <button onClick={() => handleDelete(order._id)} className="btn btn-circle btn-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={order.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{order.customerName}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {order.customerEmail}
                                </td>
                                <td>{order.ServicesPrice}$</td>
                                <th>
                                  <Link to={`/ServiceDetails/${order.serviceId}`}><button className="btn btn-ghost btn-xs">details</button></Link>  
                                </th>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}
export default MyOrder      