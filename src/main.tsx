import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Products from "./components/Products";
import ScrollManager from "./components/Scrollmanager";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ScrollManager />
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </main>
      <Contact />
    </div>
  </BrowserRouter>
);