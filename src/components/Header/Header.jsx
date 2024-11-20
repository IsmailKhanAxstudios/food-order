import { useState } from "react";
import { LOGO_URL } from "../../utils/constant";
import { Link } from "react-router-dom";
import useUserStatus from "../../utils/useUserStatus";
import { useContext } from "react";
import Profile from "../../utils/Profile";
import { useSelector } from "react-redux";
const Header = () => {
  const [loginBtn, setLogiBtn] = useState("Log In");
  const isOnline = useUserStatus();
  const { loginUser } = useContext(Profile);

  const noOfItems = useSelector((state) => state.cart.items);

  return (
    <div className="header flex justify-between bg-zinc-100 items-center">
      <div className="logo-container">
        <img className="logo w-24" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul className="flex gap-10 ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          {/* 
          <li>
            <Link to="/lazyload">LazyLoad</Link>
          </li> */}
          <li>
            <Link to="/cart">Cart - {noOfItems.length}</Link>
          </li>
          <li>{loginUser}</li>
          <li>
            <div
              className={
                isOnline
                  ? "online w-4 h-4 bg-green-600 rounded-full"
                  : "offline  w-4 h-4 bg-red-600 rounded-full"
              }
            ></div>
          </li>
        </ul>
      </div>

      <div className="toggle-btn button mr-8">
        <button
          onClick={(e) => {
            loginBtn === "Log In"
              ? setLogiBtn("Log Out")
              : setLogiBtn("Log In");
          }}
        >
          {loginBtn}
        </button>
      </div>
    </div>
  );
};

export default Header;
