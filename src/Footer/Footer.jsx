import logo from "../assets/images/logo/logoW.png"

const Footer = () => {
    return (
        <div className="bg-[#151515]">
        <footer className="footer p-10 text-base-content md:max-w-[90%] lg:max-w-[80%] mx-auto">
  <aside className="text-white">
    <img src={logo} alt="" />
    <p className="">Edwin Diaz is a software and <br /> web technologies engineer, a life <br /> coach trainer who is also a serial </p>
  </aside> 
  <nav className="text-white">
    <h6 className="footer-title">About</h6> 
    <a className="link link-hover mt-5">Home</a>
    <a className="link link-hover">Service</a>
    <a className="link link-hover">Content</a>
  </nav> 
  <nav className="text-white">
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover mt-5">Why Car Doctor</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">About</a>
  </nav> 
  <nav className="text-white">
    <h6 className="footer-title">Support</h6> 
    <a className="link link-hover mt-5">Support Center</a>
    <a className="link link-hover">Feedback</a>
    <a className="link link-hover">Accesbility</a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;