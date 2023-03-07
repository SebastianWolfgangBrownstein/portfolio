
import TestimonialSlider from "./TestimonialSlider"

const Testimonials = () => {
  return (
    <section className="w-full bg-byzantine-darkest text-center px-6 py-36  xl:px-150 xl:py-36">
        <h2 className="text-3xl font-play mb-5 text-gold">Testimonials</h2>
        <p className="text-xl text-tan mb-16 xl:mb-16">People I&apos;ve worked with have said some nice things...</p>
        
        <TestimonialSlider />
        

    </section>
  )
}

export default Testimonials