import {
  createBrowserRouter,
  Route,
  Link,
  NavLink,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import RootLayout from "./layouts/RootLaoyout";

// <Link> é o href="" puro
// <NavLink> é o href="" porem uma classe active por default

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
    </Route>
  )
);

function App() {
  return (

    <RouterProvider router={router} />
  );
}

export default App;
