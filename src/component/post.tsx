import { PostType } from "@/interface";
import Link from "next/link";
import { FC } from "react";

const Post:FC<{data: PostType[] }> =({data})=>{
    return(
        <table border={1}>
            <thead>
                <th>id</th>
                <th>title</th>
            </thead>
            <tbody>
            
                {data.map(c=>(
        <tr key={c.id}>
            <td>
                {c.id}
            </td>
           <td>
             <Link  href={`/post
             /${c.id}`}>{c.title}</Link>
           </td>
        </tr>
    ))}
                
            </tbody>
    </table>
    )
}
export default Post;