
import coinImage from "../assets/coin/hero_coin_1.png";

function Hero() {
  return (

    <section
      className="relative w-full overflow-hidden bg-[#141413]"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="absolute left-1/2 -translate-x-1/2 rounded-full pointer-events-none"
        style={{
          width: "1500px",
          height: "1500px",
          top: "200px",
          zIndex: 0,
          background: "radial-gradient(circle, #BB63FF 0%, rgba(80, 95, 10, 0.25) 100%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div
        className="absolute left-1/2 -translate-x-1/2 rounded-full pointer-events-none"
        style={{
          width: "2500px",
          height: "2500px",
          top: "250px",
          zIndex: 1,
          backgroundColor: "#121318",
          boxShadow: "0px -80px 120px rgba(187, 99, 255, 0.15)",
        }}
      />

<div
  className="absolute left-1/2 -translate-x-1/2 coin-wrapper"
  style={{
    top: "100px",
    width: "320px",
    height: "320px",
    zIndex: 2,
  }}
>
  <img
    src={coinImage}
    alt="IYX Coin"
    className="w-full h-full object-contain coin"
  />

  {/* Shadow */}
  <div className="coin-shadow"></div>
</div>

      <div
        className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center text-center"
        style={{
          top: "440px",
          zIndex: 2,
          width: "700px",
        }}
      >

        <div className="flex flex-col items-center" style={{ gap: "1px" }}>

          <p className="text-[#fbec53] secondary-heading uppercase"
            style={{ fontSize: "24px", lineHeight: "0px" }}>
            Secure. Scalable.
          </p>

          <h1 className="text-white primary-heading uppercase whitespace-nowrap"
            style={{ fontSize: "56px", lineHeight: "0px" }}>
            Built for the Future.
          </h1>

          <p className="text-[#a3a3a3] text-center primary-paragraph"
            style={{ fontSize: "20px", lineHeight: "30px", maxWidth: "655px", marginTop: "-5px" }}>
            IYX is a next-generation digital asset built for secure, fast, and
            transparent transactions—designed to support real-world adoption
            and long-term growth.
          </p>

        </div>

        <div className="flex flex-row items-center" style={{ gap: "24px" }}>

          <button className="btn-primary">
            Buy IYX Coin
          </button>

          <button className="btn-secondary">
            Read Tokenomics
          </button>

        </div>
      </div>

    </section>
  );
}

export default Hero;