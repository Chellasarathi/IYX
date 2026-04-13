
import logo from "../assets/logo/logo-1.png";


const navLinks = [
  { name: "About IYX", link: "/about", type: "route" },
  { name: "Community", link: "/community", type: "route" },
  { name: "Research", link: "/research", type: "route" },
  { name: "Solution", link: "/solution", type: "route" },
  { name: "Token Economic", link: "/token", type: "route" },
  { name: "Learn", link: "/learn", type: "route" },
];

function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-10 py-4 text-white"
      style={{
        backgroundColor: "rgba(20, 20, 19, 1)",
        fontFamily: "'Inter', sans-serif",
        fontSize: "16px",
        fontWeight: "400", 
        height: "70px",

      }}
    >
      {/* LEFT: Logo */}
      <div className="flex items-center">
        <a href="/" className="logo-link">
        <img src={logo} alt="IYX Logo" className="logo-img" />
        </a>
      </div>

      {/* CENTER: Nav Links */}
      <ul className="nav-links flex items-center list-none m-0 p-0" style={{ gap: "48px" }}>
        {navLinks.map((item) => (
          <li key={item.name}>                    
            <a                                    
              href={item.link}
              className="text-white font-normal hover:text-[#FBEC53] transition-colors duration-200"
            >
              {item.name}
            </a>                                  
          </li>                                   
        ))}
      </ul>

      {/* RIGHT: Buy IYX Button */}
      <div>
        <a href="https://inocyx.com/" target="_blank" rel="noopener noreferrer" className="btn-primary font-semibold text-sm mr-[30px]">
          Buy IYX
        </a>
      </div>

    </nav>
  );
}

export default Navbar;