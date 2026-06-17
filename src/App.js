// import Navbar from "./components/Navbar"; 
// import Home from "./components/Home";
// import AboutMe from "./components/AboutMe";
// import Projects from "./components/Projects";
// import Experience from "./components/Experience";
// import Certifications from "./components/Certifications";
// import "./App.css";

// function App() {
//   return (
//     <div
//   className="app-background"
//   style={{
//     backgroundImage: `url(${process.env.PUBLIC_URL + "/images/back.avif"})`,
//   }}
// >
//       <Navbar />
//       <Routes>
//           <Route path="/" element={<Home/>} />
//           <Route path="/AboutMe" element={<AboutMe/>} />
//           <Route path="/Projects" element={<Projects/>} />
//           <Route path="/Experience" element={<Experience/>} />
//           <Route path="/Certifications" element={<Certifications/>} />
//       </Routes>
//    </div>
//   );
// }

// export default App;

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import "./App.css";

function App() {
  return (
    <div
      className="app-background"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/images/back.avif"})`,
      }}
    >
      <Navbar />

      <div id="home">
        <Home />
      </div>

      <div id="about">
        <AboutMe />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="experience">
        <Experience />
      </div>

      <div id="certifications">
        <Certifications />
      </div>
    </div>
  );
}

export default App;
