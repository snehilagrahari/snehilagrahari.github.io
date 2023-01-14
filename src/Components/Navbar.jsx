import React from 'react'
import styles from "./Navbar.module.css"
import {FaBars} from 'react-icons/fa'
import {Menu,MenuButton,MenuList,MenuItem , Button} from '@chakra-ui/react'

const Navbar = () => {

  return (
    <div className={styles.navbar}>
        <div className={styles.leftNav}>
            <p className={styles.heading}>Snehil Agrahari</p>
        </div>
        <div className={styles.largeNav}>
            <a href="#"><button className={styles.navButton}>Home</button></a>
            <a href="#about"><button className={styles.navButton}>About</button></a>
            <a href="#skills"><button className={styles.navButton}>Skills</button></a>
            <a href="#stats"><button className={styles.navButton}>Stats</button></a>
            <a href="#projects"><button className={styles.navButton}>Projects</button></a>
            <a href="#contact"><button className={styles.navButton}>Contact</button></a>
            <button className={styles.navButton}>Resume</button>
        </div>
        <div className={styles.smallNav}>
            <Menu>
                <MenuButton as={Button} bgColor="none">
                    <FaBars />
                </MenuButton>
                <MenuList bgColor={'black'}>
                    <a className={styles.a} href="#home"><MenuItem className={styles.menuItem}>Home</MenuItem></a>
                    <a className={styles.a} href="#about"><MenuItem className={styles.menuItem}>About</MenuItem></a>
                    <a className={styles.a} href="#skills"><MenuItem className={styles.menuItem}>Skills</MenuItem></a>
                    <a className={styles.a} href="#stats"><MenuItem className={styles.menuItem}>Stats</MenuItem></a>
                    <a className={styles.a} href="#projects"><MenuItem className={styles.menuItem}>Projects</MenuItem></a>
                    <a className={styles.a} href="#contact"><MenuItem className={styles.menuItem}>Contact</MenuItem></a>
                    <MenuItem className={styles.menuItem}>Resume</MenuItem>
                </MenuList>
            </Menu>
        </div>
    </div>
  )
}

export default Navbar