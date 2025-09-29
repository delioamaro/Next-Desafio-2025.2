export default function AdicionarALbum() {
    return(
        <div className="w-full lg:w-9/12 xl:w-7/12 2xl:w-5/12 p-4 rounded-md shadow-md flex flex-col gap-6 ">
            <form className="flex flex-col gap-4" autoComplete="off">
                <div className="flex flex-col gap-1">
                    <label>Nome do álbum</label>
                    <input
                    className="border-1 p-2 rounded-md"
                    name="adicionar album"
                    placeholder="Nome"
                    />
                </div>
                <div className="w-full flex justify-end">
                    <button className="w-full lg:w-2/12 xl:w-2/12 2xl:w-2/12 bg-icones hover:bg-icones text-white rounded-md px-6 py-2">
                        Adicionar
                    </button>
                </div>
            </form>
        </div>
    )
}