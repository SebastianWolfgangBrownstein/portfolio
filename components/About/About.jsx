import DesktopNavigation from "../Navigation/DesktopNavigation"
import useMediaQuery from "../../hooks/useMediaQuery"

const About = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <section id="about" className="
      bg-gunmetal-dark text-center
      relative flex flex-col justify-center 
      w-full px-5 py-40  
      sm:px-14
      lg:px-36 lg:py-60 lg:pb-72
      xl:px-60 xl:pb-72
      2xl:px-96 2xl:py-40 2xl:pb-56"
    >
        {isDesktop ? <DesktopNavigation /> : <></> }

        <h2 className="
          text-3xl text-gold font-play mb-10
          lg:text-4xl lg:mb-8
          xl:mb-8
          2xl:mb-10"
        >Hey, I&apos;m Seb. Nice to meet you.</h2>

        <p className="
          text-tan text-md tracking-wide mb-10 leading-relaxed
          sm:text-lg sm:leading-loose
          lg:text-xl lg:leading-relaxed
          xl:mb-10 xl:leading-relaxed
          2xl:leading-relaxed 2xl:mb-7">
          I&apos;m a creative technologist with over 7 years of entrepreneurial full-stack development experience.
            
        </p>
        <p className="
          text-tan text-md tracking-wide mb-10 leading-relaxed
          sm:text-lg sm:leading-loose
          lg:text-xl lg:leading-relaxed
          xl:mb-10 xl:leading-relaxed
          2xl:leading-relaxed 2xl:mb-7">
          After studying Aerospace Engineering in college with Computer Science as my minor, I decided that I&apos;d 
          have a more tangible and immediate impact on the world by pursuing software as a career. So, one year short of graduation, 
          I dropped out to work on a startup full-time. Since then, I&apos;ve 
          founded 4 tech startups and worked on countless independent projects.
        </p>
        <p className="
          text-tan text-md tracking-wide leading-relaxed
          sm:text-lg sm:leading-loose
          lg:text-xl lg:leading-relaxed
          xl:leading-relaxed 
          2xl:mb-10">
          I&apos;m a curious thinker, lighthearted adventurer & enthusiastic 
          mentor. In my spare time you&apos;ll find me learning new skills, building 
          custom motorcycles & curating fine art.
        </p>
        {/* <p className="text-tan text-md sm:text-lg lg:text-xl 2xl:mb-10">
          
        </p> */}
    </section>
  )
}

export default About