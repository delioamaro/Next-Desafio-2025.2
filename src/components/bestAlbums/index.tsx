import Title from "../title";
import BestAlbumsCard from "./card";


export default function BestAlbums() {
    return(
        <div className="w-full space-y-12">
            <Title title="Os mais mais..." subtitle="O melhor da Albumteria"/>
            <div className="w-full grid grid-cols-1 bp-840:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
                <BestAlbumsCard/>
                <BestAlbumsCard/>
                <BestAlbumsCard/>
                <BestAlbumsCard/>
                <BestAlbumsCard/>
                <BestAlbumsCard/>
            </div>
        </div>
    )
}