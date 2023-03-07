import Testimonial from "./Testimonial"

const Testimonials = () => {
  return (
    <section className="w-full bg-purplenight-darkest text-center px-6 py-36  xl:px-150 xl:py-36">
        <h2 className="text-3xl font-play mb-5 text-gold">Testimonials</h2>
        <p className="text-xl text-tan mb-16 xl:mb-16">People I&apos;ve worked with have said some nice things...</p>
        
        <div className="">
            <Testimonial 
              author="Chuck Mudarski"
              authorTitle="Head of Marketing, CamBling"
              quote="During my time working under and with Sebastian, I not only found a leader worth following, but a mentor who pushed me to grow in my role as a graphic designer and branding specialist. He tasked me with things I believed to be beyond my ability, let alone my station in the company, but he believed I could do it. It was his assurance that pushed me over the wall and led me to success if I couldn&apos;t find it myself. To operate alongside Seb is to be his teammate. A teammate that will give you every tool you need to succeed and show you how to use them."
              imagePath="/images/chuck_bitmoji.png"
            />
        </div>

    </section>
  )
}

export default Testimonials