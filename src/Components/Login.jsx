import { Link } from 'react-router-dom';
import loginImg from '../assets/images/login/login.svg';
import { useContext } from 'react';
import { AuthContext } from '../Context/Context';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import Swal from 'sweetalert2';
import axios from 'axios';
const Login = () => {
    let { loginAccount, continueWithGoogle } = useContext(AuthContext)
    let handleLogin = (e) => {
        e.preventDefault()
        let from = e.target
        let email = from.email.value
        let password = from.password.value
        console.log(email, password)
        loginAccount(email, password)
            .then(result => {
                console.log(result.user)
                let user = {email}
                Swal.fire({
                    title: 'Success',
                    text: 'User has successfully logged in',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
             axios.post("http://localhost:5000/jwt", user, {withCredentials: true})  
             .then(data => {
                console.log(data.data)
             })

            })
            .catch(error => {
                console.log(error.message)
                Swal.fire({
                    title: 'Error!',
                    text: 'Your account is not available',
                    icon: 'error',
                    confirmButtonText: 'Close'
                  })
            })
    }

    let handleGoogle = () => {
        continueWithGoogle()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div className="hero my-6 md:my-20">
            <div className="hero-content  flex flex-col lg:flex-row justify-between w-full">
                <div className="text-center">
                    <img src={loginImg} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm border">
                    <div>
                        <p className='text-2xl font-bold text-center mt-10'>Login</p>
                    </div>
                    <form onSubmit={handleLogin} className="card-body">
                        <span className="label-text font-semibold">Email</span>
                        <input type="email"
                            placeholder="email"
                            name='email'
                            className="input input-bordered"
                            required />


                        <span className="label-text font-semibold">Password</span>
                        <input type="password"
                            placeholder="password"
                            name='password'
                            className="input input-bordered"
                            required />

                        <input className='btn mt-5 text-white bg-[#FF3811]' type="submit" value="Login" />
                    </form>
                    <p className='text-center text-gray-500 mb-3'>Or Login with</p>
                    <div className='flex justify-center gap-4 mb-3'>
                        <button onClick={handleGoogle} className='btn  bg-gray-200 border-none rounded-full'><FcGoogle className='text-[20px]' /></button>
                        <button className='btn  bg-gray-200 border-none rounded-full'><FaFacebookF className='text-[20px] text-[#3B5998]' /></button>
                    </div>
                    <p className='text-center text-gray-500 mb-7'>Dont have an account? <Link to="/signup" className='text-[#FF3811] underline'>Sign up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;