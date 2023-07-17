import logo from "./logo.svg";
import "./App.css";
import Register from "./components/Auhtentication/Register/Register";
import Login from "./components/Auhtentication/Login/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
