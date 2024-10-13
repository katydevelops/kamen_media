
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Welcome to Kamen Media!</h1>
      <p>Your one-stop solution for wedding DJ and corporate videography services!</p>
      <nav>
        <Link href="/dj">DJ Services</Link>
        <br />
        <Link href="/videography">Videography Services</Link>
      </nav>
    </main>
  );
}
