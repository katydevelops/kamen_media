// app/page.tsx
export default function HomePage() {
  return (
    <div>
      <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
        Pittsburgh&apos;s Premier <span className="text-amber-500">DJ Services</span>
      </h1>
      <p className="mt-4 text-lg text-gray-300">Making your event unforgettable with the perfect soundtrack.</p>
      <a href="/services" className="cta">Explore DJ Services</a>
    </div>
  );
}
