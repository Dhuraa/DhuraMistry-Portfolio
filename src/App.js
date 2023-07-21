import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import Pdf from "./documents/DhuraMistry_Resume.pdf";
import { HashLink } from "react-router-hash-link";
import {
  BrowserRouter,
} from "react-router-dom";



const App = () => {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <About/>
        <Skills />
        <Work />
        <Contact />
        {/* <RouterProvider router={router} /> */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
