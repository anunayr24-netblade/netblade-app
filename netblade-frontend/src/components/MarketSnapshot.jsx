const marketData = [
  {
    name: "NIFTY 50",
    value: "22,450.75",
    bg: "bg-emerald-50",
    text: "text-emerald-600",
  },
  {
    name: "SENSEX",
    value: "73,890.45",
    bg: "bg-rose-50",
    text: "text-rose-600",
  },
  {
    name: "BANK NIFTY",
    value: "47,250.30",
    bg: "bg-sky-50",
    text: "text-sky-600",
  },
];

export default function MarketSnapshot() {
  return (
    <div className="max-w-5xl mx-auto mt-10">
      <div className="bg-white rounded-xl shadow-md border overflow-hidden">
        {marketData.map((item, index) => (
          <div
            key={item.name}
            className={`
              flex items-center justify-between
              px-6 py-4
              ${item.bg}
              ${index !== marketData.length - 1 ? "border-b" : ""}
            `}
          >
            <span className="font-medium text-slate-700">
              {item.name}
            </span>

            <span className={font-semibold ${item.text}}>
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}