
import Links from "./links/Links"
import sytles from "./navbar.module.css"
const Navbar = () =>{
    return (
        <div className={sytles.container}>
            
            <div className={sytles.logo}>Logo</div>
            <div>
                <Links/>

            
            </div>
            </div>
    )
}


export default Navbar