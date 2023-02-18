

const MyStartups = () => {
  return (
    <section className="w-full bg-midnight-100 text-center py-36">
        <div className="px-150 mb-14">
            <h2 className="text-3xl font-secular text-ivory mb-10">My Startups</h2>
            <p className="text-xl">My love for entrepenuership started as a child when some friends and I discovered a grove of mango trees in the forest. I would climb the trees and knock mangos down while another friend gathered them in a sack. Then we would hold up a sign and sell them on the side of the road for half the price of the super market. Since then, my entrepenurial passion has evolved into creating digital products and experiences that sell. Turning ideas into reality is what I live for.</p>
        </div>
        
        <div className="grid grid-cols-4 gap-x-4 px-60">
            <div className="bg-oxfordblue border border-oxfordblue rounded-xl px-5 py-14">
                <h3>SXD</h3>
                <p>A decentralized cloud storage platform for securely storing large multimedia files.</p>
            </div>
            <div className="bg-oxfordblue border border-oxfordblue rounded-xl px-5 py-14">
                <h3>Arxade</h3>
                <p>A suite of backend APIs for live streaming, real-time communication, and multiplayer gaming.</p>
            </div>
            <div className="bg-oxfordblue border border-oxfordblue rounded-xl px-5 py-14">
                <h3>CamBling</h3>
                <p>A gamified adult webcam site with a fully modernized design & disruptive performer policies.</p>
            </div>
            <div className="bg-oxfordblue border border-oxfordblue rounded-xl px-5 py-14">
                <h3>Personafi</h3>
                <p>A marketplace of voice & personality skins for electronic personal assistants like Alexa.</p>
            </div>
        </div>
        
    </section>
  )
}

export default MyStartups;