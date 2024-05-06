import { IoIosMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import "./index.css";
// import { useState, useContext } from "react";
// import { InputData } from "../../App";
import { useState } from "react";
// export const userSearch = createContext("");

const Navbar = () => {
  const [searchInput, setSearchInput] = useState<string>("hiiii");
  // const [searchInput, setSearchInput] = useContext(InputData);
  return (
    <div className="nav-container">
      <div className="logo-container">
        <IoIosMenu />
        <img
          className="logo-img"
          src="https://s3-alpha-sig.figma.com/img/e0ef/4f61/967cc7d034dc411ca2013fff2fed228d?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d3MQUsPYKo4Dubv3o4FvjG4xSRhw~T5yOZAYw6G9V7mZG3PM26Rj81UdjMxiTxgUOxbdq-HHP8fPOhjWVj9e8pQsaCs-XQ093pVdZfjFda9kfjUOFXyj0YP-otR-mQQ6ZvrHPyTqkklOzJMog73XkzJ8uHM174uUExG4BkmTEqXqTM0N1W07~fdWkG8fjoPHiIU8cYEokJxSXg~MeQMlpKgwJrdP1sKtP8~bDhIzsGHJ~zIWs15Lc6VWzb62hCE9ZNL5YtbryzfiPefY04tuqR5XF6rO4EFkdbT0UwXjFbBCIQ6cPgCDK5hUdZw6WuZJI1qyCDW1JG9rPIOz2A-FBg__"
          alt="logo"
        />
      </div>

      <div className="search-container">
        <select className="select">
          <option value="All Category">All Categories</option>
          <option value="Veg" className="option">
            Veg
          </option>
          <option value="Non-veg">Non-Veg</option>
        </select>
        <input
          className="input"
          type="search"
          value={searchInput}
          placeholder="Search for recipes"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <CiSearch className="search-icon" />
      </div>
      <div className="nav-options-section">
        <p className="home">Home</p>
        <p className="home">Explore</p>
        <p className="home">Help</p>
      </div>
      <div>
        <img
          className="profile-img"
          src="https://s3-alpha-sig.figma.com/img/28c2/2d0a/f96e56b91aae9daed41ea781c3d6dc58?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QZrPV2MfuYtzuWI5-od-1ptzD6ScWq7pLtavj6robAn7ZPTlHtqjiviL~WZPrfz3YzOLDqnGA9yayGhexRGPDK4Fo-r0vl7m9PZUJcjZo~EuwuLmicPC-wuCrF9lQEg0GdFI6IXdyQjDf3u~0UCfWqC7hPMOrb3fqdg1HMwFwTHmZrtgPmoRGf2i2waVGoDyWl3aCYQym4mJLC9nJpVdScbeGN-E7vAvv-GGEZqP3uJPwm8LzA0rsJpH9MeayLjAy-FupO0digNLJkj-y5iQ~Agw4FM95dBPsKyJoP0R4d2BFA6QsXxQkEngYE9pEPH0rNBxTAQ6i7A7eLYgZ1ahaQ__"
          alt="profile"
        />
      </div>
    </div>
  );
};

export default Navbar;
