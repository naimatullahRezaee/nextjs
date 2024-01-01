import Image from "next/image";
import styles from "./home.module.css"

const Home = () => {
  return(
  
  <div className={styles.container}>

    <div className={styles.textcontainer}>
      <h1 className={styles.title}>Create New Project</h1>
      <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit.  beatae et magnam dolorum perferendis eaque quod reiciendis delectus.</p>
      <div className={styles.buttons}>
        <button className={styles.button}>Learn More</button>
        <button className={styles.button}>Contact</button>
      </div>
      <div className={styles.brands}>
        <Image src="/brands.png" alt="" fill className={styles.imgbrand}/>
      </div>
    </div>
    <div className={styles.imagecontainer}>
        <Image src="/hero.gif" alt="" fill className={styles.imghero}/>
    </div>
  </div>
  

  );
};

export default Home;