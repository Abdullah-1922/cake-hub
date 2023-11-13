import AboutUs from "../../Components/AboutUs";
import Header from "../../Components/Header";
import HomeCart from "../../Components/HomeCart";
import OurCake from "../../Components/OurCake";


const Home = () => {
    return (
        <div>
        <Header></Header>
        <HomeCart></HomeCart>
        <OurCake></OurCake>
        <AboutUs></AboutUs>
        </div>
    );
};

export default Home;