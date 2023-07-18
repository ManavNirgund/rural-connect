import logo from "./logo.svg";
import "./App.css";
import Register from "./components/Auhtentication/Register/Register";
import Login from "./components/Auhtentication/Login/Login";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Users/Dashboard";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">

      {/* <Header /> */}

      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="allusers" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
