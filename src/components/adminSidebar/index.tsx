'use client'

import { Home, icons, LayoutDashboard, LogOut, Menu, Settings, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const LinkSidebar = [
    {href: '/admin', label: 'Dashboard', icon: LayoutDashboard},
    {href: '/', label: 'Página Inicial', icon: Home},
    {href: '/admin/gerenciamento', label: 'Gerenciamento', icon: Settings},
    {href: '/', label: 'Logout', icon: LogOut}
]


export default function AdminSidebar() {
    const [isAdminSidebarOpen, setIsAdminSidebarOpen] = useState(false)
    const toggleAdminSidebar = () => setIsAdminSidebarOpen(!isAdminSidebarOpen)
    
    return(
        <div>
        <div className="bg-fundo sm:hidden flex flex-wrap items-center justify-between px-3 py-4">
            <div className="flex items-center gap-2 cursor-default">
                    <Image
                    src={'/logo/Logo.png'}
                    alt="Logo do site"
                    width={904}
                    height={904}
                    className="w-30 h-20 rounded-xl"
                    />
                </div>
                <Menu 
                className="w-8 h-8 text-texto"
                onClick={toggleAdminSidebar}
                />
            </div>
            <aside className={`fixed top-0 left-0 z-40 w-full sm:w-72 h-screen transition-transform ${isAdminSidebarOpen ? '' : '-translate-x-full'} sm:translate-x-0`}>
                <div className="bg-dashboard h-full px-1 py-2 overflow-y-auto">
                    <div className="w-full flex items-center bg-white justify-between rounded-lg mb-5">
                        <div className="flex items-center gap-2 cursor-default">
                            <Image
                            src={'/logo/Logo.png'}
                            alt="Logo do site"
                            width={904}
                            height={904}
                            className="w-30 h-20 rounded-xl"
                            />
                        </div>
                        <X 
                        className="w-8 h-8 text-icones sm:hidden"
                        onClick={toggleAdminSidebar}
                        />
                    </div>
                    <ul className="space-y-8">
                        {LinkSidebar.map(({href, label, icon: Icon}, index) => (
                            <li key={index}>
                                <Link href={href} className="flex items-center px-2 py-3 rounded-lg hover:bg-icones">
                                    <Icon 
                                    className="w-6 h-6 text-white"
                                    />
                                    <span className="ms-3 text-xl text-white font-montserrat">{label}</span>
                                </Link>
                            </li>    
                        ))}
                    </ul>
                </div>
            </aside>
        </div>
    )
}