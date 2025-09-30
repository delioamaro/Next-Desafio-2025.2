import { Image } from "lucide-react"

const categorie = 'Álbumteria'

export default function EditarALbum() {
    return(
        <div className="w-full lg:w-9/12 xl:w-7/12 2xl:w-5/12 p-4 flex flex-col gap-6 rounded-lg shadow-xl ">
            <h1 className="text-2xl md:text-3xl text-icones font-semibold font-montserrat">
               Editar Álbum 
            </h1>
            <form className="flex flex-col gap-4" autoComplete="off">
                <div className="flex flex-col gap-1">
                    <input
                    className="border-1 p-2 rounded bg-white"
                    name="adicionar album"
                    placeholder="Nome do álbum"
                    defaultValue={categorie}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <input
                    className="border-1 p-2 rounded bg-white"
                    name="genero album"
                    placeholder="Gênero do álbum"
                    defaultValue={categorie}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <input
                    className="border-1 p-2 rounded bg-white"
                    name="valor album"
                    placeholder="Valor do álbum"
                    defaultValue={categorie}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <input
                    className="border-1 p-2 rounded bg-white"
                    name="sobre album"
                    placeholder="Sobre o álbum"
                    defaultValue={categorie}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <textarea
                    className="border-1 p-2 rounded bg-white"
                    name="sobre album"
                    placeholder="Descrição..."
                    rows={4}
                    defaultValue={categorie}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <div className="border-1 bg-white rounded-md p-4 text-center">
                        <input
                            type="file"
                            className="hidden"
                            id="capa-album"
                            accept="image/*"
                        />
                        <label htmlFor="capa-album" className="cursor-pointer">
                            <div className="flex flex-row items-center gap-2">
                                <Image className="text-texto"/>
                                <span className="text-texto">Clique para editar a capa</span>
                            </div>
                        </label>
                    </div>
                </div>
                <div className="w-full flex justify-end space-x-4">
                     <button className="w-full lg:w-2/12 xl:w-2/12 2xl:w-2/12 border-1 hover:bg-fundo border-texto text-icones rounded-md shadow-md px-6 py-2 cursor-pointer">
                        Cancelar
                    </button>
                    <button className="w-full lg:w-2/12 xl:w-2/12 2xl:w-2/12 bg-icones hover:bg-icones text-white rounded-md shadow-md px-6 py-2 cursor-pointer">
                        Salvar
                    </button>
                </div>
            </form>
        </div>
    )
}