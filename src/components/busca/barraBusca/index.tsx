import { Search, SearchIcon } from "lucide-react";

type BarraBuscaProps = {
    count: number
}

export default function BarraBusca({count} : BarraBuscaProps) {
    return(
        <form className="flex w-full lg:w-4/12 ml-auto" id="barraBusca" autoComplete="off">
            <div className="flex flex-col w-full gap-2 my-10">
                <div className="relative flex items-center w-full">
                    <SearchIcon className="w-7 h-7 absolute text-texto right-8"/>
                    <input
                    id="barraBusca-input"
                    name="BarraBusca-input-name"
                    type="text"
                    className="w-full rounded-xl px-16 py-4 text-texto border border-texto transition-all duration-300"
                    />
                </div>
                <span className="text-texto font-montserrat">Total de {count} álbuns encontrados.</span>
            </div>
        </form>
    )
}