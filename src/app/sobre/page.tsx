import Contato from "@/src/components/contato";
import HeroSection from "@/src/components/hero-section";
import OutroContato from "@/src/components/outroContato";
import SobreNos from "@/src/components/sobreNos";


export default function Sobre() {
    return(
        <div className="space-y-24 md:space-y-32 w-full md:w-10/12 py-8 px-4 md:p-0 min-h-screen mx-auto">
            <HeroSection />
            <SobreNos/>
            <Contato/>
            <OutroContato/>
        </div>
    )
}