export default function ExluirAlbum() {
    return(
        <div>
            <div className="w-full lg:w-9/12 xl:w-7/12 2xl:w-5/12 p-4 flex flex-col gap-6 rounded-lg shadow-xl ">
            <h1 className="text-2xl md:text-3xl text-icones font-semibold font-montserrat">
               Deseja Exluir o Álbum?
            </h1>
            <div className="w-full flex justify-end space-x-4">
                <button className="w-full lg:w-2/12 xl:w-2/12 2xl:w-2/12 border-1 hover:bg-fundo border-texto text-icones rounded-md shadow-md px-6 py-2 cursor-pointer">
                    Cancelar
                </button>
                <button className="w-full lg:w-2/12 xl:w-2/12 2xl:w-2/12 bg-icones hover:bg-icones text-white rounded-md shadow-md px-6 py-2 cursor-pointer">
                    Excluir
                </button>
            </div>
        </div>
        </div>
    )
}