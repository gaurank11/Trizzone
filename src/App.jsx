import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import TrizzoneLogo from "./components/TrizzoneLogo";
import LoadingScreen from "./components/loading";
import Header from "./components/header";



export default function App() {
  const [loading, setLoading] = useState(true);
  
  return (
    <div>
      {loading ? (
        <LoadingScreen onComplete={() => setLoading(false)} />
      ) : (
      
        <>
        <Header />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/logo" element={<TrizzoneLogo/>} />
          
          </Routes>
   
        </>
  )}
    </div>
  );
}
