import Image from "next/image"
import styles from "./postCard.module.css"
import Link from "next/link"

const PostCard=() =>{

    return (
        <div className={styles.container}>
            <div className={styles.top}>
            <div className={styles.imgcontainer}>
                <Image src="https://images.pexels.com/photos/13926757/pexels-photo-13926757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill className={styles.img}/>
            </div>
            <span className={styles.date}>01.01.2024</span>
            </div>
            
            <div className={styles.bottom}>
                <h1 className={styles.title}>Title</h1>
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis adipisci accusantium, tempora illum quisquam tempore non in! Natus nisi, molestias libero repellendus error totam laudantium dolore accusantium animi quidem tempore?</p>
                <Link className={styles.link} href="/blog/post">READ MORE</Link>
            </div>
        </div>
    )
}


export default PostCard