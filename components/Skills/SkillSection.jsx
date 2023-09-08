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
        
        <h1 className="text-2xl font-play mb-7 lg:mb-5 text-gold">{title}</h1>
        <p className="mb-16 lg:mb-10 text-lg text-tan-150">{summary}</p>

        <div className="mb-14 lg:mb-10">
            <h2 className="mb-2 text-byzantine">{specificsTitle}</h2>
            <p className="text-tan-150">
                {specificsList}
            </p>
        </div>

        <div>
            <h3 className="mb-2 text-byzantine">{toolsTitle}</h3>
            <ul className="text-tan-150">
                {tools.map((tool, i) => (<li key={i} className="mb-1">{tool}</li>))}
            </ul>
        </div>

    </div>
  )
}

export default SkillSection
