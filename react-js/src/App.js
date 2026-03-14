import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css"
// import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Courses from "./pages/courses/Courses";
import About from "./pages/about/About";

//? index.css - global css file 

function App() {

  // let url = window.location.href;
  // url = url.split("/").pop();
  // url = "/" + url
  // console.log(url)

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      {/* <Header>
    <h1>Hello from child</h1>
  </Header> */}

      {/* {url == "/" && <h1>Home page</h1>}
      {url == "/about" && <h1>About page</h1>}
      {url == "/contact" && <h1>Contact page</h1>} */}
    </>
  );
}

export default App;