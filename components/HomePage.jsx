import Hero from "./Hero/Hero";
import About from './About/About';
import Skills from './Skills/Skills';
import MyWork from './Work/MyWork';
import MyStartups from './Startups/MyStartups';
import Testimonials from "./Testimonials/Testimonials";
import Footer from './Layout/Footer'

export const HomePage = () => {
    return (
        <div>
            <Hero />
            <About />
            <Skills />
            <MyWork />
            <MyStartups />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default HomePage;
