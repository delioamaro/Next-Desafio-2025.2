'use client'

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LogIn, LogInIcon, Menu, Search, ShoppingCart, UserRound, X } from "lucide-react";

const links = [
    {href: '/catalogo', label: "Catálogo"},
    {href: '/admin', label: "Gerenciamento"},
    {href: '/sobre', label: "Contato"},
    {href: '/login', label: "Login"},
    {href: '/carrinho', label: "Carrinho"}
]

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false)
    
    const toggleNav = () => setIsNavOpen(!isNavOpen)
    

    return (
        <header className="bg-fundo sticky top-0 z-20 mx-auto w-full py-8 px-4 md:p-0 mb-8">
            <div className="flex flex-wrap items-center justify-between w-full md:w10/12 mx:auto">
                <Link href='/' className="flex gap-4 items-center">
                    <Image
                    src={'/logo/Logo.png'}
                    alt="Logo do site"
                    width={904}
                    height={904}
                    className=" w-50 h-20 rounded-xl"
                    />
                </Link>
                <nav className="flex justify-and">
                    <div className="hidden w-full md:flex justify-end items-center p-3 gap-5">
                        {links.map((link, index) =>
                            <Link href={link.href} key={index}>
                                {link.label === "Login" ? (
                                    <UserRound className="w-10 h-10 text-texto cursor-pointer transition-all duration-200 p-1 rounded-xl"/>
                                ) : link.label === "Carrinho" ? (
                                    <ShoppingCart className="w-10 h-10 text-textocursor-pointer transition-all duration-200 p-1 rounded-xl"/>
                                ) :
                                (<span className="text-xl text-texto p-2 rouded-xl">{link.label}</span>
                                )}
                            </Link>
                        )}        
                    </div>
                    <div className="md:hidden">
                        {isNavOpen ? (
                            <X 
                                onClick={toggleNav}
                                className="w-10 h-10 text-texto cursor-pointer transition-all duration-200 p-1 rounded-xl"
                            />
                            ) : (
                            <div className="flex gap-4">
                                <Link href="/carrinho">
                                    <ShoppingCart
                                        className="w-10 h-10 text-texto cursor-pointer transition-all duration-200 p-1 rounded-xl"
                                    />
                                </Link>
                                 <Menu
                                    onClick={toggleNav}
                                    className="w-10 h-10 text-texto cursor-pointer"
                                />  
                            </div>
                        )}
                    </div>
                </nav>
                {isNavOpen && (
                    <div className="md:hidden flex basis-full flex-col items-center gap-6 mt-10">
                        {links
                        .filter(link => link.label !== "Carrinho")
                        .map((link, index) =>
                            <Link href={link.href} key={index}>
                                <span className="text-2xl text-texto p-2 rouded-xl">{link.label}</span>
                            </Link>
                        )}
                    </div>
                )}           
            </div>     
        </header>
    )
}