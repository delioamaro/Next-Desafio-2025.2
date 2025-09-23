import Title from "../title";
import SobreAlbumteriaCard from "./card";

export default function SobreAlbumteria () {
    return (
        <div className="w-full space-y-12">
            <Title title="Conheça a Albumteria" subtitle="Sobre"/>
            <div className="flex flex-wrap gap-4 justify-center">
                <SobreAlbumteriaCard title="Missão" description="Conectar pessoas à música através da venda de álbuns de diversos gêneros, oferecendo uma experiência de compra acessível, prática e inspiradora."/>
                <SobreAlbumteriaCard title="Visão" description="Ser reconhecida como a principal plataforma online de álbuns, celebrando adiversidade cultural e tornando-se referência emqualidade, autenticidade e experiência musical."/>
                <SobreAlbumteriaCard title="Valores" description="Nossos valores são guiados pela paixão pela arte musical, pelo respeito à diversidade de estilos, pelo compromisso com a excelência no atendimento e pela busca por qualidade e autenticidade."/>
            </div>
        </div>
    )
}