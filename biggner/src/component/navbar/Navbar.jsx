
import Link from "next/link"
import Links from "./links/Links"
import sytles from "./navbar.module.css"
const Navbar = () =>{
    return (
        <div className={sytles.container}>
            
            <Link href="/" className={sytles.logo}>CodingRah</Link>
            <div>
                <Links/>

            
            </div>
            </div>
    )
}


export default Navbar