export default function Hero() {
  return (
    <section
      className="relative h-[500px] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1574629810360-7efbbe195018')",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative max-w-7xl mx-auto h-full flex items-center px-8">
        <div className="text-white">
          <span className="bg-red-500 px-3 py-1 rounded">
            Breaking News
          </span>

          <h1 className="text-5xl font-bold mt-4 max-w-3xl text-black"> 
  Manchester City Wins Dramatic Champions League Final 
</h1>

          <p className="mt-4 text-lg text-black">
            Latest football stories, transfer updates,
            and match analysis from around the world.
          </p>
        </div>
      </div>
    </section>
  );
}