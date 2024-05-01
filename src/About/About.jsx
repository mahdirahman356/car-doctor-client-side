import parson from '../assets/images/about_us/person.jpg'
import parts from "../assets/images/about_us/parts.jpg"
const About = () => {
    return (
        <div className="hero my-20 ">
            <div className="hero-content flex-col md:flex-row">
            <div className='relative md:w-[50%] mb-32'>
            <img src={parson} className="w-[80%] rounded-lg" />
            <img src={parts} className="w-[70%] right-4 rounded-lg  absolute top-1/2 border-[10px] border-white" />
            </div>
                <div className='md:w-[50%] space-y-5'>
                    <p className='text-xl font-bold text-[#FF3811]'>About Us</p>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                    <p>The majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                    <button className="btn bg-[#FF3811] text-white border-none">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;