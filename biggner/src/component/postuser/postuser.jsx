import styles from "./postuser.module.css";

const getData = async(userid) =>{
    const respone = await fetch(`https://jsonplaceholder.typicode.com/users/${userid}`)
    
    if(!respone.ok){
        throw new Error("something went wrong")
    }
    return respone.json()
}


const PostUser = async({userid}) =>{

    const user = await getData(userid)
    return (
        <div className={styles.container}>
            <span className={styles.detailsTitle}>Author</span>
            <span className={styles.detailsusername}>{user.username}</span>

        </div>
    )
}


export default PostUser