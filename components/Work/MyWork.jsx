import Image from "next/image";

const MyWork = () => {
  return (
    <section id="work" className="
      bg-gunmetal-dark w-full text-center px-6 pt-20 pb-20 
        lg:px-28 lg:pt-28 lg:pb-44 lg:bg-byzantine-darkest 
        2xl:px-64
      ">
        <div className="
          px-0 mb-16 
          md:px-10
          lg:px-10
          xl:px-20
          2xl:px-96 xl:mb-14
        ">
          <h1 className="text-3xl font-play text-gold mb-5 lg:mb-10">Recent Work</h1>
          <p className="
            text-tan-200 text-md tracking-wide leading-relaxed
            xs:text-lg xs:leading-relaxed
            sm:text-lg sm:leading-loose  
            lg:text-xl lg:leading-relaxed
          ">My spark comes from fixing the broken, revitalizing the antiquated, and devising the tools that empower people to create.</p>
        </div>
        
        <ul>
          <li id="project" className="grid grid-cols-12">
              <div className="
                  relative h-96 w-full col-start-1 col-end-13 row-start-1 row-end-[-1] bg-gunmetal-dark rounded-md overflow-hidden
                  lg:col-start-1 lg:col-end-8 lg:bg-byzantine  
              ">
                  <Image className="
                    opacity-[0.4] transition-all duration-300 ease-linear object-cover blur-lg
                    lg:opacity-80 lg:blur-none lg:hover:opacity-100
                  " src="/images/ProtoVibesScreenshot.png" alt="Project screenshot for ProtoVibes" 
                    fill
                    sizes="(max-width: 1024px) 50vw,
                            33vw
                            "
                  />
              </div>
              <div className="
                col-start-1 col-end-13 lg:col-start-7 lg:col-end-[-1] row-start-1 row-end-[-1] z-10 pt-7 pointer-events-none
              ">
                  <div className="
                    text-left pl-4 
                    lg:text-right lg:pl-0
                  ">
                      <small className="block text-sm text-tan-200 my-1 lg:my-2.5">Featured Project</small>
                      <h2 className="font-play text-gold text-3xl mb-2 lg:mb-5">ProtoVibes</h2>
                  </div>
                  <div className="
                    text-left p-4 mb-5 rounded-md
                    lg:text-right lg:bg-gunmetal lg:shadow-lg">
                      <p className="text-tan-200 xs:text-lg">A web tool for converting video files to raw audio. Achieved 10-15% faster conversions than alternatives while allowing the user full control over the file&apos;s metadata, output format, and audio quality.</p>
                  </div>
                  <div className="px-4 md:px-10 lg:px-0">
                      <ul className="
                        flex flex-wrap text-right
                        lg:flex-nowrap lg:justify-end">
                          <li className={`
                                  border border-nextjs text-nextjs font-genos text-xl
                                  bg-overlay-400 rounded-full px-3 pb-1 mb-4 mr-3 lg:mr-0 lg:ml-3`}>Nextjs</li>
                          <li className={`
                                  border border-typescript text-typescript font-genos text-xl
                                  bg-overlay-400 rounded-full px-3 pb-1 mb-4 mr-3 lg:mr-0 lg:ml-3`}>Typescript</li>
                          <li className={`
                                  border border-sass text-sass font-genos text-xl
                                  bg-overlay-400 rounded-full px-3 pb-1 mb-4 mr-3 lg:mr-0 lg:ml-3`}>Sass</li>
                          <li className={`
                                  border border-python text-python font-genos text-xl
                                  bg-overlay-400 rounded-full px-3 pb-1 mb-4 mr-3 lg:mr-0 lg:ml-3`}>Python</li>
                          <li className={`
                                  border border-mysql text-mysql font-genos text-xl
                                  bg-overlay-400 rounded-full px-3 pb-1 mb-4 mr-3 lg:mr-0 lg:ml-3`}>MySQL</li>
                          <li className={`
                                  border border-jest text-jest font-genos text-xl
                                  bg-overlay-400 rounded-full px-3 pb-1 mb-4 mr-3 lg:mr-0 lg:ml-3`}>Jest</li>
                          <li className={`
                                  border border-flask text-flask font-genos text-xl
                                  bg-overlay-400 rounded-full px-3 pb-1 mb-4 mr-3 lg:mr-0 lg:ml-3`}>Flask</li>
                          <li className={`
                                  border border-ffmpeg text-ffmpeg font-genos text-xl
                                  bg-overlay-400 rounded-full px-3 pb-1 mb-4 mr-3 lg:mr-0 lg:ml-3`}>ffmpeg</li>
                          
                         
                      </ul>
                  </div>
              </div>
          </li>
        </ul>
    </section>
  )
}

export default MyWork;