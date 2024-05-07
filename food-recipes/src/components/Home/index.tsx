import { ChangeEvent, useContext, useEffect, useState } from "react";
import "./index.css";
import DisplayData from "../Displaydata";
import InputContext from "../context/input";

type Data = {
  strMeal: string;
  strCategory: string;
  strMealThumb: string;
  strSource: string;
  strYoutube: string;
  idMeal: string;
};
type Search = {
  selectedItem?: string;
};

const Home = (props: Search) => {
  const [fetchedData, setFetchedData] = useState<Data[]>([]);
  const [filterdData, setFilterdData] = useState<Data[]>([]);
  const [selectedData, setSelectedData] = useState<string[]>([]);
  const [itemNotFound, setItemNotFound] = useState(false);
  const { selectedItem } = props;
  const { inputValue, setInputValue } = useContext(InputContext);

  useEffect(() => {
    if (selectedItem === "All Categories") {
      setFilterdData(fetchedData);
    } else {
      const filllter = fetchedData.filter(
        (each) => each.strCategory === selectedItem
      );
      setFilterdData(filllter);
    }
  }, [selectedItem]);

  useEffect(() => {
    const searchedData = fetchedData.filter((each) =>
      each.strMeal.toLowerCase().includes(inputValue.toLowerCase())
    );

    if (searchedData.length === 0 && inputValue.length !== 0) {
      setItemNotFound(true);
    } else {
      setItemNotFound(false);
    }
    setFilterdData(searchedData);
  }, [inputValue]);

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

  const retrySearching = () => {
    setItemNotFound(false);
    setInputValue("");
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
        {itemNotFound ? (
          <div className="not-found-container">
            <div className="not-found">
              <h6>No Such Item Found</h6>
              <button className="retry-btn" onClick={retrySearching}>
                Retry
              </button>
              <img
                className="not-found-image"
                src="https://elements-cover-images-0.imgix.net/41ce1856-ce64-47eb-9cc9-d50c75ba936b?auto=compress%2Cformat&w=900&fit=max&s=ba27396ca2b150afd778262eed2ec8af"
                alt="No Item Found"
              />
            </div>
          </div>
        ) : (
          <>
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
          </>
        )}
        {/* {fetchedData && (
          <ul className="recipe-main-container">
            {filterdData.length !== 0
              ? filterdData.map((each) => (
                  <DisplayData details={each} key={each.idMeal} />
                ))
              : fetchedData.map((each) => (
                  <DisplayData details={each} key={each.idMeal} />
                ))}
          </ul>
        )} */}
      </div>
    </div>
  );
};
export default Home;
