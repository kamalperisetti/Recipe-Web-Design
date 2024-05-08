// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import InputContext from "./components/context/input";
// import Profile from "./components/profile";

// function App() {
//   return (
//     <div className="app">
//       {/* <Navbar /> */}
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Navbar />} />
//           {/* <Route path="/profile" element={<Profile />} /> */}
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

function App() {
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [menuIcon, setMenuIcon] = useState(false);
  return (
    <InputContext.Provider
      value={{
        inputValue,
        setInputValue,
        selected,
        setSelected,
        menuIcon,
        setMenuIcon,
      }}
    >
      <div className="app">
        <Navbar />
        {/* <Route path="/" element={} /> */}
        {/* <Route path="/profile" element={<Profile />} /> */}
      </div>
    </InputContext.Provider>
  );
}

export default App;
