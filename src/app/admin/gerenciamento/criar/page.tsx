import AdicionarALbum from "@/src/components/crud/gerenciamento/criar";
import DashboardTitle from "@/src/components/dashboard/dashboardTitle";

export default function Page() {
    return(
        <div className="w-full space-y-12">
            <DashboardTitle title="Adicionar Álbum" description="Adicione um álbum" />
            <AdicionarALbum />
        </div>
    )
}