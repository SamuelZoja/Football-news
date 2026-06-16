const trends = [
  "Mbappe Transfer Rumours",
  "Arsenal New Signing",
  "Liverpool Injury Update",
  "Champions League Draw",
  "Chelsea Squad Changes",
];

export default function Trending() {
  return (
    <div className="bg-white rounded-xl shadow p-5">
      <h2 className="font-bold text-xl mb-4">
        Trending
      </h2>

      <ul className="space-y-3">
        {trends.map((item, index) => (
          <li
            key={index}
            className="border-b pb-2 cursor-pointer hover:text-green-700"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}