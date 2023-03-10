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
            name: "Contact",
            href: "/contact"
        }
    ]

  return (
    <div className='Nav'>
        <div className="logo">Nav</div>
        <div className="navLinks">
            {navList.map((link) => {
                return(
                    <li>
                        <Link className="link" to={link.href}>{link.name}</Link>
                    </li>
                )
            })}
        </div>
    </div>
  )
}

export default Nav;