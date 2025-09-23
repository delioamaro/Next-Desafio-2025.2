type SobreAlbumteriaCardProps = {
    title: string;
    description: string;
}

export default function SobreAlbumteriaCard({title, description} : SobreAlbumteriaCardProps) {
    return(
        <div className="bg-white flex flex-col items-center justify-center gap-8 max-w-sm 2xl:max-w-md 3xl:max-w-lg p-8 transition-shadow duration-200 rounded-lg shadow-md">
            <h1 className="text-center text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-jazz font-bold cursor-default">
                {title}</h1>
            <p className="text-texto text-lg lg:text-xl 2xl:text-2xl 3xl:text-3xl text-center line-clamp-6 cursor-default">
                {description}</p>
        </div>
    )
}