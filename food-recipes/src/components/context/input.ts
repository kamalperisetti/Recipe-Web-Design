import React from "react";
import { createContext } from "react";

interface ContextInterface {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  menuIcon: boolean;
  setMenuIcon: React.Dispatch<React.SetStateAction<boolean>>;
}

const InputContext = createContext<ContextInterface>({
  inputValue: "",
  setInputValue: () => {},
  selected: "",
  setSelected: () => {},
  menuIcon: false,
  setMenuIcon: () => {},
});
export default InputContext;
