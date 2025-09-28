import PostCard from "../postCard";

export default function PaginaCatalogo() {
    return(
        <div className="w-full grid grid-cols-1 bp-840:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />

        </div>
    )
}