import SkillSection from './SkillSection'
import { 
    ArchitectIcon,
    CodeIcon,
    RollerIcon 
} from '@sebthedev/swanky-icons'

const Skills = () => {
  return (
    <section id="skills" className="relative w-full bg-gunmetal border-t border-gold text-center px-5 2xl:px-60 lg:py-36">
        <div className="lg:-mt-72 lg:grid lg:grid-cols-3 
        lg:border border-gold divide-y lg:divide-y-0 lg:divide-x divide-solid divide-inherit rounded-xl bg-gunmetal overflow-hidden">
            
            <SkillSection 
                icon={(
                    <ArchitectIcon 
                        width={48}
                        height={48}
                        fillColor="#05062d"
                        className="absolute left-4 top-3"
                    />
                )}
                title="System Architect"
                summary="I care about designing systems that are durable, evolvable, & scalable before ever writing a single line of code."
                specificsTitle="Things I enjoy designing:"
                specificsList="Microservices, Interfaces, Modules, Libraries, Packages"
                toolsTitle="Design Tools"
                tools={["Schemas", "User Flows", "Sequence Diagrams", "Whiteboards", "Sticky Notes", "Pen & Paper"]}
            />

            <SkillSection 
                icon={(
                    <CodeIcon 
                            width={48}
                            height={48}
                            fillColor="#05062d"
                            className="absolute left-4 top-3.5"
                        />
                )}
                title="Backend Developer"
                summary="I love building powerful tools and I value clean API design with an emphasis on usability, encapsulation, and security."
                specificsTitle="Frameworks & protocols I use:"
                specificsList="Node.js, Flask, REST, RPC, SSH, OpenAPI"
                toolsTitle="Tech & Dev Tools:"
                tools={["Typescript", "Python", "Express", "Nginx", "WebRTC", "Socket.io", 
                "Docker", "Kubernetes", "MongoDB", "MySQL", "Redis", "Jest", "Git", "S3"
            ]}
            />
            
            <SkillSection 
                icon={(
                    <RollerIcon 
                            width={48}
                            height={48}
                            fillColor="#05062d"
                            className="absolute left-4 top-3.5"
                        />
                )}
                title="Frontend Developer"
                summary="I&apos;m passionate about bringing complex tools to life through visually striking user interfaces that are equal parts elegant & intuitive."
                specificsTitle="Languages I speak:"
                specificsList="Javascript, HTML, CSS, Sass"
                toolsTitle="Tech & Dev Tools:"
                tools={["ReactJS", "NextJS", "RxJS", "Tailwind", "Bootstrap", "SVG", "VSCode", "Illustrator", "Photoshop", "AfterEffects", "Blender"]}
            />
        
        </div>
    </section>
  )
}

export default Skills
