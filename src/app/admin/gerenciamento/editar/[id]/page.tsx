import AdicionarALbum from "@/src/components/crud/gerenciamento/criar";
import EditarALbum from "@/src/components/crud/gerenciamento/editar";
import DashboardTitle from "@/src/components/dashboard/dashboardTitle";

export default function Page() {
    return(
        <div className="w-full space-y-12">
            <DashboardTitle title="Editar Álbum X" description="Edite o álbum" />
            <EditarALbum />
        </div>
    )
}