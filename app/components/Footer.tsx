function Footer() {
  return (
    <footer className="py-8">
      <div className="container mx-auto text-center text-gray-400">
        <p className="text-sm">
          © 2024 Andrew Kamen - DJ Services in Pittsburgh
        </p>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="https://twitter.com" className="footer-highlight">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" className="footer-highlight">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://facebook.com" className="footer-highlight">
            <i className="fab fa-facebook"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
