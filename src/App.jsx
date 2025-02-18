import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingScreen from "./components/loading";
import Home from "./pages/Home";
import Logo from "./components/TrizzoneLogo";
import Header from "./components/header";
import PropertiesPage from "./components/properties";
import Hero1 from "./components/hero1";

function App() {
  return (

      <Routes>

        <Route path="/" element={<Hero1/>}>   
        {/* <Route path="/" element={<LoadingScreen />}> */}
          {/* <Route index element={<Home />} />
          <Route path="logo" element={<Logo />} />
          <Route path="properties" element={<PropertiesPage />} /> */}

        </Route>
      </Routes>

  
   
  );
}

export default App;
