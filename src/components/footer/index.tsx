import { Instagram, Twitter } from "lucide-react";
import { Twinkle_Star } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

export default function Footer () {
    return (
        <footer className="bg-fundo text-center w-full mt-24 py-8 min-h-[250px] flex gap-12 items-center justify-evenly flex-col md:flex-row ">
            <div className="flex flex-col items-center justify-center space-y-2 ">
                <div className="flex gap-4 items-center justify-center">
                    <Image
                    src={'/logo/Logo.png'}
                    alt="Logo do site"
                    width={904}
                    height={904}
                    className=" w-30 h-15 rounded-xl"
                    />
                </div>
                <p className="text-texto text-sm font-montserrat leading-tight max-w-xs">
                    Receba novidades e lançamentos exclusivos direto no seu e-mail.
                </p>
                <form className="flex flex-col sm:flex-row items-center gap-2">
                    <input
                        type="email"
                        placeholder="Seu e-mail"
                        className="border border-texto rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                     />
                    <button
                        type="submit"
                        className="bg-pop text-white font-semibold cursor-pointer px-6 py-2 rounded-md text-sm hover:bg-pop transition-colors"
                    >
                     Assinar
                    </button>
                </form>
            </div>
            <div className="flex flex-col items-center gap-y-15">
                <span>© Albumteria. Todos os direitos reservados.</span>
            </div>
            <div className="gap-4">
                <h3 className="text-texto font-montserrat">Redes sociais</h3>
                <div className=" justify-center flex item-center">
                    <Link href="/">
                        <Twitter
                        className="w-10 h-10 text-texto cursor-pointer transition-all duration-200 p-1 rounded-xl"
                        />
                    </Link>
                    <Link href="/">
                        <Instagram
                        className="w-10 h-10 text-texto cursor-pointer transition-all duration-200 p-1 rounded-xl"
                        />
                    </Link>
                </div>
                <div className="mt-4 text-sm text-texto space-y-1 text-center">
                    <p className="font-semibold">Contatos:</p>
                    <p>Telefone: (99) 9999-9999</p>
                    <p>E-mail: albumteria@email.com</p>
                </div>
            </div> 
    </footer>
    )
}