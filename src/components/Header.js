import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateVal } from "../context/context";
import { otentikasi } from "../firebase";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const dropDownMenus = () => {
    setShowMenu((prev) => !prev);
  };

  const [{ cart, user }] = useStateVal();

  const userLog = () => {
    otentikasi.signOut();
  };

  const searchBar = (e) => {};

  return (
    <div className="header">
      <Link to="/">
        <img
          alt="amazon"
          className="header__logonya"
          src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/large-images-amazon-png-logo-vector-7.png3ft3d1416935166817"
        />
      </Link>

      <div className="header__opsinegara">
        <LocationOnIcon />
        <div className="header__opsinegaraaa">
          <p className="header__opsiBarisSatu">Deliver to</p>
          <p className="header__opsiBarisDua">Negara +62</p>
        </div>
      </div>

      <div className="header__search">
        <input
          type="text"
          className="header_searchInput"
          onChange={searchBar}
          placeholder="Input Search Masih Dalam Tahap Pengembangan..."
        />
        <SearchIcon className="header_searchIkon" />
      </div>

      <div className="header__navigasi">
        <Link to={!user ? "/login" : null} style={{ textDecoration: "none" }}>
          <div className="header__opsi" onClick={userLog}>
            <span className="header__opsiBarisSatu">
              Hallo {user ? "Yang Mulia" : "Tamu"}
            </span>
            <span className="header__opsiBarisDua">
              {user ? "Sign-Out" : "Sign-In"}
            </span>
          </div>
        </Link>

        <div className="header__opsi">
          <span className="header__opsiBarisSatu">Return</span>
          <span className="header__opsiBarisDua">& Orders</span>
        </div>

        <div>
          <div className="header__opsi" onClick={dropDownMenus}>
            <span className="header__opsiBarisSatu">Follow Me</span>
            <span className="header__opsiBarisDua">On Socmed</span>
          </div>
          {showMenu && (
            <div
              className="dropdown__menu"
              style={{ position: "absolute", marginTop: "5px" }}
            >
              <ul style={{ listStyle: "none" }}>
                <li
                  key={"instagram"}
                  style={{ marginTop: "10px", marginLeft: "-30px" }}
                >
                  <a
                    rel="noreferrer"
                    href="https://www.instagram.com/yonathan.sb/"
                    target="_blank"
                  >
                    Instagram
                  </a>
                </li>
                <li
                  key={"facebook"}
                  style={{ marginTop: "10px", marginLeft: "-30px" }}
                >
                  {" "}
                  <a
                    rel="noreferrer"
                    href="https://www.facebook.com/JoGoToSky"
                    target="_blank"
                  >
                    Facebook
                  </a>
                </li>
                <li
                  key={"linkedin"}
                  style={{ marginTop: "10px", marginLeft: "-30px" }}
                >
                  {" "}
                  <a
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/yonathan-simbolon-850229221/"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <Link to="/check-out">
        <div className="header__cart">
          <ShoppingBasketIcon />
          <span className="header__opsiBarisDua header__cartCount">
            {cart.length}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
