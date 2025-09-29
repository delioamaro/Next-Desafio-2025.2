import Link from "next/link";
import { DeletarButton, EditarButton, VisualizarButton } from "../buttons";

export default function ManageCategoriesTable() {
    return(
        <div className="w-full p-4 rounded-md flex flex-col gap-4">
            <div className="flex flex-wrap items-center w-full justify-end">
                <Link 
                href={'/admin/gerenciamento/criar'}>
                    <button className="py-2 px-6 w-full md:w-52 border-2 rouded-md text-white bg-icones transition-all hover:bg-icones cursor-pointer">
                        + Adicionar Álbum
                    </button>    
                </Link>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-base text-center font-montserrat">
                    <thead className="uppercase bg-icones text-white">
                        <tr>
                            <th  scope="col" className="'px-6 py-3">
                                ID
                            </th>
                            <th  scope="col" className="'px-6 py-3">
                                PRODUTO
                            </th>
                            <th  scope="col" className="'px-6 py-3">
                                PREÇO
                            </th>
                            <th  scope="col" className="'px-6 py-3">
                                IMAGEM
                            </th>
                            <th  scope="col" className="'px-6 py-3">
                                AÇÕES
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b border-icones hover:bg-white text-texto font-montserrat">
                            <th className="px-6 py-5 font-medium">
                                1
                            </th>
                            <th className="px-6 py-5 font-medium">
                                Nome Album
                            </th>
                            <th className="px-6 py-5 font-medium">
                                250,00
                            </th>
                            <th className="px-6 py-5 font-medium">
                                -----
                            </th>
                            <th className="px-6 py-5 flex justify-between">
                                <VisualizarButton id={1} />
                                <EditarButton id={1}/>
                                <DeletarButton id={1}/>
                            </th>
                        </tr> 
                           
                    </tbody>
                </table>
            </div>
        </div>
    )
}