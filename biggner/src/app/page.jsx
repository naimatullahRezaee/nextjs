import styles from "./home.module.css"

const Home = () => {
  return(
  
  <div className={styles.container}>

    <div className={styles.textcontainer}>
      <h1>Create New Project</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  beatae et magnam dolorum perferendis eaque quod reiciendis delectus.</p>
      <div className={styles.buttons}>
        <button className={styles.button}>Learn More</button>
        <button className={styles.button}>Contact</button>
      </div>
    </div>
    <div className={styles.imagecontainer}></div>
  </div>
  

  );
};

export default Home;