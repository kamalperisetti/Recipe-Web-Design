import { useContext } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./index.css";
import InputContext from "../context/input";
const Profile = () => {
  const { likedVideo } = useContext(InputContext);
  const navigate = useNavigate();
  return (
    <div>
      <div className="profile-container">
        <img
          className="profile-section-img"
          src="https://s3-alpha-sig.figma.com/img/28c2/2d0a/f96e56b91aae9daed41ea781c3d6dc58?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QZrPV2MfuYtzuWI5-od-1ptzD6ScWq7pLtavj6robAn7ZPTlHtqjiviL~WZPrfz3YzOLDqnGA9yayGhexRGPDK4Fo-r0vl7m9PZUJcjZo~EuwuLmicPC-wuCrF9lQEg0GdFI6IXdyQjDf3u~0UCfWqC7hPMOrb3fqdg1HMwFwTHmZrtgPmoRGf2i2waVGoDyWl3aCYQym4mJLC9nJpVdScbeGN-E7vAvv-GGEZqP3uJPwm8LzA0rsJpH9MeayLjAy-FupO0digNLJkj-y5iQ~Agw4FM95dBPsKyJoP0R4d2BFA6QsXxQkEngYE9pEPH0rNBxTAQ6i7A7eLYgZ1ahaQ__"
          alt="profile"
        />
        <h4 className="user-name">User Name : Rajini Kanth</h4>
        <button
          className="home-btn"
          onClick={() => {
            navigate("/");
          }}
        >
          Home Section
        </button>
      </div>
      <hr />
      <h1 className="saved-title">Saved Videos</h1>
      {likedVideo.length === 0 ? (
        <div className="not-found-container">
          <div className="not-found">
            <h6>You didn't saved any video</h6>

            <img
              className="not-found-image"
              src="https://elements-cover-images-0.imgix.net/41ce1856-ce64-47eb-9cc9-d50c75ba936b?auto=compress%2Cformat&w=900&fit=max&s=ba27396ca2b150afd778262eed2ec8af"
              alt="No Item Found"
            />
          </div>
        </div>
      ) : (
        <ul className="recipe-main-container">
          {likedVideo.map((each) => (
            <li className="recipe-container" key={each.idMeal}>
              <div className="recipe-image-container">
                <img
                  className="recipe-image"
                  src={each.strMealThumb}
                  alt="imagess"
                />
              </div>
              <div className="details-con">
                <div className="title-container">
                  <h3 className="title">{each.strMeal}</h3>
                  <p className="rating">
                    <FaStar className="star-icon" /> 4.5
                  </p>
                </div>
                <div className="link-container">
                  <a href={each.strSource} target="_blank">
                    Blog <FaExternalLinkAlt style={{ fontSize: "6px" }} />
                  </a>
                  <a href={each.strYoutube} target="_blank">
                    Preparation Video{" "}
                    <FaExternalLinkAlt style={{ fontSize: "6px" }} />
                  </a>
                </div>

                <div className="time-con">
                  <div>
                    <p className="time">40 min</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Profile;
