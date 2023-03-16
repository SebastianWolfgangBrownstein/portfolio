import Image from "next/image";

const MyWork = () => {
  return (
    <section id="work" className="bg-byzantine-darkest w-full text-center px-6 pt-20 pb-20 lg:px-72 lg:pt-28 lg:pb-44">
        <h1 className="text-3xl font-play text-gold mb-10">My Recent Work</h1>
        <ul>
          <li id="project" className="grid grid-cols-12">
              <div className="bg-oxfordblue lg:bg-byzantine col-start-1 col-end-13 lg:col-start-1 lg:col-end-8 row-start-1 row-end-[-1] relative h-96 w-full rounded-md overflow-hidden">
                  <Image className="opacity-10 lg:opacity-80 transition-all duration-300 ease-linear lg:hover:opacity-100" src="/images/ProtoVibesScreenshot.png" fill alt="Project screenshot for ProtoVibes"/>
              </div>
              <div className="col-start-1 col-end-13 lg:col-start-7 lg:col-end-[-1] row-start-1 row-end-[-1] z-10 pt-7 pointer-events-none">
                  <div className="text-left lg:text-right pl-4 lg:pl-0">
                      <small className="block text-sm text-tan my-1 lg:my-2.5">Featured Project</small>
                      <h2 className="font-play text-gold text-3xl mb-2 lg:mb-5">ProtoVibes</h2>
                  </div>
                  <div className="text-left lg:text-right lg:bg-gunmetal p-6 mb-5 rounded-md lg:shadow-md">
                      <p className="text-tan">A web tool for converting video files to raw audio. Achieved 10-15% faster conversions than alternatives while allowing the user full control over the file&apos;s metadata, output format, and audio quality.</p>
                  </div>
                  <div className="">
                      <ul className="flex flex-wrap lg:flex-nowrap lg:justify-end space-x-3 text-right">
                          <li className={`
                                  border border-nextjs text-nextjs font-genos text-xl
                                  bg-overlay-400 rounded-full px-3 pb-1 mb-4`}>Nextjs</li>
                          <li className={`
                                  border border-typescript text-typescript font-genos text-xl
                                  bg-overlay-400 rounded-full px-3 pb-1 mb-4`}>Typescript</li>
                          <li className={`
                                  border border-sass text-sass font-genos text-xl
                                  bg-overlay-400 rounded-full px-3 pb-1 mb-4`}>Sass</li>
                          <li className={`
                                  border border-python text-python font-genos text-xl
                                  bg-overlay-400 rounded-full px-3 pb-1 mb-4`}>Python</li>
                          <li className={`
                                  border border-mysql text-mysql font-genos text-xl
                                  bg-overlay-400 rounded-full px-3 pb-1 mb-4`}>MySQL</li>
                          <li className={`
                                  border border-jest text-jest font-genos text-xl
                                  bg-overlay-400 rounded-full px-3 pb-1 mb-4`}>Jest</li>
                          <li className={`
                                  border border-flask text-flask font-genos text-xl
                                  bg-overlay-400 rounded-full px-3 pb-1 mb-4`}>Flask</li>
                          <li className={`
                                  border border-ffmpeg text-ffmpeg font-genos text-xl
                                  bg-overlay-400 rounded-full px-3 pb-1 mb-4`}>ffmpeg</li>
                          
                         
                      </ul>
                  </div>
              </div>
          </li>
        </ul>
    </section>
  )
}

export default MyWork;