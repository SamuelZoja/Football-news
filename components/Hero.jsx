export default function Hero() {
  return (
    <section
      className="relative h-[500px] bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://i.guim.co.uk/img/media/6bcfaa97aeba9f4da605b4f49fc9880d4ef039f5/0_0_3200_2009/master/3200.jpg?width=465&dpr=1&s=none&crop=none",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative max-w-7xl mx-auto h-full flex items-center px-8">
        <div className="text-white">
          <span className="bg-red-500 px-3 py-1 rounded">
            Breaking News
          </span>

          <h1 className="text-5xl font-bold mt-4 max-w-3xl">
            ARSENAL WIN DRAMATIC FINAL IN THE HERO 🏆
          </h1>

          <p className="mt-4 text-lg">
            Latest football stories, transfer updates,
            and match analysis from around the world.
          </p>
        </div>
      </div>
    </section>
  );
}