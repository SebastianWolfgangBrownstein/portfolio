import Hero from "./Hero/Hero";
import About from './About/About';
import Skills from './Skills/Skills';
import MyWork from './Work/MyWork';
import MyStartups from './Startups/MyStartups';
import Testimonials from "./Testimonials/Testimonials";

export const HomePage = () => {
    return (
        <div>
            <Hero />
            <About />
            <Skills />
            <MyWork />
            <MyStartups />
            <Testimonials />
        </div>
    );
};

export default HomePage;
