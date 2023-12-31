import {Route, Routes } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Example from "./pages/Example";
import Example2 from "./pages/Example2";
import Example3 from "./pages/Example3";
import Aside from "./components/Aside";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import Example4 from "./pages/Example4";
import Datepicker from "./pages/Datepicker";



function App() {

  const light = {
    colors:{
      Primary : "pink",
      Secondary : "orangered",
      BgColor : "#e9f1f6",
      Color : "#000",
      ContentBg:"#fff"
    }
  }
  const dark = {
    colors:{
      Primary : "#272929",
      Secondary : "white",
      BgColor : "#333",
      Color : "#e9e9e9",
      ContentBg:"#272929"

    }
  }
  
  const [themeConfig, setThemeConfig] = useState("light");
  const DarkMode = themeConfig === 'light' ? light : dark ;
  const ThemeSelect = ()=>{
    setThemeConfig(themeConfig === 'light' ? 'dark' : 'light')
  }

  return (
    <>
    
    <ThemeProvider theme={DarkMode}>
    <GlobalStyle/>
    <Aside ThemeSelect={ThemeSelect} themeConfig={themeConfig} />
    <ul>
      
      {/* 리액트에선 a태그 대신 무조건 NavLink 임 */}
    </ul>
    <Routes>
      {/* <Route path="/" element={<Main />}></Route> */}
    {/* 내가본처음화면을 보여주겠다. path="/" */}
    <Route path="/" element={<Main/>}></Route>
    <Route path="/detail/:seq" element={<Detail/>}></Route>
    <Route path="/example3" element={<Example3/>}></Route>
    <Route path="/example4" element={<Example4/>}></Route>
    <Route path="/example" element={<Example/>}></Route>
    <Route path="/date" element={<Datepicker/>}></Route>
    </Routes>
    {/* 계속 고정되는건 Routes 밖에 써주면됨 */}

    
    </ThemeProvider>
    </>

  );
}

export default App;
