import "./navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div id="navbar">
      <div id="navbar_icon">
        <img src="https://www.seekpng.com/png/detail/372-3729023_open-google-music-icon-png.png"></img>
        <Link className="link" to={"/"}>
          <h1 id="name">𝕲𝖆𝖓𝖓𝖆</h1>
        </Link>
      </div>
      <div>
        <Link className="right_icons" to={"/playlist"}>
          𝓟𝓵𝓪𝔂𝓵𝓲𝓼𝓽
        </Link>
      </div>
    </div>
  );
};
