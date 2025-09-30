'use client'

import { Eye, EyeClosed } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function PaginaLogin() {
    const [showPassword, setShowPassword] = useState(false);
    
    return(
        <div className="bg-white min-h-screen lg:w-6/12 xl:w-/12 2xl:w-4/12 shadow-md rounded-lg w-full flex flex-col justify-center items-center mx-auto max-w-lg">
            <div className="lg:col-span-4">
                <Image 
                src={'/Logo/ImagemAlbumteria.png'}
                width={1920}
                height={1080}
                alt="Imagem login"
                className="object-contain w-full max-w-[200px] sm:max-w-[200px] md:max-w-[200px] lg:max-w-none lg:max-h-[200px] h-auto"
                />
            </div>
            <h1 className="text-2xl md:text-3xl text-icones font-bold font-montserrat py-2">
               Bem-vindo! 
            </h1>
            <form className="flex flex-col gap-4" autoComplete="off">
                <div className="flex flex-col gap-1">
                    <input
                    className="border-1 p-2 rounded bg-white"
                    name="nome"
                    placeholder="Nome"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <input
                    className="border-1 p-2 rounded bg-white"
                    name="email"
                    placeholder="E-mail"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <div className="relative">
                    <input
                    className="border-1 p-2 rounded bg-white w-full pr-10"
                    name="senha"
                    placeholder="Senha"
                    type={showPassword ? "text" : "password"}
                    />
                    <button 
                    type="button" 
                    className="absolute right-2 top-1/2 transform -translate-y-1/2"
                    onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? (
                            <EyeClosed className="w-5 h-5 text-texto" />
                        ) : (
                            <Eye className="w-5 h-5 text-texto" />  
                        )}    
                    </button>
                </div>
                </div>
                <div className="w-full flex justify-center space-x-4">
                    <button className="w-full  bg-icones hover:bg-icones text-white rounded-md shadow-md px-6 py-2 cursor-pointer">
                        Login
                    </button>
                </div>
                <div className="w-full flex justify-center space-x-4">
                    <Link href={'/'}>
                        <span className="w-full flex justify-center space-x-4 text-texto underline">
                            Voltar à Pagima Principal
                        </span>
                    </Link>
                </div>
            </form>
        </div>
    )
}