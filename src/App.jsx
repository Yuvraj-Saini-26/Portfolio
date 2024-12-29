import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { HOME,ABOUT,CONTACT, PROJECTS } from "./pages";
function App() {
  return (
    <main className="bg-slate-300/20">

      <Router>

        <Navbar />
        <Routes>
          <Route path="/" element={<HOME />}/>
          <Route path="/about" element={<ABOUT />}/>
          <Route path="/projects" element={<PROJECTS />}/>
          <Route path="/contact" element={<CONTACT />}/>
        </Routes>

      </Router>

    </main>
      )
}


export default App