import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./index.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
// type Data = {
//   strMeal: string;
//   strCategory: string;
//   strMealThumb: string;
//   strSource: string;
//   strYoutube: string;
//   idMeal: string;
// };
const DisplayData = (props: any) => {
  const [heartIcon, setHeartIcon] = useState(false);
  const [popup, setPopup] = useState(false);
  const [commentText, setCommnetText] = useState("");
  // const [likedRecipes, setLikedRecipes] = useState<Data[]>([]);
  const { details } = props;
  // console.log(details);
  // console.log(likedRecipes);

  const changeHeart = () => {
    setHeartIcon((prevState) => !prevState);
    // setLikedRecipes((prevState) => [...prevState, likedDetails]);
  };
  // const changeHeart = (d: Data) => {
  //   setHeartIcon((prevState) => !prevState);
  //   // const dummy = [...likedRecipes, d];
  //   // console.log(dummy);
  //   setLikedRecipes((prev) => [...prev, d]);
  //   // if (!heartIcon) {
  //   //   setLikedRecipes((prevState) => [...prevState, d]);
  //   // } else {
  //   //   setLikedRecipes((prevState) =>
  //   //     prevState.filter((recipe) => recipe.idMeal !== d.idMeal)
  //   //   );
  //   // }
  // };
  const addComment = () => {
    const comment = [];
    console.log(commentText);
    comment.push(commentText);
    setPopup(false);
  };
  const onCLickComment = () => {
    setPopup(true);
  };
  return (
    <li className="recipe-container">
      <div className="recipe-image-container">
        <img
          className="recipe-image"
          src={details.strMealThumb}
          alt="imagess"
        />
      </div>
      <div className="details-con">
        <div className="title-container">
          <h3 className="title">{details.strMeal}</h3>
          <p className="rating">
            <FaStar className="star-icon" /> 4.5
          </p>
        </div>
        <div className="link-container">
          <a href={details.strSource} target="_blank">
            Blog <FaExternalLinkAlt style={{ fontSize: "6px" }} />
          </a>
          <a href={details.strYoutube} target="_blank">
            Preparation Video <FaExternalLinkAlt style={{ fontSize: "6px" }} />
          </a>
        </div>

        <div className="time-con">
          <div>
            <p className="time">40 min</p>
          </div>
          <div className="icons-con">
            <button className="heart-btn" onClick={changeHeart}>
              {heartIcon ? <FaHeart className="red-heart" /> : <CiHeart />}
            </button>
            <Popup
              open={popup}
              trigger={
                <button className="heart-btn">
                  <FaRegComment onClick={onCLickComment} />
                </button>
              }
              modal
              nested
            >
              <div className="popup-container">
                <textarea
                  placeholder="Add Comments here...."
                  cols={50}
                  rows={30}
                  onChange={(e) => setCommnetText(e.target.value)}
                ></textarea>
                <button className="comment-btn" onClick={addComment}>
                  Add Commenet & Close
                </button>
              </div>
            </Popup>
          </div>
        </div>
      </div>
    </li>
  );
};

export default DisplayData;
