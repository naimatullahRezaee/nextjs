'use client';
import Link from "next/link";
import sytles from "./links.module.css"
import NavLink from "./navLink/navLinks";
import { useState } from "react";
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

    const [open,setOpen] = useState()
    const session = true;
    const isAdmin = true;

    return (
        <div className={sytles.container}>
        <div className={sytles.links}>
            {links.map((link=>(
               <NavLink item={link} key={link.title}></NavLink>
            )))}
            {
                session ? (
                    <>
                    {isAdmin && <NavLink item={{title:"Admin",path:"/admin"}}/>}
                      <button className={sytles.logout}>Logout</button>
                   
                    </>
                ) : (
                    <NavLink item={{title:"Login", path : "/login"}}/>
                )}

        </div>
        <button className={sytles.menubutton} onClick={()=> setOpen((perv) => !perv)}>Menu</button>
        {
            open && (
                <div className={sytles.mobilelinks}>
                    {links.map((link)=>(
                        <NavLink item={link} key={link.title}/>
                    ))}
                </div>
            )
        }
        </div>
    )
}


export default Links