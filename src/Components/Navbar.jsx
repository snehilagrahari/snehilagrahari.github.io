import React from 'react'
import styles from "./Navbar.module.css"
import {useDisclosure} from '@chakra-ui/react'
import pdf from '../downloads/fw21_1171_Snehil_Agrahari_Resume.pdf'
import NavbarDrawer from './NavbarDrawer'

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const link="https://drive.google.com/file/d/11qpa3yYgyWBe8SCwkltHt59UkYYvYIQE/view?usp=share_link";

    const handleResume = ()=>{
        window.open(link);
    }
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
            <a href={pdf} download="fw21_1171_Snehil_Agrahari_Resume" >
                <button className={styles.navButton} onClick={handleResume}>
                    Resume
                </button>
            </a>
        </div>
        <div className={styles.smallNav}>
            {/* <Menu>
                <MenuButton as={Button} bgColor="none">
                    <FaBars />
                </MenuButton>
                <MenuList bgColor={'black'}>
                    <MenuItem className={styles.menuItem} onClick={()=>window.location.assign('#about')}>Home</MenuItem>
                    <MenuItem className={styles.menuItem} onClick={()=>window.location.assign('#about')}>About</MenuItem>
                    <MenuItem className={styles.menuItem} onClick={()=>window.location.assign('#about')}>Skills</MenuItem>
                    <MenuItem className={styles.menuItem} onClick={()=>window.location.assign('#about')}>Stats</MenuItem>
                    <MenuItem className={styles.menuItem} onClick={()=>window.location.assign('#about')}>Projects</MenuItem>
                    <MenuItem className={styles.menuItem} onClick={()=>window.location.assign('#about')}>Contact</MenuItem>
                    <MenuItem className={styles.menuItem}><a href={pdf} target="_blank" download >Resume</a></MenuItem>
                </MenuList>
            </Menu> */}
            <NavbarDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} pdf={pdf} />
        </div>
    </div>
  )
}

export default Navbar