import Image from "next/image"
import sytles from "./singlepost.module.css"
const SingleBlog=()=>{


    
    return (
        <div className={sytles.container}>
            <div className={sytles.imgcontainer}>
                <Image src="https://images.pexels.com/photos/13926757/pexels-photo-13926757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill className={sytles.img}/>
            </div>
            <div className={sytles.textcontainer}>
                <h1 className={sytles.title}>Titile</h1>
                <div className={sytles.details}>
                <Image src="https://images.pexels.com/photos/13926757/pexels-photo-13926757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width={50} height={50} className={sytles.avatar}/> 
                
                <div className={sytles.detailsText}>
                    <span className={sytles.detailsTitle}>Author</span>
                    <span className={sytles.detailsValue}>Niamatullah Rezaie</span>

                </div>
                <div className={sytles.detailsText}>
                    <span className={sytles.detailsTitle}>Published</span>
                    <span className={sytles.detailsValue}>2.1.2024</span>

                </div>
                </div>
            <div className={sytles.content}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt sequi dignissimos deleniti doloremque et delectus laudantium odit. Officia, eum aliquid doloremque aperiam quo voluptatem illum rem vel magni, culpa reiciendis?</div>
            </div>
            
            </div>
    )
}


export default SingleBlog