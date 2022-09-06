
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";


import "./App.css";

import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavigationBar";
import Contact from "./components/Contact/Contact";
import Careers from "./components/Careers/Careers";
import { ColorContext } from './extra/Context/ColorContext';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [color, setColor] = useLocalStorage("pink");

  return (
    <div className="App">
      <ColorContext.Provider value={{color, setColor}}>
        <NavBar />
      </ColorContext.Provider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

    </div>
  );
}

export default App;
