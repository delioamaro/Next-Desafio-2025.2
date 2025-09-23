import { Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function OutroContato() {
    return(
       <div className=" bg-white rounded-b-lg w-full lg:w-10/12 lg:m-auto flex flex-wrap justify-center gap-6">
            <div className="flex flex-col flex-grow justify-center p-4 gap-16 w-4/12">
                <div className="flex flex-col gap-2">
                    <h1 className="text-rock font-montserrat font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl">
                        CONTATOS
                    </h1>
                    <div className="flex flex-wrap">
                        <span className=" text-rock font-montserrat text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl leading-relaxed tracking-widest mt-8">
                            TELEFONE:
                        </span>
                        <span className=" text-texto font-montserrat text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl leading-relaxed tracking-widest mt-8 ml-2">
                             (99) 9999-9999
                        </span>
                    </div>
                    <div className="flex flex-wrap">
                        <span className=" text-rock font-montserrat text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl leading-relaxed tracking-widest mt-8">
                            E-MAIL:
                        </span>
                        <span className=" text-texto font-montserrat text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl leading-relaxed tracking-widest mt-8 ml-2">
                             albumteria@email.com
                        </span>
                    </div>
                    <div className="flex flex-row">
                        <span className=" text-rock font-montserrat text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl leading-relaxed tracking-widest mt-8">
                            REDES SOCIAIS:
                        </span>
                        <Link href="/">
                            <Twitter
                            className="w-10 h-10 text-texto cursor-pointer transition-all duration-200 p-1 rounded-xl mt-6 ml-4"/>
                        </Link>
                        <Link href="/">
                        <Instagram
                        className="w-10 h-10 text-texto cursor-pointer transition-all duration-200 p-1 rounded-xl mt-6 ml-4"/>
                        </Link>
                    </div>
                </div>
            </div> 
        </div>
    )
}