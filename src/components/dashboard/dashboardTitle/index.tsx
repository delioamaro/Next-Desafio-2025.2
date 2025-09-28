type DashboardTitleProps = {
    title: string;
    description: string;
}

export default function DashboardTitle({title, description}: DashboardTitleProps) {
    return(
        <div>
            <h1 className="text-2xl font-montserrat font-bold mb-2 text-texto">{title}</h1>
            <span className="text-icones">{description}</span>
        </div>
    )
}