import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import NewsCard from "../components/NewsCard";
import Trending from "../components/Trending";

const news = [
  {
    title: "Manchester United Prepare Summer Bid",
    category: "Transfers",
    image:
      "https://images.unsplash.com/photo-1518604666860-9ed391f76460",
  },
  {
    title: "Arsenal Extend Winning Run",
    category: "Premier League",
    image:
      "https://images.unsplash.com/photo-1508098682722-e99c643e7485",
  },
  {
    title: "Barcelona Star Suffers Injury",
    category: "La Liga",
    image:
      "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d",
  },
  {
    title: "Real Madrid Eye Young Talent",
    category: "Transfers",
    image:
      "https://images.unsplash.com/photo-1486286701208-1d58e9338013",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* NEWS SECTION */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-bold mb-6">
              Latest News
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {news.map((item, index) => (
                <NewsCard
                  key={index}
                  title={item.title}
                  image={item.image}
                  category={item.category}
                />
              ))}
            </div>
          </div>

          {/* TRENDING */}
          <Trending />
        </div>
      </div>

      {/* STANDINGS */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">
            League Standings
          </h2>

          <table className="w-full border">
            <thead className="bg-green-700 text-white">
              <tr>
                <th className="p-3">Pos</th>
                <th className="p-3">Club</th>
                <th className="p-3">Pts</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border">
                <td className="p-3">1</td>
                <td className="p-3">Manchester City</td>
                <td className="p-3">82</td>
              </tr>

              <tr className="border">
                <td className="p-3">2</td>
                <td className="p-3">Arsenal</td>
                <td className="p-3">80</td>
              </tr>

              <tr className="border">
                <td className="p-3">3</td>
                <td className="p-3">Liverpool</td>
                <td className="p-3">76</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}