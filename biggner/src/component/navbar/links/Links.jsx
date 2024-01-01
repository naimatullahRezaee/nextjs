import Link from "next/link";
import sytles from "./links.module.css"
import NavLink from "./navLink/navLinks";
const Links =()=>{

    const links =[
        {
            title: "HomePage",
            path:"/"
        },
        {
            title:"About",
            path: "/about"
        },
        {
            title: "Contact",
            path: "/contact"
        },
        {
            title:"Blog",
            path:"/blog"
        },
    ];

    return (
        <div className={sytles.links}>
            {links.map((link=>(
               <NavLink item={link} key={link.title}></NavLink>
            )))}
        </div>
    )
}


export default Links