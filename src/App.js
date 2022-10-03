import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Header from "./components/Header";
import Booking from "./pages/Booking";
import SingleComponent from "./components/SingleComponent";
import MainPage from "./pages/MainPage";
import Signup from "./components/Signup";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/single/:id" element={<SingleComponent />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  );
}
