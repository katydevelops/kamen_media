import './globals.css';

export const metadata = {
  title: "Andrew Kamen | Pittsburgh DJ Services",
  description: "Book Andrew Kamen, the premier wedding and event DJ in Pittsburgh, for your special day.",
  keywords: "Pittsburgh DJ, Wedding DJ, Event DJ Pittsburgh, Corporate DJ Pittsburgh, Best DJ in Pittsburgh",
  author: "Andrew Kamen",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Roboto:wght@300&display=swap" rel="stylesheet" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <title>{metadata.title}</title>
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

// Header Component
function Header() {
  return (
    <header className="header">
      <h1>Andrew Kamen DJ</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
        <a href="/faq">FAQ</a>
      </nav>
    </header>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Andrew Kamen - DJ Services in Pittsburgh</p>
    </footer>
  );
}
