import "./navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div id="navbar">
      <div id="navbar_icon">
        <img src="https://www.seekpng.com/png/detail/372-3729023_open-google-music-icon-png.png"></img>
        <Link className="link" to={"/"}>
          <h1 id="name">π²ππππ</h1>
        </Link>
      </div>
      <div>
        <Link className="right_icons" to={"/playlist"}>
          ππ΅πͺππ΅π²πΌπ½
        </Link>
      </div>
    </div>
  );
};
