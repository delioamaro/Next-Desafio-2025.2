import Image from "next/image";

export default function HeroSection () {
    return(
        <div className=" bg-white shadow-md rounded-lg w-full flex flex-col">
            <div className="w-full flex flex-col lg:grid lg:grid-flow-col lg:grid-cols-6 items-center">
                <div className="flex -flex-col justify-center lg:col-span-3 p-4 h-auto lg:max-h-[700px] overflow-hidden">
                    <div className="flex flex-col leading-relaxed">
                        <p className="text-jazz font-montserrat font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl cursor-default">
                            Onde todo álbum <br>
                            </br>encontra seu palco!</p>
                    </div>
                </div>
                <div className="lg:col-span-3 relative rounded-3xl overflow-hidden flex justify-center">
                    <Image 
                        src='/Logo/imagem2albumteria.png'
                        width={1920}
                        height={1080}
                        alt="Imagem em destaque"
                        className="object-contain w-full max-w-[320px] sm:max-w-[400px] md:max-w-[400px] lg:max-w-none lg:max-h-[400px] h-auto shadow-md"
                    />
                </div>
            </div>
           <div className="w-full px-4 py-4 mt-8 cursor-default">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2"> 
                    <div className="bg-kpop rounded-lg p-3 text-center text-white font-bold"> 
                        Kpop
                    </div>
                    <div className="bg-pop rounded-lg p-3 text-center text-white font-bold">
                        Pop
                    </div>
                    <div className="bg-rock rounded-lg p-3 text-center text-white font-bold">
                        Rock
                    </div>
                    <div className="bg-jazz rounded-lg p-3 text-center text-white font-bold">
                        Jazz
                    </div>
                    <div className="bg-classica rounded-lg p-3 text-center text-white font-bold">
                        Clássica
                    </div>
                    <div className="bg-mpb rounded-lg p-3 text-center text-white font-bold">
                        MPB
                    </div>
                </div>
            </div>
        </div>    
    )
}