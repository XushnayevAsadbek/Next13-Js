'use client'
import { useEffect, useState } from "react";
import axios from "axios"
import Link from "next/link";
import { PostType } from "@/interface";



const Home = () =>{
    const [post ,setPost] = useState <PostType[]>([]);
    const [loading , setLoading]=useState(true);
    useEffect(()=>{
      const getData = async () =>{
        try{
          const {data}  = await axios.get(
            'https://jsonplaceholder.typicode.com/posts?_limit=10 '
          )  
          setPost(data)
          console.log(data);
          
        }
        catch(error){
          console.log(error);
          
        }
        finally{
          setLoading(false)
        }
      } ;
      getData()
    },[])
    return(
        <>
        {loading? 'Loading...'
        :post.map(c=>(
            <div key={c.id}>
                <Link href={`/posts/${c.id}`}>{c.title}</Link>
            </div>
        ))}
        <div>
        Home
        </div>
        </>
    )
}

export default Home