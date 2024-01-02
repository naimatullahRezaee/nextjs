import PostCard from "@/component/postCard/postCard"
import styles from "./blog.module.css"

const getData = async ()=>{
    const respone = await fetch("https://jsonplaceholder.typicode.com/posts")
    if (!respone.ok){
        throw new Error("Something went wrong")
    }
    return respone.json()
}


const BlogPage = async ()=>{
    const posts= await getData()
    return (
        <div className={styles.container}>
            {posts.map((post)=>(
                    <div className={styles.post}>
                    <PostCard post={post}/>
                    </div>
            ))}

            
            
            

        </div>
    )
}

export default BlogPage