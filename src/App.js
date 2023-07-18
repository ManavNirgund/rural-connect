import logo from "./logo.svg";
import "./App.css";
import Register from "./components/Auhtentication/Register/Register";
import Login from "./components/Auhtentication/Login/Login";
import { useNavigate, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Users/Dashboard";
import Header from "./components/Header/Header";
import useRequireAuth from "./components/utilities/useRequireAuth";
import Private from "./components/Auhtentication/Login/PrivateRoute";

function App() {
  const { isAuthenticated, isAdmin } = useRequireAuth();

  return (
    <div className="App">
      {/* <Header /> */}

      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/allusers"
          element={
            <Private>
              <Dashboard />
            </Private>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
