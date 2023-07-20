import "./App.css";
import Register from "./components/Auhtentication/Register/Register";
import Login from "./components/Auhtentication/Login/Login";
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./components/Dashboards/Admin/AdminDashboard";
import Header from "./components/Header/Header";
import Private from "./components/Auhtentication/Login/Private";
import Forecast from "./components/Forecast/Forecast";

function App() {

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/admin"
          element={
            <Private>
              <AdminDashboard />
            </Private>
          }
        ></Route>
        <Route path="/forecast" element={<Forecast />}></Route>
      </Routes>
    </div>
  );
}

export default App;
