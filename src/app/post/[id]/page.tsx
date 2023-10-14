import axios from "axios";

async function getDetaildata(id: string) {
    const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    )
    return data;

}
const PostDetailPage = async({
     params,
     }:{
        params: { id: string };
    }) => {
        const data = await getDetaildata(params.id)

        return  ( 
        <div> 
            <h2>
                {data.title}
            </h2>
            <p>
                {data.body}
            </p>
             </div>

        )
    }

export default PostDetailPage;