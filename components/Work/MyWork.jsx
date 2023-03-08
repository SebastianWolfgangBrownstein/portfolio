import Project from "./Project";

const MyWork = () => {
  return (
    <section className="bg-byzantine-darkest w-full text-center px-6 pt-20 pb-20 lg:px-72 lg:pt-28 lg:pb-44">
        <h1 className="text-3xl font-play text-gold mb-10">My Recent Work</h1>
        <ul>
            <Project 
                name="ProtoVibes"
                description="A web tool for converting video files to raw audio. Achieved 10-15% faster conversions than alternatives while allowing the user full control over the file&apos;s metadata, output format, and audio quality."
                technologies={['nextjs', 'typescript', 'sass', 'python', 'mysql', 'jest', 'flask', 'ffmpeg']}
                imagePath="/images/ProtoVibesScreenshot.png"
                imageAlt="ProtoVibes"
            />
        </ul>
    </section>
  )
}

export default MyWork;