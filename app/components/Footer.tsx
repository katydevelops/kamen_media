function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4 text-center border-t border-gray-700 mt-auto">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Andrew Kamen - DJ Services in Pittsburgh</p>
        <div className="flex justify-center gap-x-6 mt-2"> {/* Adjusted space */}
          <a href="#" className="text-white hover:text-gray-400 no-underline">Twitter</a>
          <a href="#" className="text-white hover:text-gray-400 no-underline">Instagram</a>
          <a href="#" className="text-white hover:text-gray-400 no-underline">Facebook</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
