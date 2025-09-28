import { count } from "console";
import BarraBusca from "./barraBusca";
import Link from "next/link";
import PostCard from "../postCard";


export default function Busca () {
    const count = 0;
    return (
        <div className="w-full">
            <BarraBusca count={count} />
            {count != 0 ? (
                <div className="w-full flex flex-col">
                    <span className="text-texto text-2xl font-extrabold font-montserrat">
                        Nenhum álbum encontrado.
                    </span>
                    <span className="text-texto font-montserrat">
                        Tente procurar por outro álbum ou explore <Link href={'/catalogo'}> nosso catálogo.</Link>
                    </span>
                </div>
            ) : (
                <div className="w-full intems-center grid grid-cols-1 bp-840:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
                    <PostCard />
                    
                </div>
            )}
        </div>
    )
}