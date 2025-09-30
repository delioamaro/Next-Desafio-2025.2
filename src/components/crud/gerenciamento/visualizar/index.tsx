import Image from "next/image";

export default function VisualizarAlbum() {
    return(
        <div className=" bg-white w-full flex flex-col lg:grid lg:grid-cols-8 gap-8 py-6 px-2 rounded-lg shadow-md">
            <div className="lg:col-span-4">
                <Image 
                src={'/albuns/AlbumMarceloD2.jpg'}
                alt="Album"
                width={1920}
                height={1080}
                className="lg:h-[700px] object-cover aspect-video w-full roudend-xl"
                />
            </div>
            <div className="lg:col-span-4 lg:max-h-[700px] 3xl:max-h-max lg:px-4 overflow-auto flex flex-col gap-8 lag:gap-4">
                <div className="flex flex-wrap items-center gap-4 justify-between font-semibold text-texto font-montserrat">
                    <h1 className="text-2xl md:text-3xl">
                        ACÚSTICO - MARCELO D2 
                    </h1>
                    <div className="bg-mpb rounded-lg p-3 text-center text-white font-bold">
                        MPB
                    </div>
                </div>
                <div className="felx gap-2 items-center text-lg font-bold text-texto">
                    <span className="h-7 w-7 text-texto font-extrabold">R$</span>
                    <span className="text-lg 2xl:text-lg 3xl:txt-2xl px-2">250,00</span>
                </div>
                <div>
                    <p className="text-texto font-montserrat 2xl:text-lg 3xl:text-xl text-justify">
                        Contemplando o repertório dos álbuns Eu Tiro É Onda (1998) e À Procura da Batida Perfeita (2003), o álbum apresenta novos arranjos em formato acústico. A gravação contou com uma banda formada por 25 músicos com bateria, percussão, violão, cavaco, banjo, baixo, piano e naipes de sopros e cordas. Em sua procura pela batida perfeita, D2 conta com uma série de convidados ilustres, como Philippe Baden Powell, Fernandinho Beat Box, Pretinho da Serrinha, MC Marechal, BNegão, will.i.am (do Black Eyed Peas) e seu filho, Stephan Peixoto (o Sain). A mistura do rap com o samba alcançou, neste marco da música brasileira dos anos 2000, uma nova roupagem. Tenha na sua coleção a edição especial com LP duplo (laranja opaco + marrom translúcido), capa gatefold, livreto com conteúdos inéditos, paper toys e cartela de adesivos.
                    </p>
                </div>
                <div className="space-y-4">
                    <h1 className="text-xl 2xl:text-2xl 3xl:text-3xl line-clamp-2 text-texto font-semibold">
                        Descrição do Produto:
                    </h1>
                    <div className="flex gap-4 font-semibold text-texto text-sm">
                        <p className="text-texto font-montserrat 2xl:text-lg 3xl:text-xl text-justify">
                            LP DUPLO (LARANJA OPACO + MARROM TRANSLÚCIDO), CAPA GATEFOLD, LIVRETO, PAPER TOYS E ADESIVOS   
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}