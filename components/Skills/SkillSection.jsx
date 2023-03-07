const SkillSection = ({
    icon,
    title,
    summary,
    specificsTitle,
    specificsList,
    toolsTitle,
    tools
}) => {
  return (
    <div className="py-20 px-5 lg:py-16 lg:px-8">

        <div className="flex justify-center mb-6">
            <div className="relative w-20 h-20 border border-gold rounded-full bg-byzantine">
                {icon}
            </div>
        </div>
        
        <h2 className="text-2xl font-play mb-7 lg:mb-5 text-gold">{title}</h2>
        <p className="mb-16 lg:mb-10 text-lg text-ivory">{summary}</p>

        <div className="mb-14 lg:mb-10">
            <h3 className="mb-2 text-byzantine">{specificsTitle}</h3>
            <p className="text-ivory">
                {specificsList}
            </p>
        </div>

        <div>
            <h3 className="mb-2 text-byzantine">{toolsTitle}</h3>
            <ul className="text-ivory">
                {tools.map((tool, i) => (<li key={i} className="mb-1">{tool}</li>))}
            </ul>
        </div>

    </div>
  )
}

export default SkillSection
