'use client';

import Link from "next/link"
import sytles from "./navlinks.module.css"
import {userPathname} from "next/navigation"

const NavLink = ({item})=>{
    const pathName = userPathname;
    return(
    <Link href={item.path} className={`${sytles.container} ${pathName=== item.path && sytles.active}`}>{item.title}</Link>
    )
}

export default NavLink