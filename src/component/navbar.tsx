'use client';

import { useRouter } from "next/navigation";



const Navbar =() => {

const router = useRouter();

    return(
        <div className='navbar'>
          <button onClick={()=>router.push('/')}>Bosh sahifa</button>
          <button onClick={()=>router.push('/about')}>Men haqimda</button>
          <button onClick={()=>router.push('/contact')}>Bog'lanish</button>
          <button onClick={()=>router.push('/post')}>Post</button>


        </div>
    )
}

export default Navbar ;