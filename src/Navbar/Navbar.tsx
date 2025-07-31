
import { useState, useEffect } from 'react';
import { Navbar, NavbarToggle, NavbarCollapse} from "flowbite-react";
import {NavLink} from 'react-router-dom';
import styles from './Navbar.module.css';

export default function NavbarCustom() {
      const [scrolled, setScrolled] = useState(false);
      const scrollHandle = ()=>setScrolled(window.scrollY > 100);

      useEffect(() => {
        window.addEventListener('scroll', scrollHandle);
      }, [])
  return (
    <Navbar className={`${styles.navBarCustom} md:flex md:items-center md:justify-center fixed top-0 left-0 right-0 z-40 ${scrolled?'min-h-[75px] md:max-h-[75px] md:h-[75px]':'min-h-[105px] p-4 md:max-h-[105px] md:h-[105px]'}`}>
      <NavLink to='home'>
        <span className={`${styles.logoCustom} self-center whitespace-nowrap text-xl font-semibold dark:text-white`}>Start Framework</span>
      </NavLink>
      <div className="flex md:hidden md:order-2">
        <NavbarToggle className={`${styles['toggle-custom']}`}/>
      </div>
      <NavbarCollapse className={`${styles['nav-list']} me-2 pb-2 md:order-1`}>
        <NavLink to='home' className={`${styles.navLinkCustom} p-2 mx-2`}>Home</NavLink>
        <NavLink to='about' className={`${styles.navLinkCustom} p-2 mx-2`}>About</NavLink>
        <NavLink to='portfolio' className={`${styles.navLinkCustom} p-2 mx-2`}>Portfolio</NavLink>
        <NavLink to='contact' className={`${styles.navLinkCustom} p-2 mx-2`}>Contact</NavLink>
      </NavbarCollapse>
    </Navbar>
  );
}
