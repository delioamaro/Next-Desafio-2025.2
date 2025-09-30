import CardGenero from "@/src/components/cardGenero";
import PaginaCatalogo from "@/src/components/paginaCatalogo";
import Pesquisa from "@/src/components/pesquisa";

export default function Page() {
    return(
        <div className="min-h-screen mx-auto p-4">
           <div className="flex-1 space-y-24 w-full">
                    <Pesquisa count={0}/>
            </div> 
            <div className="flex flex-col lg:flex-row gap-8 items-start max-w-7xl mx-auto">
                <div className="w-full lg:w-auto">
                    <CardGenero />
                </div>
                <div className="flex-1 space-y-8 w-full">
                    <PaginaCatalogo />
                </div>
            </div>
        </div>
    )
}