import AdicionarALbum from "@/src/components/crud/gerenciamento/criar";
import EditarALbum from "@/src/components/crud/gerenciamento/editar";
import DashboardTitle from "@/src/components/dashboard/dashboardTitle";

export default function Page() {
    return(
        <div className="w-full space-y-12">
            <EditarALbum />
        </div>
    )
}