import { PostType } from "@/interface";
import Link from "next/link";
import { FC } from "react";

const Post:FC<{data: PostType[] }> =({data})=>{
    return(
        <div>
        {data.map(c=>(
        <div key={c.id}>
            <Link  href={`/posts/${c.id}`}>{c.title}</Link>
        </div>
    ))}
    </div>
    )
}
export default Post;