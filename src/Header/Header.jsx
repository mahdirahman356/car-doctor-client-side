import slider1 from "../assets/images/banner/1.jpg"
import slider2 from "../assets/images/banner/2.jpg"
import slider3 from "../assets/images/banner/3.jpg"
import slider4 from "../assets/images/banner/4.jpg"
import slider5 from "../assets/images/banner/5.jpg"
import slider6 from "../assets/images/banner/6.jpg"
const Header = () => {
  return (
    <div className="carousel w-full">
      {/* slider-1 */}
      <div id="slide1" className="carousel-item relative w-full bg-cover bg-bottom md:rounded-3xl" style={{backgroundImage: `url(${slider5})`}}>
        <div className="absolute flex gap-3 bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0)] h-full md:rounded-3xl"> 
        <div className="text-white flex flex-col justify-center mb-14 md:mb-0">
     <div className="pl-3 md:pl-16 md:w-[60%]">
     <h1 className="text-5xl font-bold">Affordable Price For Car Servicing</h1>
      <p className="py-6">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
     <div>
     <button className="btn bg-[#FF3811] border-none text-white mr-3">Discover More</button>
     <button className="btn btn-outline border-white text-white">Latest Project</button>
     </div>
     </div>
    </div>
        </div>
        <div className="absolute flex justify-end gap-3 bottom-3 md:bottom-8 left-5 right-5">
          <a href="#slide6" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      {/* slider-2 */}
      <div id="slide2" className="carousel-item relative h-[80vh] w-full bg-cover bg-bottom md:rounded-3xl" style={{backgroundImage: `url(${slider1})`}}>
        <div className="absolute flex gap-3 bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0)] h-full md:rounded-3xl"> 
        <div className="text-white flex flex-col justify-center">
     <div className="pl-3 md:pl-16 md:w-[60%]">
     <h1 className="text-5xl font-bold">Affordable Price For Car Servicing</h1>
      <p className="py-6">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
     <div>
     <button className="btn bg-[#FF3811] border-none text-white mr-3">Discover More</button>
     <button className="btn btn-outline border-white text-white">Latest Project</button>
     </div>
     </div>
    </div>
        </div>
        <div className="absolute flex justify-end gap-3 bottom-8 left-5 right-5">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* slider-3 */}
      <div id="slide3" className="carousel-item relative h-[80vh] w-full bg-cover bg-bottom md:rounded-3xl" style={{backgroundImage: `url(${slider3})`}}>
        <div className="absolute flex gap-3 bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0)] h-full md:rounded-3xl"> 
        <div className="text-white flex flex-col justify-center">
     <div className="pl-3 md:pl-16 md:w-[60%]">
     <h1 className="text-5xl font-bold">Affordable Price For Car Servicing</h1>
      <p className="py-6">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
     <div>
     <button className="btn bg-[#FF3811] border-none text-white mr-3">Discover More</button>
     <button className="btn btn-outline border-white text-white">Latest Project</button>
     </div>
     </div>
    </div>
        </div>
        <div className="absolute flex justify-end gap-3 bottom-8 left-5 right-5">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* slider-4 */}
      <div id="slide4" className="carousel-item relative h-[80vh] w-full bg-cover bg-bottom md:rounded-3xl" style={{backgroundImage: `url(${slider4})`}}>
        <div className="absolute flex gap-3 bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0)] h-full md:rounded-3xl"> 
        <div className="text-white flex flex-col justify-center">
     <div className="pl-3 md:pl-16 md:w-[60%]">
     <h1 className="text-5xl font-bold">Affordable Price For Car Servicing</h1>
      <p className="py-6">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
     <div>
     <button className="btn bg-[#FF3811] border-none text-white mr-3">Discover More</button>
     <button className="btn btn-outline border-white text-white">Latest Project</button>
     </div>
     </div>
    </div>
        </div>
        <div className="absolute flex justify-end gap-3 bottom-8 left-5 right-5">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide5" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* slider-5 */}
      <div id="slide5" className="carousel-item relative h-[80vh] w-full bg-cover bg-bottom md:rounded-3xl" style={{backgroundImage: `url(${slider2})`}}>
        <div className="absolute flex gap-3 bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0)] h-full md:rounded-3xl"> 
        <div className="text-white flex flex-col justify-center">
     <div className="pl-3 md:pl-16 md:w-[60%]">
     <h1 className="text-5xl font-bold">Affordable Price For Car Servicing</h1>
      <p className="py-6">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
     <div>
     <button className="btn bg-[#FF3811] border-none text-white mr-3">Discover More</button>
     <button className="btn btn-outline border-white text-white">Latest Project</button>
     </div>
     </div>
    </div>
        </div>
        <div className="absolute flex justify-end gap-3 bottom-8 left-5 right-5">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide6" className="btn btn-circle">❯</a>
        </div>
      </div>
      {/* slider-6 */}
      <div id="slide6" className="carousel-item relative h-[80vh] w-full bg-cover bg-bottom md:rounded-3xl" style={{backgroundImage: `url(${slider6})`}}>
        <div className="absolute flex gap-3 bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0)] h-full md:rounded-3xl"> 
        <div className="text-white flex flex-col justify-center">
     <div className="pl-3 md:pl-16 md:w-[60%]">
     <h1 className="text-5xl font-bold">Affordable Price For Car Servicing</h1>
      <p className="py-6">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
     <div>
     <button className="btn bg-[#FF3811] border-none text-white mr-3">Discover More</button>
     <button className="btn btn-outline border-white text-white">Latest Project</button>
     </div>
     </div>
    </div>
        </div>
        <div className="absolute flex justify-end gap-3 bottom-8 left-5 right-5">
          <a href="#slide5" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>

    </div>
  );
};

export default Header;