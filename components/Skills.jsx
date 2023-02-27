import { 
    ArchitectIcon,
    CodeIcon,
    RollerIcon 
} from '@sebthedev/swanky-icons'

const Skills = () => {
  return (
    <section className="relative w-full bg-oxfordblue text-center px-60 py-36">
        <div className="-mt-72 grid grid-cols-3 border border-midnight-100 divide-x divide-solid divide-inherit rounded-xl bg-oxfordblue ">
            <div className="py-16 px-8">
                <div className="flex justify-center mb-6">
                    <div className="relative w-20 h-20 border border-mint rounded-full bg-mint">
                        <ArchitectIcon 
                            width={48}
                            height={48}
                            fillColor="#05062d"
                            className="absolute left-4 top-3"
                        />
                    </div>
                </div>
                
                <h2 className="text-2xl font-secular mb-5 text-ivory">System Architect</h2>
                <p className="mb-10 text-lg text-ivory">I care about designing systems that are durable, evolvable, and scalable before ever writing a single line of code. </p>

                <div className="mb-10">
                    <h3 className="mb-2 text-amethyst">Things I enjoy designing:</h3>
                    <p className="text-ivory">Microservices, Interfaces, Modules, Libraries, Packages</p>
                </div>

                <div>
                    <h3 className="mb-2 text-amethyst">Design Tools:</h3>
                    <ul className="text-ivory">
                        <li className="mb-1">Schemas</li>
                        <li className="mb-1">User Flows</li>
                        <li className="mb-1">Sequence Diagrams</li>
                        <li className="mb-1">Whiteboards</li>
                        <li className="mb-1">Sticky Notes</li>
                        <li className="mb-1">Pen & Paper</li>
                    </ul>
                </div>
            </div>
            <div className="py-16 px-8">
                <div className="flex justify-center mb-6">
                    <div className="relative w-20 h-20 border border-mint rounded-full bg-mint">
                        <CodeIcon 
                            width={48}
                            height={48}
                            fillColor="#05062d"
                            className="absolute left-4 top-3.5"
                        />
                    </div>
                </div>
                <h2 className="text-2xl font-secular mb-5 text-ivory">Backend Developer</h2>
                <p className="mb-10 text-lg text-ivory">I love building powerful tools and I value clean API design with an emphasis on usability, encapsulation, and security.</p>

                <div className="mb-10">
                    <h3 className="mb-2 text-amethyst">Frameworks & protocols I use:</h3>
                    <p className="text-ivory">Node.js, Flask, REST, RPC, SSH, OpenAPI</p>
                </div>

                <div>
                    <h3 className="mb-2 text-amethyst">Tech & Dev Tools:</h3>
                    <ul className="text-ivory">
                        <li className="mb-1">Typescript</li>
                        <li className="mb-1">Python</li>
                        <li className="mb-1">Express</li>
                        <li className="mb-1">Nginx</li>
                        <li className="mb-1">WebRTC</li>
                        <li className="mb-1">Socket.io</li>
                        <li className="mb-1">Docker</li>
                        <li className="mb-1">Kubernetes</li>
                        <li className="mb-1">MongoDB</li>
                        <li className="mb-1">MySQL</li>
                        <li className="mb-1">Redis</li>
                        <li className="mb-1">Jest</li>
                        <li className="mb-1">Git</li>
                        <li className="mb-1">S3</li>
                    </ul>
                </div>
            </div>
            <div className="py-16 px-8">
                <div className="flex justify-center mb-6">
                    <div className="relative w-20 h-20 border border-mint rounded-full bg-mint">
                        <RollerIcon 
                            width={48}
                            height={48}
                            fillColor="#05062d"
                            className="absolute left-4 top-3.5"
                        />
                    </div>
                </div>
                
                <h2 className="text-2xl font-secular mb-5 text-ivory">Frontend Developer</h2>
                <p className="mb-10 text-lg text-ivory">I&apos;m passionate about bringing complex tools to life through visually striking user interfaces that are equal parts elegant & intuitive.</p>

                <div className="mb-10">
                    <h3 className="mb-2 text-amethyst">Languages I speak:</h3>
                    <p className="text-ivory">Javascript, HTML, CSS, Sass</p>
                </div>

                <div>
                    <h3 className="mb-2 text-amethyst">Tech & Dev Tools:</h3>
                    <ul className="text-ivory">
                        <li className="mb-1">ReactJS</li>
                        <li className="mb-1">NextJS</li>
                        <li className="mb-1">RxJS</li>
                        <li className="mb-1">Tailwind</li>
                        <li className="mb-1">Bootstrap</li>
                        <li className="mb-1">SVG</li>
                        <li className="mb-1">VS Code</li>
                    </ul>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Skills
