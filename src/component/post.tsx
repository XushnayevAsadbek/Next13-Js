'use client'

import { PostType } from "@/interface";
import Link from "next/link";
// import { FC, useEffect, useState } from "react";
import { FC } from "react";

const Post:FC<{data: PostType[] }> =({data})=>{
    // const [mountend , setMountend] = useState(false);
    // useEffect(()=>{
    //     setMountend(true)
    // },[])
    return(
        <>
        {/* {
            mountend && (
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
        } */}
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
                 <Link  href={`/post/${c.id}`}>{c.title}</Link>
               </td>
            </tr>
        ))}
                    
                </tbody>
        </table>
        </>
       
    )
}
export default Post;