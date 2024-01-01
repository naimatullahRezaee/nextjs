import Image from "next/image"
import styles from "./about.module.css"

const AboutPage = ()=>{
    return (
        <div className={styles.container}>
        <div className={styles.textcontainer}>
        <h2 className={styles.subtitle}>About CondingRah</h2>
        <h1 className={styles.title}> Animi, possimus asperiores quia, fugit dolorum.</h1>
        <p  className={styles.desc}>Veritatis ad, eos unde, recusandae explicabo necessitatibus mollitia consectetur. Ratione ab magnam aliquid perspiciatis aspernatur.</p>

        <div className={styles.boxes}>
            <div className={styles.box}>
                <h1>10 K</h1>
                <p>Year of experience</p>
            </div>
            <div className={styles.box}>
                <h1>10 K</h1>
                <p>Year of experience</p>
            </div>
            <div className={styles.box}>
                <h1>10 K</h1>
                <p>Year of experience</p>
            </div>
        </div>

        </div>
        <div className={styles.imgcontainer}>
        <Image src="/about.png" alt="" fill className={styles.img}/>
        </div>
        </div>
    )
}

export default AboutPage



