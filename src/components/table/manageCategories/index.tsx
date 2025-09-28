import Link from "next/link";

export default function ManageCategoriesTable() {
    return(
        <div className="w-full p-4 rounded-md flex flex-col gap-4">
            <div className="flex items-center w-full justify-end">
                <Link 
                href={'/admin/gerenciamento/criar'}>
                    <button className="py-2 w-52 px-6 border-2 rouded-md text-white bg-icones transition-all hover:bg-icones cursor-pointer">
                        + Criar Álbum
                    </button>    
                </Link>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-base text-left">
                    <thead></thead>
                </table>
            </div>
        </div>
    )
}