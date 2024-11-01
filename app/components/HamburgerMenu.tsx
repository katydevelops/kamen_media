import { useState } from 'react';
import styles from './HamburgerMenu.module.css';

export default function HamburgerMenu() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={styles.nav}>
            <div className={styles.menuIcon} onClick={toggleMenu}>☰</div>
            <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}