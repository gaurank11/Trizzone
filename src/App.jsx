import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingScreen from "./components/loading";
import Home from "./pages/Home";
import Logo from "./components/TrizzoneLogo";
import Header from "./components/header";

function App() {
  return (

      <Routes>
        <Route path="/" element={<LoadingScreen />}>
          <Route index element={<Home />} />
          <Route path="logo" element={<Logo />} />
        </Route>
      </Routes>

  
   
  );
}

export default App;
