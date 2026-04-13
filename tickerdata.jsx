const tickerdata = [
  { name: "BTC/INR", price: "₹5,820,000", change: "+0.78%" },
  { name: "ETH/INR", price: "₹182,000", change: "-0.06%" },
  { name: "XRP/INR", price: "₹52.40", change: "+1.56%" },
  { name: "ADA/INR", price: "₹38.10", change: "-1.58%" },
  { name: "DOGE/INR", price: "₹12.80", change: "-1.32%" },
  { name: "SOL/INR", price: "₹9,200", change: "+2.14%" },
];

export default function Ticker() {
  return (
    <div className="ticker">
      <div className="ticker-track">
        {[...tickerdata, ...tickerdata].map((coin, i) => (
          <div className="ticker-item" key={i}>
            <span className="coin">{coin.name}</span>
            <span className="price">{coin.price}</span>
            <span
              className={`change ${
                coin.change.includes("+") ? "up" : "down"
              }`}
            >
              {coin.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}