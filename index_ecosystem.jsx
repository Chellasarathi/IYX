import React from "react";

const data = [
  {
    title: "Our Own Crypto – Exchange",
    desc: "Innovative exchange built for seamless trading within the IYX ecosystem.",
  },
  {
    title: "Our Own Learning Platform",
    desc: "Blockchain education and internet learning through INOYX Learning.",
  },
  {
    title: "Fast Settlement",
    desc: "Funds and crypto are transferred quickly and securely.",
  },
  {
    title: "Our Own Metaverse",
    desc: "A virtual world experience powered by INOCYX Metaverse.",
  },
];

const Ecosystem = () => {
  return (
    <section className="ecosystem">
      <div className="ecosystem-container">

        <div className="ecosystem-left right-grid-container">
          <span className="Section-tag align-left">The IYX Ecosystem</span>

          <h2 className="primary-heading">
            A Connected & Scalable <br />
            Blockchain Ecosystem
          </h2>

          <p className="primary-paragraph">
            The IYX ecosystem brings together wallets, decentralized applications,
            and community-driven tools to support real-world blockchain adoption.
          </p>
        </div>

        <div className="left-grid-cards">
          {data.map((item, i) => (
            <div className="left-grid-card" key={i}>
              <h3 className="left-grid-card-heading">{item.title}</h3>
              <p className="left-grid-card-paragraph">{item.desc}</p>
              <div className="card-box">Image</div>
            </div>
          ))}
        </div>
        

      </div>
    </section>
  );
};

export default Ecosystem;
