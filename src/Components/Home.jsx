import About from "../About/About";
import Contact from "../Contact/Contact";
import CoreFeatures from "../CoreFeatures/CoreFeatures";
import Customer from "../Customer/Customer";
import Header from "../Header/Header";
import ServiceArea from "../ServiceArea/ServiceArea";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <ServiceArea></ServiceArea>
            <Contact></Contact>
            <CoreFeatures></CoreFeatures>
            <Customer></Customer>
        </div>
    );
};

export default Home;