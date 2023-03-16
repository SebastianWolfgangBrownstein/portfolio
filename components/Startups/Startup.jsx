import Image from 'next/image'

const Startup = ({
    name,
    logoPath,
    logoWidth,
    logoHeight,
    summary,
    details,
    expand
}) => {
    const expandInfo = (_details) => {
        console.log('Expand Info for: ', name)
        const details = {
            ..._details,
            logoPath: logoPath,
            name: name,
            logoWidth: 150,
            logoHeight: 50,
        }

        expand(details);
    }

    return (
        <div id="startup" className="
            grid grid-rows-2 gap-y-0 px-5 pt-0 pb-2 bg-gunmetal border border-gold rounded-xl shadow-lg
            xs:grid-rows-3 xs:pb-9
            sm:grid-rows-4 sm:gap-y-3 sm:pt-2 sm:pb-16
            md:grid-rows-2 md:gap-y-10 md:pt-8 md:pb-8 
            lg:gap-y-10 lg:pb-0
            xl:grid-rows-3 xl:gap-y-0 xl:pb-4 xl:pt-2 
            2xl:grid-rows-2 2xl:pb-3 2xl:px-4
        " >
            <div className="
                grid grid-cols-5 w-full mb-2 
                xs:row-start-1 xs:row-end-3
                sm:row-start-1 sm:row-end-4
                md:row-start-1 md:row-end-2
                xl:row-start-1 xl:row-end-3 
                2xl:row-start-1 2xl:row-end-2
            ">
                <div className="col-start-2 col-end-5 pt-7">
                    <Image src={logoPath} alt={name} width={logoWidth} height={logoHeight} className="inline-block"/>
                </div>
            </div>
            <p className="
                text-tan text-lg italic
                xs:text-xl
                sm:text-2xl sm:px-5
                2xl:text-xl 2xl:px-0
            ">{summary}</p>
            <button 
                className="mx-auto w-1/2 border border-byzantine text-byzantine px-6 py-3 rounded-full hover:bg-byzantine hover:text-black transition-all duration-200 shadow-lg"
                onClick={() => expandInfo(details)}
            >
                <span 
                className=""
                >Learn more</span>
            </button>
            
        </div>
    )
}

export default Startup;