'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import HamburgerMenu from './HamburgerMenu';
import styles from '../Header.module.css';

export default function Header() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return() => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header className={styles.header}>
            <h1 className={styles.logo}>Andrew Kamen DJ</h1>
            <div className={styles.headerRight}>
                <Link href="/book" className={styles.bookNow}>Book Now</Link>
                {isMobile ? (
                    <HamburgerMenu />
                ) : (
                    <nav className={styles.navLinks}>
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/services">Services</Link>
                        <Link href="/contact">Contact</Link>
                        <Link href="/faq">FAQ</Link>
                    </nav>
                )}
            </div>
        </header>
    );
}