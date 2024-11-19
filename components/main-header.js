import Link from 'next/link'
import classes from './main-header.module.css'
import Logo from "@/public/images/Logo.png"
import Image from 'next/image'
import NavLink from "./nav"

export default function MainHeader() {
    return (
        <>
        <header className={classes.header}>
            
            <h2 className={classes.logo}><Image src={Logo} width={300} height={50} alt='logo'/></h2>
            <nav>
                <div className={classes.navLinks}>
                <p><NavLink href={'/'}>HOME</NavLink></p>
                <p><NavLink href={'/projects'}>PROJECTS & QUALIFICATIONS</NavLink></p>
                <p><NavLink href={'/about'}>ABOUT ME</NavLink></p>
                </div>
            </nav>
        </header>
        <hr />
        </>
    )
}