import React from "react";
import { createContext } from "react";
type Data = {
  strMeal: string;
  strCategory: string;
  strMealThumb: string;
  strSource: string;
  strYoutube: string;
  idMeal: string;
};
interface ContextInterface {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  menuIcon: boolean;
  setMenuIcon: React.Dispatch<React.SetStateAction<boolean>>;
  likedVideo: Data[];
  setLikedVideo: React.Dispatch<React.SetStateAction<Data[]>>;
}

const InputContext = createContext<ContextInterface>({
  inputValue: "",
  setInputValue: () => {},
  selected: "",
  setSelected: () => {},
  menuIcon: false,
  setMenuIcon: () => {},
  likedVideo: [],
  setLikedVideo: () => {},
});
export default InputContext;
