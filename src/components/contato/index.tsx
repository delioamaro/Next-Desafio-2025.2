import Image from "next/image";

export default function Contato() {
    return(
        <div className=" bg-white w-full lg:w-10/12 lg:m-auto flex flex-wrap justify-center py-8 px-4 gap-6">
            <div className="flex flex-col flex-grow justify-center p-4 gap-16 w-4/12">
                <div className="flex flex-col gap-2">
                    <h1 className="text-pop font-montserrat font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl">
                        FALE CONOSCO
                    </h1>
                </div>
                <form className="flex flex-col gap-4">
                    <input type="text" placeholder="Nome" className="p-3 border border-texto" required/>
                    <input type="email" placeholder="E-mail" className="p-3 border border-texto" required/>
                    <input type="text" placeholder="Assunto" className="p-3 border border-texto" required/>
                    <textarea placeholder="Mensagem..." rows={5} className="p-3 border border-texto resize-none"/>
                    <button className="w-4/12 lg:2/12 m-auto bg-pop text-white hover:bg-pop py-2 rounded-md text-lg 2xl:text-2xl font-montserrat font-semibold transition-all">
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    )
}