import DashboardTitle from "@/src/components/dashboard/dashboardTitle";
import ManageCategoriesTable from "@/src/components/table/manageCategories";

export default function Page() {
    return(
        <div className="w-full space-y-12">
            <DashboardTitle title="GERENCIAMENTO DE PRODUTOS" description="Tabela de Gerenciamento" />
            <ManageCategoriesTable />
        </div>
    )
}