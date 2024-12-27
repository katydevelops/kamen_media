// app/page.tsx
export default function HomePage() {
  return (
    <div>
      <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
        Pittsburgh&apos;s Premier <span className="text-amber-500">DJ Services</span>
      </h1>
      <p className="mt-4 text-lg text-gray-300">Making your event unforgettable with the perfect soundtrack.</p>
      <a
        href="/services"
        className="mt-6 inline-block px-6 py-3 text-lg font-semibold text-black bg-amber-500 rounded hover:bg-amber-400 transition-all shadow-lg hover:shadow-xl"
      >
        Explore DJ Services
      </a>
    </div>
  );
}
