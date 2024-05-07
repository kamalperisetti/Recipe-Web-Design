import { ChangeEvent, useEffect, useState } from "react";
import "./index.css";
import DisplayData from "../Displaydata";

type Data = {
  strMeal: string;
  strCategory: string;
  strMealThumb: string;
  strSource: string;
  strYoutube: string;
  idMeal: string;
};
// type Search = {
//   searched: string;
// };
// type Select = {
//   selected: string;
// };
const Home = (props: any) => {
  const [fetchedData, setFetchedData] = useState<Data[]>([]);
  const [filterdData, setFilterdData] = useState<Data[]>([]);
  const [selectedData, setSelectedData] = useState<string[]>([]);
  const { searched, selectedItem } = props;

  useEffect(() => {
    if (selectedItem === "All Categories") {
      setFilterdData(fetchedData);
    } else {
      const filllter = fetchedData.filter(
        (each) => each.strCategory === selectedItem
      );
      setFilterdData(filllter);
      console.log(filllter);
    }
  }, [selectedItem]);

  useEffect(() => {
    const searchedData = fetchedData.filter((each) =>
      each.strMeal.toLowerCase().includes(searched.toLowerCase())
    );
    setFilterdData(searchedData);
    // if (selectedItem === "All Categories") {
    //   setFilterdData(fetchedData);
    // } else {
    //   const filllter = fetchedData.filter(
    //     (each) => each.strCategory === selectedItem
    //   );
    //   setFilterdData(filllter);
    //   console.log(filllter);
    // }
  }, [searched]);

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
      } else {
        console.log(response);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getTheValue = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedData((prevState) => [...prevState, e.target.value]);
      setFilterdData((prev) => [
        ...prev,
        ...fetchedData.filter((each) => each.strCategory === e.target.value),
      ]);
    } else {
      setSelectedData((prevState) =>
        prevState.filter((each) => each !== e.target.value)
      );
      setFilterdData((prev) =>
        prev.filter(
          (each) =>
            each.strCategory !== e.target.value &&
            selectedData.includes(each.strCategory)
        )
      );
    }
  };

  return (
    <div>
      <div>
        <div className="background-image">
          <div className="image-slide">
            <div className="title-con">
              <p className="trending">Treanding now</p>
              <h3 className="heading">Mike's famous salad with cheese</h3>
              <p className="author">By Jhone Mike</p>
            </div>
          </div>
        </div>
        {/* <div className="btn-container">
          <button className="recipes-btn">Recipes & Menus</button>
          <button className="Share-btn">Share your recipe </button>
          <button className="Custom-btn">Custom meal plan</button>
          <button className="Create-btn">Create grocery list</button>
          <button className="Cooking-btn">Cooking Tips & Tricks</button>
        </div> */}
      </div>
      <div className="main-container-with-sidebar">
        <div className="sidebar-container">
          <div className="check-con">
            <input
              id="seafood"
              type="checkbox"
              value="Seafood"
              onChange={(e) => {
                getTheValue(e);
              }}
            />
            <label htmlFor="seafood">Seafood</label>
          </div>

          <div className="check-con">
            <input
              id="side"
              type="checkbox"
              value="Side"
              onChange={(e) => {
                getTheValue(e);
              }}
            />
            <label htmlFor="side">Side</label>
          </div>

          <div className="check-con">
            <input
              id="beff"
              type="checkbox"
              value="Beef"
              onChange={(e) => {
                getTheValue(e);
              }}
            />
            <label htmlFor="beff">Beef</label>
          </div>
          <div className="check-con">
            <input
              id="veg"
              value="Vegetarian"
              type="checkbox"
              onChange={(e) => {
                getTheValue(e);
              }}
            />
            <label htmlFor="veg">Vegetarian</label>
          </div>

          <div className="check-con">
            <input
              id="pork"
              type="checkbox"
              value="Pork"
              onChange={(e) => {
                getTheValue(e);
              }}
            />
            <label htmlFor="pork">Pork</label>
          </div>
          <div className="check-con">
            <input
              id="pasta"
              type="checkbox"
              value="Pasta"
              onChange={(e) => {
                getTheValue(e);
              }}
            />
            <label htmlFor="pasta">Pasta</label>
          </div>
        </div>
        {fetchedData && (
          <ul className="recipe-main-container">
            {filterdData.length !== 0
              ? filterdData.map((each) => (
                  <DisplayData details={each} key={each.idMeal} />
                ))
              : fetchedData.map((each) => (
                  <DisplayData details={each} key={each.idMeal} />
                ))}
          </ul>
        )}
      </div>
    </div>
  );
};
export default Home;
