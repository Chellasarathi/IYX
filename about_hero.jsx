function AboutHero() {
  return (
    <section className="relative  text-white min-h-[90vh] flex items-center justify-center overflow-hidden">


      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.6,
        }}
      />

      <div className="relative z-10 text-center max-w-4xl px-6">

        <h1 className="primary-heading uppercase">
          THE FUTURE OF DIGITAL VALUE – IYX
        </h1>

        <p className="primary-paragraph" style={{ lineHeight: "30px", maxWidth: "1050px", marginTop: "-5px" }}>
          IYX is more than just a cryptocurrency. It is a digital infrastructure
          built to support secure transactions, scalable applications, and a growing
          global community. With blockchain-powered transparency and smart technology
          integration, IYX aims to redefine digital finance.
        </p>

        <div className="flex flex-row items-center justify-center" style={{ gap: "24px" }}>
          <button className="btn-primary">Buy IYX Coin</button>
          <button className="btn-secondary">Read Tokenomics</button>
        </div>

      </div>
    </section>
  );
}

export default AboutHero;