import Link from 'next/link';

export default function Navar() {
    return (
        <nav className="navbar">
            <Link href="/dj">DJ</Link>
            <Link href="/videography">Videography</Link>
            <Link href="/contact">Contact</Link>
        </nav>
    );
}