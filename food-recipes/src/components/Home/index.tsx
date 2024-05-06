import { ChangeEvent, useEffect, useState } from "react";
import "./index.css";
import DisplayData from "../Displaydata";
// import Navbar from "../Navbar";
// import { userSearch } from "../Navbar/index.tsx";

type Data = {
  strMeal: string;
  strCategory: string;
  strMealThumb: string;
  strSource: string;
  strYoutube: string;
  idMeal: string;
};
const Home = () => {
  const [fetchedData, setFetchedData] = useState<Data[]>([]);
  const [filterdData, setFilterdData] = useState<Data[]>([]);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  //   const searchInput = useContext(userSearch);
  //   console.log(searchInput, "KII");
  useEffect(() => {
    getTheData();
  }, []);
  const getTheData = async () => {
    const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
    const options = {
      method: "GET",
    };
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      if (response.ok) {
        setFetchedData(data.meals);
        setFilterdData(data.meals);
      } else {
        console.log(response);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getSeaFood = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    console.log(isChecked);
    if (!isChecked) {
      const filtered = fetchedData.filter(
        (each) => each.strCategory === "Seafood"
      );
      setFilterdData(filtered);
    } else {
      setFilterdData(fetchedData);
    }
  };

  const getSideFood = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    console.log(isChecked);
    if (!isChecked) {
      const filtered = fetchedData.filter(
        (each) => each.strCategory === "Side"
      );
      setFilterdData(filtered);
    } else {
      setFilterdData(fetchedData);
    }
  };
  const getVegFood = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    console.log(isChecked);
    if (!isChecked) {
      const filtered = fetchedData.filter(
        (each) => each.strCategory === "Vegetarian"
      );
      setFilterdData(filtered);
    } else {
      setFilterdData(fetchedData);
    }
  };

  const getPorkFood = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    console.log(isChecked);
    if (!isChecked) {
      const filtered = fetchedData.filter(
        (each) => each.strCategory === "Pork"
      );
      setFilterdData(filtered);
    } else {
      setFilterdData(fetchedData);
    }
  };

  const getPastaFood = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    console.log(isChecked);
    if (!isChecked) {
      const filtered = fetchedData.filter(
        (each) => each.strCategory === "Pasta"
      );
      setFilterdData(filtered);
    } else {
      setFilterdData(fetchedData);
    }
  };

  const getBeefFood = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    console.log(isChecked);
    if (!isChecked) {
      const filtered = fetchedData.filter(
        (each) => each.strCategory === "Beef"
      );
      setFilterdData(filtered);
    } else {
      setFilterdData(fetchedData);
    }
  };

  return (
    <div>
      {/* <Navbar /> */}
      <div>
        <div className="background-image">
          {/* <img
            className="image-slide"
            src="https://s3-alpha-sig.figma.com/img/7d4e/3fa3/3b0de3e0090f8898c24f6e2c892fee6f?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aVeKlo1H-zR58DjqIQQIKe-CLji1cMJxotREYfAS8HGmieK45f9siTw6HD6gdUV7NNGhXXyutoO25JtKT0ywgIhDmxCKJf9dD5W2dM~6m534Sw8rx3ycY6ebfwb3UDhaEuOD1Fx7tvSc5p~LYcrHtueAPxjhaJzcdLrXYWrHY-7N~zfqawhVt1gK8fqBkxbvsTKc1yMsDVXJgCkKcn1ZGGxbqoCqGWDa4jX7umFLoNu2JkyxnSb5j8pUJAb8NBQJ8P3wibRubmFz1yGNX1~VoSHo8DPBVl5L~nt~74i0usWQa-LxcK5suGueD-B1SchKRPwhx4BVmIncRC-g~JRqiA__"
          /> */}
          <div className="image-slide">
            <div className="title-con">
              <p className="trending">Treanding now</p>
              <h3 className="heading">Mike's famous salad with cheese</h3>
              <p className="author">By Jhone Mike</p>
            </div>
          </div>
        </div>
        <div className="btn-container">
          <button className="recipes-btn">Recipes & Menus</button>
          <button className="Share-btn">Share your recipe </button>
          <button className="Custom-btn">Custom meal plan</button>
          <button className="Create-btn">Create grocery list</button>
          <button className="Cooking-btn">Cooking Tips & Tricks</button>
        </div>
      </div>
      <div className="main-container-with-sidebar">
        <div className="sidebar-container">
          <div>
            <input id="seafood" type="checkbox" onChange={getSeaFood} />
            <label htmlFor="seafood">Seafood</label>
          </div>

          <div>
            <input id="side" type="checkbox" onChange={getSideFood} />
            <label htmlFor="side">Side</label>
          </div>

          <div>
            <input id="beff" type="checkbox" onChange={getBeefFood} />
            <label htmlFor="beff">Beef</label>
          </div>
          <div>
            <input id="veg" type="checkbox" onChange={getVegFood} />
            <label htmlFor="veg">Vegetarian</label>
          </div>

          <div>
            <input id="pork" type="checkbox" onChange={getPorkFood} />
            <label htmlFor="pork">Pork</label>
          </div>
          <div>
            <input id="pasta" type="checkbox" onChange={getPastaFood} />
            <label htmlFor="pasta">Pasta</label>
          </div>
        </div>
        {fetchedData && (
          <ul className="recipe-main-container">
            {filterdData.map((each) => (
              <DisplayData details={each} key={each.idMeal} />
              //   <li className="recipe-container" key={each.idMeal}>
              //     <div className="recipe-image-container">
              //       <img
              //         className="recipe-image"
              //         src={each.strMealThumb}
              //         alt="imagess"
              //       />
              //     </div>
              //     <div className="details-con">
              //       <div className="title-container">
              //         <h3 className="title">{each.strMeal}</h3>
              //         <p>
              //           <FaStar className="star-icon" /> 4.5
              //         </p>
              //       </div>
              //       <div className="link-container">
              //         <a href={each.strSource} target="_blank">
              //           Blog <FaExternalLinkAlt style={{ fontSize: "12px" }} />
              //         </a>
              //         <a href={each.strYoutube} target="_blank">
              //           Preparation Video{" "}
              //           <FaExternalLinkAlt style={{ fontSize: "12px" }} />
              //         </a>
              //       </div>

              //       <div className="time-con">
              //         <div>
              //           <p className="time">40 min</p>
              //         </div>
              //         <div className="icons-con">
              //           <button className="heart-btn" onClick={changeHeart}>
              //             {heartIcon ? (
              //               <FaHeart className="red-heart" />
              //             ) : (
              //               <CiHeart />
              //             )}
              //           </button>
              //           <button className="heart-btn">
              //             <FaRegComment />
              //           </button>
              //         </div>
              //       </div>
              //     </div>
              //   </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
export default Home;
