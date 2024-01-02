import Image from "next/image"
import sytles from "./singlepost.module.css"
import PostUser from "@/component/postuser/postuser";
import { Suspense } from "react";

const getData = async (slug)=> {
    const respone = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
    if (!respone.ok){
        throw new Error("Something wen wrong")

    }
    return respone.json()
}



const SingleBlog= async({params})=>{  

    const {slug} = params;
    const post = await getData(slug);

    return (
        <div className={sytles.container}>
            <div className={sytles.imgcontainer}>
                <Image src="https://images.pexels.com/photos/13926757/pexels-photo-13926757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill className={sytles.img}/>
            </div>
            <div className={sytles.textcontainer}>
                <h1 className={sytles.title}>{post.title}</h1>
                <div className={sytles.details}>
                <Image src="https://images.pexels.com/photos/13926757/pexels-photo-13926757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width={50} height={50} className={sytles.avatar}/> 
                
                <Suspense fallback={<div>Loading....</div>}>
                <PostUser userid= {post.userId}/>
                </Suspense>


                <div className={sytles.detailsText}>
                    <span className={sytles.detailsTitle}>Published</span>
                    <span className={sytles.detailsValue}>2.1.2024</span>

                </div>
                </div>
            <div className={sytles.content}>{post.body}</div>
            </div>
            
            </div>
    )
}


export default SingleBlog