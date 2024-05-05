import { Link } from 'react-router-dom';
import loginImg from '../assets/images/login/login.svg';
import { useContext } from 'react';
import { AuthContext } from '../Context/Context';
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import Swal from 'sweetalert2';

const SignUp = () => {
    let { creatAccount, continueWithGoogle } = useContext(AuthContext)
    let handleSignup = (e) => {
        e.preventDefault()
        let from = e.target
        let email = from.email.value
        let passward = from.passward.value
        console.log(email, passward)
        if(passward.length < 6){
            Swal.fire({
                title: 'Error!',
                text: 'Your password must be in 6 character',
                icon: 'error',
                confirmButtonText: 'Close'
              })
              return
        }
        creatAccount(email, passward)
            .then(result => {
                console.log(result.user)
                from.reset()
                Swal.fire({
                    title: 'Success',
                    text: 'Your account created successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            })
            .catch(error => {
                console.log(error.message)
                Swal.fire({
                    title: 'Error!',
                    text: 'You already have this account',
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
                        <p className='text-2xl font-bold text-center mt-10'>Create Account</p>
                    </div>
                    <form onSubmit={handleSignup} className="card-body">
                        <span className="label-text font-semibold">Name</span>
                        <input type="text"
                            placeholder="Your Name"
                            name='name'
                            className="input input-bordered" />



                        <span className="label-text font-semibold">Email</span>
                        <input type="email"
                            placeholder="email"
                            name='email'
                            className="input input-bordered"
                            required />


                        <span className="label-text font-semibold">Password</span>
                        <input type="password"
                            placeholder="password"
                            name='passward'
                            className="input input-bordered"
                            required />

                        <input className='btn mt-5 text-white bg-[#FF3811]' type="submit" value="Login" />
                    </form>
                    <p className='text-center text-gray-500 mb-3'>Or Login with</p>
                    <div className='flex justify-center gap-4 mb-3'>
                        <button onClick={handleGoogle} className='btn  bg-gray-200 border-none rounded-full'><FcGoogle className='text-[20px]' /></button>
                        <button className='btn  bg-gray-200 border-none rounded-full'><FaFacebookF className='text-[20px] text-[#3B5998]' /></button>
                    </div>
                    <p className='text-center mb-7'>Already have an account? <Link to="/login" className='text-[#FF3811] underline'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;