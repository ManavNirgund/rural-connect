import "./App.css";
import Register from "./components/Auhtentication/Register/Register";
import Login from "./components/Auhtentication/Login/Login";
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./components/Dashboards/Admin/AdminDashboard";
import Header from "./components/Header/Header";
import Private from "./components/Auhtentication/Login/Private";
import Forecast from "./components/Dashboards/Users/Forecast/Forecast";
import RequireAuth from "./components/Auhtentication/Login/RequireAuth";
import LandingPage from "./components/LandingPage/LandingPage";
import WeatherAppFooter from "./components/Footer/Footer";
import News from "./components/News/News";
import IndianNews from "./components/News/IndianNews";
import { ToastContainer } from "react-toastify";
import ContentWriter from "./components/ContentWriter/ContentWriter";
import Feed from "./components/ContentWriter/Feed";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/admin"
          element={
            <Private>
              <AdminDashboard />
            </Private>
          }
        ></Route>
        <Route
          path="/forecast"
          element={
            <RequireAuth>
              {" "}
              <Forecast />{" "}
            </RequireAuth>
          }
        />
        <Route
          path="/news"
          element={
            <RequireAuth>
              {" "}
              <News />{" "}
            </RequireAuth>
          }
        />
        <Route
          path="/local-news"
          element={
            <RequireAuth>
              {" "}
              <IndianNews />{" "}
            </RequireAuth>
          }
        />
        <Route
          path="/publish"
          element={
            <RequireAuth>
              {" "}
              <ContentWriter />{" "}
            </RequireAuth>
          }
        />

        <Route
          path="/feed"
          element={
            <RequireAuth>
              {" "}
              <Feed />{" "}
            </RequireAuth>
          }
        />
      </Routes>

      <WeatherAppFooter />
      <ToastContainer position="top-center" />
    </div>
  );
}

export default App;
