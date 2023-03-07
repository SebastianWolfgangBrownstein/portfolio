import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Testimonial from "./Testimonial"


const TestimonialSlider = () => {
    
    return (
        <Carousel
            showArrows={false}
            showStatus={false}
            showThumbs={false}
        >
            <Testimonial 
                author="Chuck Mudarski"
                authorTitle="Head of Marketing, CamBling"
                quote="During my time working under and with Sebastian, I not only found a leader worth following, but a mentor who pushed me to grow in my role as a graphic designer and branding specialist. He tasked me with things I believed to be beyond my ability, let alone my station in the company, but he believed I could do it. It was his assurance that pushed me over the wall and led me to success if I couldn&apos;t find it myself. To operate alongside Seb is to be his teammate. A teammate that will give you every tool you need to succeed and show you how to use them."
                imagePath="/images/chuck_bitmoji.png"
            />
            <Testimonial 
                author="Milosh Spasik"
                authorTitle="Frontend Developer & UI/UX Designer, ChainStarters"
                quote="Sebastian is a highly professional, strategic, engaged, hard working senior web & app developer. I owe him a huge THANK YOU for showing me and teaching me the first steps in development and coding. He is a greate teacher with a huge patience tolerance. Thank you!"
                imagePath="/images/milosh_profile.jpg"
            />
        </Carousel>
    )
}

export default TestimonialSlider;