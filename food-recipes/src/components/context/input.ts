import React from "react";
import { createContext } from "react";
// type Input = {
//   inputValue: string;
// };

interface ContextInterface {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

const InputContext = createContext<ContextInterface>({
  inputValue: "",
  setInputValue: () => {},
});
export default InputContext;