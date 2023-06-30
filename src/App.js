import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Home/>,
  // },
  {
    path: "/",
    element: <About/>,
  },
  {
    path: "/skills",
    element: <Skills/>,
  },
  {
    path: "/work",
    element: <Work/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
]);

const App = () => {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
      <Footer/>
    </div>
  );
};

export default App;
