import Hero from "./Hero";
import About from './About';
import Skills from './Skills';
import MyWork from './MyWork';
import MyStartups from './MyStartups';
import Testimonials from "./Testimonials";

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
