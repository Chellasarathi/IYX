import React from "react";
import fastIcon from "../assets/icons/solar-bolt.svg";
import lock from "../assets/icons/light-lock.svg";
import tradedown from "../assets/icons/trade-down.svg";
import globe from "../assets/icons/globe.svg";

function WhyIyx() {
  return (
    <section className="Features-section">

      {/* Header */}
      <div className="Features-section-header">
        <span className="Section-tag">Why IYX Coin</span>
        <h2 className="primary-heading Features-section-heading">Designed for a Decentralized Future</h2>
      </div>

      {/* Grid */}
      <div className="Features-section-grid">

        <div className="Features-section-item">
          <div className="icon-heading-row">

            <svg className="item-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#5B57EA" stroke-width="1.5" d="m5.67 9.914l3.062-4.143c1.979-2.678 2.969-4.017 3.892-3.734s.923 1.925.923 5.21v.31c0 1.185 0 1.777.379 2.148l.02.02c.387.363 1.003.363 2.236.363c2.22 0 3.329 0 3.704.673l.018.034c.354.683-.289 1.553-1.574 3.29l-3.062 4.144c-1.98 2.678-2.969 4.017-3.892 3.734s-.923-1.925-.923-5.21v-.31c0-1.185 0-1.777-.379-2.148l-.02-.02c-.387-.363-1.003-.363-2.236-.363c-2.22 0-3.329 0-3.703-.673l-.019-.034c-.354-.683.289-1.552 1.574-3.29Z"/></svg>

            <h3 className="primary-heading">Fast Transactions</h3>
          </div>
          <p className="tertiary-paragraph">
            Experience near-instant transfers powered by a high-performance blockchain network.
          </p>
        </div>

        <div className="Features-section-item">
          <div className="icon-heading-row">

          <svg className="item-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#5B57EA" stroke-width="1"><path d="M4.5 13.5c0-1.886 0-2.828.586-3.414S6.614 9.5 8.5 9.5h7c1.886 0 2.828 0 3.414.586s.586 1.528.586 3.414v1c0 2.828 0 4.243-.879 5.121c-.878.879-2.293.879-5.121.879h-3c-2.828 0-4.243 0-5.121-.879C4.5 18.743 4.5 17.328 4.5 14.5z"/><path stroke-linecap="round" d="M16.5 9.5V8a4.5 4.5 0 1 0-9 0v1.5"/></g></svg>

          <h3 className="primary-heading">Secure & Reliable</h3>
          </div>
          <p className="tertiary-paragraph">
            Built with advanced cryptographic security ensuring transparent and tamper-resistant transactions.
          </p>
        </div>

        <div className="Features-section-item">
          <div className="icon-heading-row">
          <svg className="item-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#5B57EA" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M20 11v5h-5"/><path d="m20 16l-5-5c-.883-.883-1.324-1.324-1.865-1.373a1.5 1.5 0 0 0-.27 0c-.541.05-.982.49-1.865 1.373s-1.324 1.324-1.865 1.373q-.135.012-.27 0c-.541-.05-.982-.49-1.865-1.373L4 8"/></g></svg>

          <h3 className="primary-heading">Low Transaction Fees</h3>
          </div>
          <p className="tertiary-paragraph">
            Minimized costs make IYX suitable for everyday transactions and large-scale usage.
          </p>
        </div>

        <div className="Features-section-item">
          <div className="icon-heading-row">
            <svg className="item-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="#5B57EA" d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0-15c.657 0 1.407.59 2.022 1.908c.217.466.406 1.002.559 1.592H7.419c.153-.59.342-1.126.56-1.592C8.592 3.59 9.342 3 10 3M7.072 4.485A10.5 10.5 0 0 0 6.389 6.5H3.936a7.02 7.02 0 0 1 3.778-3.118c-.241.33-.456.704-.642 1.103M6.192 7.5A16 16 0 0 0 6 10c0 .87.067 1.712.193 2.5H3.46A7 7 0 0 1 3 10c0-.88.163-1.724.46-2.5zm.197 6c.176.743.407 1.422.683 2.015c.186.399.401.773.642 1.103A7.02 7.02 0 0 1 3.936 13.5zm1.03 0h5.162a9.3 9.3 0 0 1-.56 1.592C11.408 16.41 10.658 17 10 17s-1.407-.59-2.022-1.908A9.3 9.3 0 0 1 7.42 13.5m5.375-1H7.206A15 15 0 0 1 7 10c0-.883.073-1.725.206-2.5h5.588c.133.775.206 1.617.206 2.5s-.073 1.725-.206 2.5m.817 1h2.453a7.02 7.02 0 0 1-3.778 3.118c.241-.33.456-.704.642-1.103c.276-.593.507-1.272.683-2.015m2.93-1h-2.734c.126-.788.193-1.63.193-2.5s-.067-1.712-.193-2.5h2.733c.297.776.46 1.62.46 2.5s-.163 1.724-.46 2.5m-4.255-9.118A7.02 7.02 0 0 1 16.064 6.5H13.61a10.5 10.5 0 0 0-.683-2.015a6.6 6.6 0 0 0-.642-1.103"/></svg>

            <h3 className="primary-heading">Decentralized Control</h3>
          </div>
          <p className="tertiary-paragraph">
            Full ownership with no central authority. Users control their assets completely.
          </p>
        </div>
      </div>

    </section>
  );
}

export default WhyIyx;