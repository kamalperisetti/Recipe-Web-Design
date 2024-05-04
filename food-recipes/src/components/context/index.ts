import { createContext } from "react";

const menuState = createContext({
  state: false,
  onClickMenu: () => {},
});

export default menuState;
