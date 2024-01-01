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
    const session = true;
    const isAdmin = true;

    return (
        <div className={sytles.links}>
            {links.map((link=>(
               <NavLink item={link} key={link.title}></NavLink>
            )))}
            {
                session ? (
                    <>
                    {isAdmin && <NavLink item={{title:"Admin",path:"/admin"}}/>}
                      <button>Logout</button>
                   
                    </>
                ) : (
                    <NavLink item={{title:"Login", path : "/login"}}/>
                )}

        </div>
    )
}


export default Links