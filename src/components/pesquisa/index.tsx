import { SearchIcon } from "lucide-react";
import Link from "next/link";

type BarraBuscaProps = {
    count: number
}

export default function Pesquisa({count} : BarraBuscaProps) {
    return(
        <form className="flex w-full lg:w-4/12 ml-auto" id="barraBusca" autoComplete="off">
            <div className="flex flex-col w-full gap-2 my-10">
                <div className="relative flex items-center w-full">
                    <input
                    id="barraBusca-input"
                    name="BarraBusca-input-name"
                    type="text"
                    className="w-full rounded-xl px-16 py-4 text-texto border border-texto transition-all duration-300"
                    placeholder="Buscar..."
                    />
                    <div className="absolute right-8">
                    <Link href={'/busca'} >
                        <SearchIcon className="w-7 h-7 text-texto"/>
                    </Link>
                    </div>
                </div>
            </div>
        </form>
    )
}