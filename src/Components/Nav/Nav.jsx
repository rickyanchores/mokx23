import { HashLink as Link } from 'react-router-hash-link'
import React from 'react'

const Nav = () => {

    const navList = [
        {
            name: "Home",
            href: "/"
        },
        {
            name: "About",
            href: "/about"
        },
        {
            name: "Faq",
            href: "/faq"
        }
    ]

  return (
    <div className='Nav'>
        <div className="logo">Nav</div>
        <div className="navLinks">
            {navList.map((link) => {
                return(
                    <Link className="link" href={link.href}>{link.name}</Link>
                )
            })}
        </div>
        <div className="hamburger">X</div>
    </div>
  )
}

export default Nav;