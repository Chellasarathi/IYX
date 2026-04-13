import inch from "../assets/products/1inch.png";
import argent from "../assets/products/argent-wallet.png";
import coinbase from "../assets/products/coinbase.png";
import mew from "../assets/products/mew.png";
import okx from "../assets/products/okx.png";
import trezor from "../assets/products/trezor.png";
import exodus from "../assets/products/exodus.png";
import trust_wallet from "../assets/products/trust_wallet.png";

function Products() {
    return (
        <section className="products-section">

            <div className="products-section-header">
                <span className="Section-tag">IYX Coin</span>
                <h2 className="primary-heading products-section-heading">Products & Wallet Listed</h2>
            </div>

            {/* Cards */}
            <div className="products-cards products-slider">
              <div className="products-track">
                <div className="product-card"> 
                  <img src={inch} alt="1inch" />
                <div className="glow glow-bottom"></div>
                </div>

                <div className="product-card">
                  <img src={argent} alt="argent" />
                  <div className="glow glow-bottom"></div>
                </div>

                <div className="product-card">
                  <img src={coinbase} alt="coinbase" />
                  <div className="glow glow-bottom"></div>
                </div>

                <div className="product-card">
                  <img src={mew} alt="mew" />
                  <div className="glow glow-bottom"></div>
                </div>

                <div className="product-card">
                  <img src={okx} alt="okx" />
                  <div className="glow glow-bottom"></div>
                </div>

               <div className="product-card">
                  <img src={trezor} alt="trezor" />
                  <div className="glow glow-bottom"></div>
               </div>


               <div className="product-card">
                  <img src={trust_wallet} alt="trust_wallet" />
                  <div className="glow glow-bottom"></div>
               </div>

               <div className="product-card">
                 <img src={exodus} alt="exodus" />
                  <div className="glow glow-bottom"></div>
              </div>

              {/* Duplicate for infinite loop */}

              <div className="product-card"> 
                  <img src={inch} alt="1inch" />
                <div className="glow glow-bottom"></div>
                </div>

                <div className="product-card">
                  <img src={argent} alt="argent" />
                  <div className="glow glow-bottom"></div>
                </div>

                <div className="product-card">
                  <img src={coinbase} alt="coinbase" />
                  <div className="glow glow-bottom"></div>
                </div>

                <div className="product-card">
                  <img src={mew} alt="mew" />
                  <div className="glow glow-bottom"></div>
                </div>

                <div className="product-card">
                  <img src={okx} alt="okx" />
                  <div className="glow glow-bottom"></div>
                </div>

               <div className="product-card">
                  <img src={trezor} alt="trezor" />
                  <div className="glow glow-bottom"></div>
               </div>


               <div className="product-card">
                  <img src={trust_wallet} alt="trust_wallet" />
                  <div className="glow glow-bottom"></div>
               </div>

               <div className="product-card">
                 <img src={exodus} alt="exodus" />
                  <div className="glow glow-bottom"></div>
              </div>
            </div>
            </div>

        </section>
    );
}


export default Products;