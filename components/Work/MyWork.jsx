import Project from "./Project";

const MyWork = () => {
  return (
    <section className="w-full bg-oxfordblue text-center px-72 pt-10 pb-44">
        <h2 className="text-3xl font-secular text-lightgray mb-10">My Recent Work</h2>
        <ul>
            <Project 
                name="ProtoVibes"
                description="A web tool for converting video files to raw audio. Achieved 10-15% faster conversions than alternatives while allowing the user full control over the file&apos;s metadata, output format, and audio quality."
                technologies={['nextjs', 'typescript', 'sass', 'python', 'mysql', 'jest', 'flask', 'ffmpeg']}
                imagePath="/images/ProtoVibesScreenshot.png"
                imageAlt="ProtoVibes"
            />
        </ul>
        
        {/* <div className="border border-mint grid grid-cols-2">
            <div>
                <div>
                    <span>Featured Project</span>
                    <h3>ShadowBox</h3>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni qui minus cumque impedit enim dignissimos repellat quidem excepturi, minima nobis, reprehenderit hic nam alias? Incidunt quibusdam saepe aspernatur iste ea.</p>
                </div>
                <div>
                    <ul>
                        <li>NextJS</li>
                        <li>Typescript</li>
                        <li>Python</li>
                        <li>Flask</li>
                        <li>Sass</li>
                        <li>MySQL</li>
                        <li>Jest</li>
                        <li>ffmpeg</li>
                    </ul>
                </div>
            </div>
            <div>

            </div>
        </div>
        <div className="border border-mint grid grid-cols-2">
            <div>

            </div>
            <div>
                <div>
                    <span>Featured Project</span>
                    <h3>Divine Mud</h3>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni qui minus cumque impedit enim dignissimos repellat quidem excepturi, minima nobis, reprehenderit hic nam alias? Incidunt quibusdam saepe aspernatur iste ea.</p>
                </div>
                <div>
                    <ul>
                        <li>NextJS</li>
                        <li>Typescript</li>
                        <li>Python</li>
                        <li>Flask</li>
                        <li>Sass</li>
                        <li>MySQL</li>
                        <li>Jest</li>
                        <li>ffmpeg</li>
                    </ul>
                </div>
            </div>
        </div> */}
    </section>
  )
}

export default MyWork;