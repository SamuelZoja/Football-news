export default function Navbar() {
  return (
    <nav className="bg-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between">
        <h1 className="font-bold text-2xl">
          ⚽ Football News
        </h1>

        <div className="flex gap-6">
          <a href="#">Home</a>
          <a href="#">Premier League</a>
          <a href="#">La Liga</a>
          <a href="#">Champions League</a>
        </div>
      </div>
    </nav>
  );
}