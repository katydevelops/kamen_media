function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4 text-center border-t border-gray-700 mt-auto">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Andrew Kamen - DJ Services in Pittsburgh</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-gray-400">Twitter</a>
          <a href="#" className="hover:text-gray-400">Instagram</a>
          <a href="#" className="hover:text-gray-400">Facebook</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
