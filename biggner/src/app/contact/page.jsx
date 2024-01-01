
import Image from "next/image"
import styles from "./contact.module.css"

const ContactPage = ()=>{
    return (
        <div className={styles.container}>
        <div className={styles.imgcontainer}>
            <Image src="/contact.png" alt="" fill className={styles.img}/>
        </div>
        <div className={styles.formcontainer}>
            <form action="" className={styles.form}>
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="Email"/>
                <input type="text" placeholder="phone"/>
                <textarea name="" cols="30" rows="10" placeholder="message" ></textarea>
                <button className={styles.button}>Send</button>
            </form>
        </div>


        </div>
    )
}

export default ContactPage