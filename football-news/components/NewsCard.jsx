export default function NewsCard({ title, image, category }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
      <img
        src={image}
        alt={title}
        className="h-52 w-full object-cover"
      />

      <div className="p-4">
        <span className="text-green-700 font-semibold text-sm">
          {category}
        </span>

        <h2 className="font-bold text-lg mt-2">
          {title}
        </h2>
      </div>
    </div>
  );
}