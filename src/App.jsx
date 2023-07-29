import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

// <Link> é o href="" puro
// <NavLink> é o href="" porem uma classe active por default

function App() {
  return (
    <BrowserRouter>
    <header>
      <nav>
        <h1>Jobrouter</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
