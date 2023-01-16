import React from 'react'
import styles from "./Navbar.module.css"
import {FaBars} from 'react-icons/fa'
import {Menu,MenuButton,MenuList,MenuItem , Button} from '@chakra-ui/react'
import pdf from '../downloads/Snehil_Agrahari_Resume.pdf'

const Navbar = () => {

  return (
    <div className={styles.navbar}>
        <div className={styles.leftNav}>
            <p className={styles.heading}></p>
        </div>
        <div className={styles.largeNav}>
            <a href="#"><button className={styles.navButton}>Home</button></a>
            <a href="#about"><button className={styles.navButton}>About</button></a>
            <a href="#skills"><button className={styles.navButton}>Skills</button></a>
            <a href="#stats"><button className={styles.navButton}>Stats</button></a>
            <a href="#projects"><button className={styles.navButton}>Projects</button></a>
            <a href="#contact"><button className={styles.navButton}>Contact</button></a>
            <button className={styles.navButton}><a href={pdf} target="_blank" download >Resume</a></button>
        </div>
        <div className={styles.smallNav}>
            <Menu>
                <MenuButton as={Button} bgColor="none">
                    <FaBars />
                </MenuButton>
                <MenuList bgColor={'black'}>
                    <MenuItem className={styles.menuItem}><a href="#home">Home</a></MenuItem>
                    <MenuItem className={styles.menuItem}><a href="#about">About</a></MenuItem>
                    <MenuItem className={styles.menuItem}><a href="#skills">Skills</a></MenuItem>
                    <MenuItem className={styles.menuItem}><a href="#stats">Stats</a></MenuItem>
                    <MenuItem className={styles.menuItem}><a href="#projects">Projects</a></MenuItem>
                    <MenuItem className={styles.menuItem}><a href="#contact">Contact</a></MenuItem>
                    <MenuItem className={styles.menuItem}><a href={pdf} target="_blank" download >Resume</a></MenuItem>
                </MenuList>
            </Menu>
        </div>
    </div>
  )
}

export default Navbar