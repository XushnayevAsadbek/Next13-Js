import Post from "@/component/post";
import { PostType } from "@/interface";
import axios from "axios"
import Link from "next/link";
import { notFound } from "next/navigation";

 async function getData() {
    const {data}  = await axios.get(
        'https://jsonplaceholder.typicode.com/posts?_limit=10 '
      ) 
      return(data)
    
 }
const PostPage = async () =>{
    const data: PostType[] = await getData() ;
    if(!data.length){
        notFound();
    }
    return(
       < Post data={data} />
    )
}

export default PostPage;