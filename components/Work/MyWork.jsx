import Project from "./Project";

const MyWork = () => {
  return (
    <section className="w-full bg-oxfordblue text-center px-6 pt-20 pb-20 lg:px-72 lg:pt-10 lg:pb-44">
        <h2 className="text-3xl font-secular text-lightgray mb-10">My Recent Work</h2>
        <ul>
            <Project 
                name="ProtoVibes"
                description="A web tool for converting video files to raw audio. Achieved 10-15% faster conversions than alternatives while allowing the user full control over the file&apos;s metadata, output format, and audio quality."
                technologies={['nextjs', 'typescript', 'sass', 'python', 'mysql', 'jest', 'flask', 'ffmpeg']}
                imagePath="/images/ProtoVibesScreenshot.png"
                imageAlt="ProtoVibes"
            />
            {/* <li className="grid grid-cols-12">
                <div className="bg-midnight-100 col-start-1 col-end-8 row-start-1 row-end-[-1] relative h-96 w-full rounded-md overflow-hidden">
                    <Image className="opacity-60 transition-all duration-300 ease-linear hover:opacity-100" src="/images/ProtoVibesScreenshot.png" fill alt="ProtoVibes"/>
                </div>
                <div className="col-start-7 col-end-[-1] row-start-1 row-end-[-1] z-10 pt-7 pointer-events-none">
                    <div className="text-right">
                        <p className="text-sm text-mint my-2.5">Featured Project</p>
                        <h3 className="font-secular text-lightgray text-3xl mb-5">ProtoVibes</h3>
                    </div>
                    <div className="text-right bg-grayblue p-6 mb-5 rounded-md shadow-md">
                        <p className="text-lightgray">A web tool for converting video files to raw audio. Achieved 10-15% faster conversions than alternatives while allowing the user full control over the file&apos;s metadata, output format, and audio quality.</p>
                    </div>
                    <div className="">
                        <ul className="flex justify-end space-x-3 text-right">
                            <li className="border border-nextjs text-nextjs font-genos text-xl bg-overlay-400 rounded-full px-3 pb-1">NextJS</li>
                            <li className="border border-typescript text-typescript font-genos text-xl bg-overlay-400 rounded-full px-3">Typescript</li>
                            <li className="border border-sass text-sass font-genos text-xl bg-overlay-400 rounded-full px-3">Sass</li>
                            <li className="border border-python text-python font-genos text-xl bg-overlay-400 rounded-full px-3">Python</li>
                            <li className="border border-mysql text-mysql font-genos text-xl bg-overlay-400 rounded-full px-3">MySQL</li>
                            <li className="border border-jest text-jest font-genos text-xl bg-overlay-400 rounded-full px-3">Jest</li>
                            <li className="border border-flask text-flask font-genos text-xl bg-overlay-400 rounded-full px-3">Flask</li>
                            <li className="border border-ffmpeg text-ffmpeg font-genos text-xl bg-overlay-400 rounded-full px-3">ffmpeg</li>
                        </ul>
                    </div>
                </div>
            </li> */}
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