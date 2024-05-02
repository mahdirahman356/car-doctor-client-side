import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg"
import { useContext } from "react";
import { AuthContext } from "../Context/Context";
import userImg from "../assets/images/user/user.avif"
import { VscSignOut } from "react-icons/vsc";
import Swal from "sweetalert2";
const Navbar = () => {
  let { user, signOutAccount } = useContext(AuthContext)

  let handleSignOut = () => {
    signOutAccount()
    .then(() => {
      Swal.fire({
        title: '',
        text: 'Your account has been signed out',
        icon: 'info',
        confirmButtonText: 'Cool'
      })
    })
    .catch(error => {
      console.log(error.message)
    })
  }
  return (
    <div className="navbar bg-base-100 mb-5">
      <div className="navbar-start w-[30%]">
        <div className="dropdown">
          <div tabIndex={0} role="button" className=" mr-2 lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Item 1</a></li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <img className="w-[60px] md:w-[80px]" src={logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex items-center">
        <ul className="menu menu-horizontal px-1 gap-4">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/login">Login</NavLink>
         { user && <NavLink to="/order">My Order</NavLink>}
        </ul>
      </div>
      <div className="navbar-end flex-1">
        {
          user &&
          <div className="w-10 h-10 mr-3 rounded-full border">
            <div className="dropdown dropdown-hover dropdown-end">
              <div tabIndex={0} role="button" className=""><img className="rounded-full" src={user.photoURL ? user.photoURL : userImg} alt="" /></div>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-2xl  rounded-box w-52 bg-gray-100">
                <li className={!user.displayName && "hidden"}><a>{user.displayName && user.displayName}</a></li>
                <li><a onClick={handleSignOut}>Sign Out <VscSignOut className="text-[20px]"/></a></li>
              </ul>
            </div>
          </div>
        }
        <button className="btn btn-outline border-[#FF3811] text-[#FF3811]">Latest Project</button>
      </div>
    </div>
  );
};

export default Navbar;