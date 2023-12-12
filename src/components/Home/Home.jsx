import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Experience from "../Experience/Experience";
import Footer from "../Footer/Footer";
import Project from "../Projects/Project";
import MySkill from "../Skill/MySkill";


const Home = () => {
    return (
        <div>
            
            <Banner/>
            <Experience/>
            <About/>
            <Project/>
            <MySkill/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;