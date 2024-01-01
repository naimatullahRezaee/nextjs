import Image from "next/image"
import styles from "./about.module.css"
const AboutPage = ()=>{
    return (
        <div>
            <div className={styles.imgContainer}>
        <Image src="/about.png" fill/>
        </div>
        </div>
    )
}

export default AboutPage

