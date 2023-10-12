import { PostType } from "@/interface";
import axios from "axios"
import Link from "next/link";

 async function getData() {
    const {data}  = await axios.get(
        'https://jsonplaceholder.typicode.com/posts?_limit=10 '
      ) 
      return(data)
    
 }
const PostPage = async () =>{
    const data: PostType[] = await getData() ;
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

export default PostPage;