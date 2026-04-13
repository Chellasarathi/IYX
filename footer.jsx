import logo from "../assets/logo/logo-1.png";
import QR from "../assets/qr/iyx_qr.png";
import { useState } from "react";

const data = [
  { country: "India", currency: "INR - ₹" },
  { country: "USA", currency: "USD - $" },
  { country: "UK", currency: "GBP - £" },
  { country: "Japan", currency: "JPY - ¥" },
  { country: "Europe", currency: "EUR - €" },
];

const IconBox = ({ children }) => (
  <div
    style={{
      width: 48,
      height: 48,
      borderRadius: 12,
      background: "rgba(91,87,234,0.12)",
      border: "1px solid rgba(91,87,234,0.15)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {children}
  </div>
);

const Footer = () => {
  const [selectedCountry, setSelectedCountry] = useState("India");
  const [selectedCurrency, setSelectedCurrency] = useState("INR - ₹");
  const handleCountryChange = (e) => {
  const country = e.target.value;

  const selected = data.find((item) => item.country === country);

  if (!selected) return;

  setSelectedCountry(country);
  setSelectedCurrency(selected.currency);
};

const handleCurrencyChange = (e) => {
  const currency = e.target.value;

  const selected = data.find((item) => item.currency === currency);

  if (!selected) return;

  setSelectedCurrency(currency);
  setSelectedCountry(selected.country);
};

  return (
    <footer className="footer">

      <div className="footer-box">
        

        {/* LEFT SECTION */}
        <div className="footer-left">

          <div className="footer-brand">
            <img src={logo} alt="logo" />
          </div>

          {/* Country */}
          <div className="footer-select">
            <label>Country/region</label>
            <div className="select-wrapper">
            <select
              value={selectedCountry}
              onChange={handleCountryChange}
              className="select">
                  {data.map((item) => (
                    <option key={item.country} value={item.country}>
                      {item.country}
                    </option>
                  ))}
                </select>
                </div>
              </div>

          {/* Currency */}
          <div className="footer-select">
            <label>Currency</label><br></br>
            <div className="select-wrapper">
            <select className="select" value={selectedCurrency} onChange={handleCurrencyChange}>
              {data.map((item) => (
                <option key={item.currency} value={item.currency}>
                  {item.currency}
                </option>
             ))}
            </select>
          </div>
            
          </div>

          <div style={{ height: 1.5, background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 50%, transparent 100%)", marginTop:"10px", }} />
          {/* Contact */}
          <div className="footer-contact">
            <p className="quaternary-paragraph">Contact Us On</p>
            <div className="flex gap-3 icon-row">
                
                <svg className="item-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path stroke="#5B57EA" stroke-width="1.5" d="M17 12a5 5 0 1 0-4.478-2.774a.82.82 0 0 1 .067.574l-.298 1.113a.65.65 0 0 0 .796.796l1.113-.298a.82.82 0 0 1 .574.067A5 5 0 0 0 17 12Z"/><path fill="#5B57EA" d="m14.1 16.027l-.543-.516zm.456-.48l.544.517zm2.417-.335l-.374.65zm1.91 1.1l-.374.65zm.539 3.446l.543.517zm-1.42 1.496l-.545-.517zm-1.326.71l.074.745zm-9.86-4.489l.543-.516zm-4.813-9.51l-.749.041zm6.475 1.538l.543.517zm.156-2.81l.613-.433zM7.374 4.91l-.613.433zM4.26 4.609l.544.516zM2.691 6.26l-.543-.516zm7.372 7.795l.544-.517zm4.582 2.488l.455-.48l-1.088-1.033l-.455.48zm1.954-.682l1.91 1.1l.749-1.3l-1.911-1.1zm2.279 3.38l-1.42 1.495l1.087 1.034l1.42-1.496zm-2.275 1.975c-1.435.141-5.18.02-9.244-4.258l-1.087 1.033c4.429 4.663 8.654 4.898 10.478 4.717zm-9.244-4.258c-3.876-4.081-4.526-7.523-4.607-9.033l-1.498.08c.1 1.85.884 5.634 5.018 9.986zm1.376-6.637l.286-.302l-1.087-1.033l-.287.302zm.512-4.062L7.986 4.477l-1.225.866l1.26 1.783zm-5.53-2.168L2.149 5.745l1.088 1.033l1.57-1.653zm4.474 5.713a38 38 0 0 0-.545-.515l-.002.002l-.003.003l-.05.058a1.6 1.6 0 0 0-.23.427c-.098.275-.15.639-.084 1.093c.13.892.715 2.091 2.242 3.7l1.088-1.034c-1.428-1.503-1.78-2.428-1.846-2.884c-.032-.22 0-.335.013-.372l.008-.019a.3.3 0 0 1-.037.047l-.005.005l-.003.003l-.001.001s-.002.002-.545-.515m1.328 4.767c1.523 1.604 2.673 2.234 3.55 2.377c.451.073.816.014 1.092-.095a1.5 1.5 0 0 0 .421-.25l.036-.034l.014-.014l.01-.01h.001c0-.002.002-.002-.542-.519c-.544-.516-.543-.517-.543-.518l.002-.001l.002-.003l.005-.005l.01-.01l.037-.032q.015-.008-.004.001c-.02.008-.11.04-.3.009c-.402-.066-1.27-.42-2.703-1.929zM7.986 4.477C6.972 3.043 4.944 2.8 3.718 4.092l1.087 1.033c.523-.55 1.444-.507 1.956.218zM2.752 7.926c-.022-.4.152-.8.484-1.148L2.148 5.745c-.536.564-.943 1.347-.894 2.261zm14.705 12.811c-.279.294-.57.452-.854.48l.147 1.492c.747-.073 1.352-.472 1.795-.939zM9.021 10.02c.969-1.02 1.036-2.613.226-3.76l-1.225.866c.422.597.357 1.392-.088 1.86zm9.488 6.942c.821.473.982 1.635.369 2.28l1.087 1.033c1.305-1.374.925-3.673-.707-4.613zm-3.409-.898c.385-.406.986-.497 1.499-.202l.748-1.3c-1.099-.632-2.46-.45-3.335.47z"/></g></svg>
                <div className="icon-text">
                 <p className="icon-subtext">Mon - Fri (09:00 AM - 7:00 PM)</p>
                  <p className="icon-main-text">+91-6383087224</p>
                </div>
            </div>
            
            <div className="flex gap-3">
            <svg className="item-icon" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><rect width="416" height="320" x="48" y="96" fill="none" stroke="#5B57EA" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="40" ry="40"/><path fill="none" stroke="#5B57EA" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m112 160l144 112l144-112"/></svg>
            <div className="icon-text">
                 <p className="icon-subtext">Mail Us</p>
                  <p className="icon-main-text">support@inocxy.com</p>
            </div>
            
            </div>
          </div>
          
            <div style={{ height: 1.5, background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 50%, transparent 100%)", marginTop:"10px", }} />
          {/* Download */}
          <div><p className="quaternary-paragraph">Download App</p></div>
          <div className="footer-download">
            
            <a href="https://play.google.com/store/apps/details?id=com.application.inocyx" target="_blank" rel="noopener noreferrer"><svg  className="item-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#5B57EA" d="m3.637 3.434l8.74 8.571l-8.675 8.65a2.1 2.1 0 0 1-.326-.613a2.5 2.5 0 0 1 0-.755V4.567c-.026-.395.065-.79.26-1.133m12.506 4.833l-2.853 2.826L4.653 2.6c.28-.097.58-.124.873-.078c.46.126.899.32 1.302.573l7.816 4.325c.508.273 1.003.56 1.498.847M13.29 12.93l2.839 2.788l-2.058 1.146l-6.279 3.49c-.52.287-1.042.561-1.55.874a1.8 1。8 0 0 1-1。472。195zm7。36-.925a1。92 1。92 0 0 1-.99 1。72l-２。３４６ １。３０２l-３。０８７-３。０２２l３。１-３。０７４c。７９５。４４３ １。５７７。８８６ ２。３５８ １。３０３a１。８９ １。８９ 0 0 １ .９６４ １。７７１"/></svg>
</a>
            <a href="https://apps.apple.com/in/app/inocyx-buy-trade-crypto/id6444437433" target="_blank" rel="noopener noreferrer"><svg className="item-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#5B57EA" d="M17.05 20.28c-.98.95-2.05.8-3.08.35c-1.09-.46-2.09-.48-3.24 0c-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8c1.18-.24 2.31-.93 3.57-.84c1.51.12 2.65.72 3.4 1.8c-3.12 1.87-2.38 5.98.48 7.13c-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25c.29 2.58-2.34 4.5-3.74 4.25"/></svg>
</a>
            
            <div className="scan-qr-wrapper">
  <div className="scan-qr">
    <a className="flex items-center gap-2">
      <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#5B57EA" d="M5.13 5.295C5 5.477 5 5.735 5 6.25s0 .773.13.955a.7.7 0 0 0 .165.166c.182.129.44.129.955.129s.773 0 .955-.13a.7.7 0 0 0 .166-.165c.129-.182.129-.44.129-.955s0-.773-.13-.955a.7.7 0 0 0-.165-.166C7.023 5 6.765 5 6.25 5s-.773 0-.955.13a.7.7 0 0 0-.166.165"/><path fill="#5B57EA" fill-rule="evenodd" d="M8.704 1.29c.443.042.855.134 1.233.365c.37.227.681.538.908.908c.231.378.323.79.365 1.233c.04.423.04.944.04 1.568v1.188c0 .898 0 1.648-.08 2.242c-.084.628-.27 1.195-.726 1.65c-.455.456-1.022.642-1.65.726c-.594.08-1.344.08-2.242.08H5.364c-.624 0-1.145 0-1.568-.04c-.443-.042-.855-.134-1.233-.365a2.75 2.75 0 0 1-.908-.908c-.231-.378-.323-.79-.365-1.233c-.04-.423-.04-.944-.04-1.568v-.074c0-.95 0-1.716.059-2.333c.06-.636.188-1.19.494-1.688A3.75 3.75 0 0 1 3.04 1.803c.498-.306 1.052-.434 1.688-.494c.617-.059 1.383-.059 2.333-.059h.074c.624 0 1.145 0 1.568.04m-.142 1.493C8.218 2.751 7.77 2.75 7.1 2.75c-.997 0-1.691 0-2.229.052c-.526.05-.824.143-1.047.28a2.25 2.25 0 0 0-.742.742c-.137.223-.23.521-.28 1.047C2.75 5.41 2.75 6.103 2.75 7.1c0 .67 0 1.118.033 1.462c.032.333.088.488.151.591c.103.168.245.31.413.413c.103.063.258.119.59.15c.345.033.794.034 1.463.034h1.1c.964 0 1.612-.002 2.095-.067c.461-.062.659-.169.789-.3s.237-.327.3-.788c.064-.483.066-1.131.066-2.095V5.4c0-.67 0-1.118-.033-1.462c-.032-.333-.088-.488-.151-.591a1.25 1.25 0 0 0-.413-.413c-.103-.063-.258-.119-.59-.15" clip-rule="evenodd"/><path fill="#5B57EA" d="M16.63 5.295c-.13.182-.13.44-.13.955s0 .773.13.955a.7.7 0 0 0 .165.166c.182.129.44.129.955.129s.773 0 .955-.13a.7.7 0 0 0 .166-.165C19 7.023 19 6.765 19 6.25s0-.773-.13-.955a.7.7 0 0 0-.165-.166C18.523 5 18.265 5 17.75 5s-.773 0-.955.13a.7.7 0 0 0-.166.165"/><path fill="#5B57EA" fill-rule="evenodd" d="M16.864 1.25h.074c.95 0 1.716 0 2.333.059c.636.06 1.19.188 1.688.494c.505.309.93.733 1.238 1.238c.306.498.434 1.052.494 1.688c.059.617.059 1.383.059 2.333v.074c0 .624 0 1.145-.04 1.568c-.042.443-.134.855-.365 1.233c-.227.37-.538.681-.908.908c-.378.231-.79.323-1.233.365c-.423.04-.944.04-1.568.04h-1.188c-.899 0-1.648 0-2.242-.08c-.628-.084-1.195-.27-1.65-.726c-.456-.455-.642-1.022-.726-1.65c-.08-.594-.08-1.344-.08-2.242V5.364c0-.624 0-1.145.04-1.568c.042-.443.134-.855.365-1.233a2.75 2.75 0 0 1 .908-.908c.378-.231.79-.323 1.233-.365c.423-.04.944-.04 1.568-.04m-1.426 1.533c-.333.032-.488.088-.591.151a1.25 1.25 0 0 0-.413.413c-.063.103-.119.258-.15.59c-.033.345-.034.794-.034 1.463v1.1c0 .964.002 1.612.066 2.095c.063.461.17.659.3.789s.328.237.79.3c.482.064 1.13.066 2.094.066h1.1c.67 0 1.118 0 1.462-.033c.333-.032.488-.088.591-.151a1.25 1.25 0 0 0 .413-.413c.063-.103.119-.258.15-.59c.033-.345.034-.794.034-1.463c0-.997 0-1.691-.052-2.229c-.05-.526-.143-.824-.28-1.047a2.25 2.25 0 0 0-.742-.742c-.223-.137-.521-.23-1.047-.28c-.538-.051-1.232-.052-2.229-.052c-.67 0-1.118 0-1.462.033" clip-rule="evenodd"/><path fill="#5B57EA" d="M5 17.75c0-.515 0-.773.13-.955a.7.7 0 0 1 .165-.166c.182-.129.44-.129.955-.129s.773 0 .955.13a.7.7 0 0 1 .166.165c.129.182.129.44.129.955s0 .773-.13.955a.7.7 0 0 1-.165.166C7.023 19 6.765 19 6.25 19s-.773 0-.955-.13a.7.7 0 0 1-.166-.165C5 18.523 5 18.265 5 17.75"/><path fill="#5B57EA" fill-rule="evenodd" d="M8.794 12.83c.628.084 1.195.27 1.65.726c.456.455.642 1.022.726 1.65c.08.594.08 1.343.08 2.242v1.188c0 .624 0 1.145-.04 1.568c-.042.442-.134.855-.365 1.233c-.227.37-.538.681-.908.908c-.378.232-.79.323-1.233.365c-.423.04-.944.04-1.568.04h-.074c-.95 0-1.716 0-2.333-.059c-.636-.06-1.19-.188-1.688-.494a3.75 3.75 0 0 1-1.238-1.238c-.306-.498-.434-1.052-.494-1.688c-.059-.617-.059-1.383-.059-2.333v-.074c0-.624 0-1.145.04-1.568c.042-.442.134-.855.365-1.233a2.75 2.75 0 0 1 .908-.908c.378-.231.79-.323 1.233-.365c.423-.04.944-.04 1.568-.04h1.188c.898 0 1.648 0 2.242.08m-.2 1.486c-.482-.064-1.13-.066-2.094-.066H5.4c-.67 0-1.118 0-1.462.034c-.333.031-.488.087-.591.15a1.25 1.25 0 0 0-.413.413c-.063.103-.119.258-.15.59c-.033.345-.034.794-.034 1.463c0 .997 0 1.691.052 2.229c.05.526.143.824.28 1.047c.185.302.44.557.742.742c.223.137.521.23 1.047.28c.538.051 1.232.052 2.229.052c.67 0 1.118 0 1.462-.034c.333-.031.488-.087.591-.15a1.25 1.25 0 0 0 .413-.413c.063-.103.119-.258.15-.59c.033-.345.034-.794.034-1.463v-1.1c0-.964-.002-1.612-.067-2.095c-.062-.461-.169-.659-.3-.789s-.327-.237-.788-.3" clip-rule="evenodd"/><path fill="#5B57EA" d="M16.962 12.75H19v1.5h-2c-.718 0-1.2 0-1.567.038c-.355.036-.519.1-.627.173a1.3 1.3 0 0 0-.345.345c-.073.108-.137.272-.173.627c-.037.367-.038.85-.038 1.567h-1.5v-.038c0-.67 0-1.229.046-1.681c.048-.474.153-.913.418-1.309c.2-.3.458-.558.758-.758c.396-.265.835-.37 1.309-.418c.452-.046 1.011-.046 1.68-.046M12.75 22v-3h1.5v3a.75.75 0 0 1-1.5 0m10-8.5a.75.75 0 0 0-1.5 0V17h1.5zm-1.5 5.5c0 .476 0 .796-.017 1.043c-.017.241-.046.358-.078.435a1.25 1.25 0 0 1-.677.677c-.077.032-.194.061-.435.078c-.247.017-.567.017-1.043.017h-2v1.5h2.025c.445 0 .816 0 1.12-.02c.317-.022.617-.069.907-.19a2.75 2.75 0 0 0 1.489-1.488c.12-.29.167-.59.188-.907c.021-.304.021-.675.021-1.12V19zm-5.081-2.556C16 16.697 16 17.048 16 17.75s0 1.053.169 1.306a1 1 0 0 0 .275.275c.253.169.604.169 1.306.169s1.053 0 1.306-.169a1 1 0 0 0 .275-.275c.169-.253.169-.604.169-1.306s0-1.053-.169-1.306a1 1 0 0 0-.275-.275C18.803 16 18.452 16 17.75 16s-1.053 0-1.306.169a1 1 0 0 0-.275.275"/></svg>

      <p className="qr-paragraph">Scan QR Code</p>
    </a>
  </div>

  {/* QR IMAGE */}
  <div className="qr-popup">
    <img src={QR}alt="QR Code" />
  </div>
</div>
          </div>

        </div>
          {/* VERTICAL SEPARATOR (FIXED) */}
          <div style={{ width: 1.5, background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 50%, transparent 100%)" }} />

        {/* RIGHT SECTION */}
        <div className="footer-right">

          {/* LINKS */}
          <div className="footer-links">

            <div>
              <h4>Company</h4>
              <a>About Us</a>
              <a>Blogs</a>
              <a>Fees</a>
              <a>White Paper</a>
              <a>Careers</a>
              <a>API Documentation</a>
            </div>

            <div>
              <h4>Connect</h4>
              <a>Help Center</a>
              <a>Assets Listing</a>
              <a>Submit A Ticket</a>
              <a>Customer Support</a>
            </div>

            <div>
              <h4>Legal</h4>
              <a>Terms & Conditions</a>
              <a>Privacy Policy</a>
              <a>Refund Policy</a>
              <a>Law Enforcement</a>
            </div>

          </div>

          {/* SOCIAL */}
          <div className="footer-social">
            
            <span>Follow us on</span>
            <div className="icons">
              <div><a href="https://www.instagram.com/inocyx?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M3 11c0-3.771 0-5.657 1.172-6.828S7.229 3 11 3h2c3.771 0 5.657 0 6.828 1.172S21 7.229 21 11v2c0 3.771 0 5.657-1.172 6.828S16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172S3 16.771 3 13zm15-3.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M14 13a2 2 0 1 1-4 0a2 2 0 0 1 4 0m2 0a4 4 0 1 1-8 0a4 4 0 0 1 8 0" clip-rule="evenodd"/></svg></a></div>
              <div><a href="https://www.facebook.com/people/Inocyx/100083436154588/" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"/></svg></a></div>
              <div><a href="https://www.linkedin.com/company/inocyx/" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/></svg></a></div>
              <div><a href="https://www.youtube.com/channel/UCv9OPOSaJqQAe7ljg2d5lBg" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"/></svg></a></div>
              <div> <a href="https://t.me/+REthv9EvpLBjNzVl" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.994 2a10 10 0 1 0 10 10a10 10 0 0 0-10-10m3.18 15.152a.705.705 0 0 1-1.002.352l-2.715-2.11l-1.742 1.608a.3.3 0 0 1-.285.039l.334-2.989l.01.009l.007-.059s4.885-4.448 5.084-4.637c.202-.189.135-.23.135-.23c.012-.23-.361 0-.361 0l-6.473 4.164l-2.695-.918s-.414-.148-.453-.475c-.041-.324.466-.5.466-.5l10.717-4.258s.881-.392.881.258Z"/></svg></a></div>
              <div><a href="https://medium.com/@inocyx" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M8 6a6 6 0 1 1 0 12A6 6 0 0 1 8 6m9 1c1.5 0 2.5 2.239 2.5 5s-1 5-2.5 5s-2.5-2.239-2.5-5s1-5 2.5-5m4 .5c.38 0 .712.827.88 2.246l.047.443l.019.235l.03.494l.01.259l.012.541L22 12l-.002.282l-.012.541l-.01.26l-.03.493l-.02.235l-.045.443c-.169 1.42-.5 2.246-.881 2.246c-.38 0-.712-.827-.88-2.246l-.047-.443l-.019-.235l-.03-.494l-.01-.259l-.012-.541v-.564l.012-.541l.01-.26l.03-.493l.02-.235l.045-.443c.169-1.42.5-2.246.881-2.246"/></g></svg></a></div>
            </div>
          </div>

          <div
  style={{
    height: 1,
    width: "100%",
    margin: "30px 0",
    background:
      "linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent)",
  }}
/>

          {/* NEWSLETTER */}
          <div className="footer-newsletter">
            <p className="small">JOIN OUR NEWSLETTER</p>
            <h3>Subscribe to our newsletter now!</h3>

            <div className="newsletter-box">
              <input type="email" placeholder="jane@email.com" />
              <button className="newsletter_btn">Subscribe</button>
            </div>
          </div>

        </div>

      </div>

      {/* BOTTOM */}
      <p className="footer-bottom">
        © Copyright 2025 - INOCYX
      </p>

    </footer>
  );
};

export default Footer;