import About from "./About";
import "./App.css";
// import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
// import Company from "./Company";

// import Project from "./Project";
import Service from "./Service";
import Table from "./Table";
import Serve from "./Serve";

function App() {
  return (
    <div className="App">
       <Home />
       <Service />
       <About />
       {/* <Project /> */}
       <Serve/>
       <Table />
      
       {/* <Company/> */}
       <Contact />
       <Footer />
    </div>
  );
}

export default App;
