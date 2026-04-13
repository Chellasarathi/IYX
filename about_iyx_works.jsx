
const data = [
  {
    title: "Smart Integration",
    desc: " Through smart contracts and ecosystem tools, IYX enables automated, secure, and trustless digital interactions.",
  },
  {
    title: "Ecosystem Utility",
    desc: "IYX is integrated into its growing ecosystem — enabling payments, rewards, staking, and future decentralized applications..",
  },
  {
    title: "Blockchain Technology",
    desc: "IYX operates on secure blockchain infrastructure that records every transaction transparently and immutably.",
  },
];


function Aboutiyxworks() {
  return (


    <section className="ecosystem about_iyx_works">
      <div className="ecosystem-container">

        <div className="ecosystem-left right-grid-container">
          <span className="Section-tag align-left">How IYX Works</span>

          <h2 className="primary-heading">
            Powering Secure <br />
            Digital Transactions
          </h2>

          <p className="primary-paragraph">
            IYX processes every transaction through a decentralized and secure system designed for speed, transparency, and reliability.
          </p>
        </div>

        <div className="left-grid-cards-2">
          {data.map((item, i) => (
            <div className="left-grid-card-2" key={i}>
              <h3 className="left-grid-card-heading">{item.title}</h3>
              <p className="left-grid-card-paragraph">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Aboutiyxworks;