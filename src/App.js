import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Header from "./components/Header";
import Booking from "./pages/Booking";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  );
}
