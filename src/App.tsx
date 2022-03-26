import { Button, Container, TextField } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/Login";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="home" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
