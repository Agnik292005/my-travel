import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./routers/Home";
import Hotels from "./routers/Hotels";
import About from "./routers/About";
import Gallery from "./routers/Gallery";
import News from "./routers/News";
import Contact from "./routers/Contact";
import AboutDetails from "./routers/AboutDetails"; // Import the new page

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/discovermore" element={<AboutDetails />} /> 
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

