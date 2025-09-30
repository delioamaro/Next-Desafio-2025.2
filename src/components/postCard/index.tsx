import Image from "next/image";
import Link from "next/link";

export default function PostCard() {
    return(
        <Link
        href={'/post/1'} 
        className="group">
            <div className=" bg-white flex group-hover:sadow-2xl rounded-xl duration-300">
                <div className="flex w-full flex-col rounde-xl shadow-md">
                    <div className="overflow-hidden rounded-t-xl text-texto">
                        <Image 
                            src='/albuns/AlbumMarceloD2.jpg'
                            alt="Album 3"
                            width={1920}
                            height={1080}
                            className="h-full w-full object-center"
                        />
                    </div>
                    <div className="p-6 flex flex-col gap-4 justify-between">
                        <h1 className="text-xl 2xl:text-2xl 3xl:text-3xl font-montserrat font-semibold text-texto line-clamp-2">
                        Acústico - Marcelo D2 
                        </h1>
                        <div className="flex justify-between gap-4 items-center">
                            <div className="felx gap-2 items-center text-lg font-bold text-texto">
                                <span className="h-7 w-7 text-texto font-extrabold">R$</span>
                                <span className="text-lg 2xl:text-lg 3xl:txt-2xl">250,00</span>
                            </div>
                            <div className="bg-mpb rounded-lg p-3 text-center text-white font-bold">
                                 MPB
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}