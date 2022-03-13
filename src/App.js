import "./App.css";
import { Navbar } from "./components/navbar";
import { Home } from "./components/home";
import { PlayList } from "./components/playlist";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/playlist" element={<PlayList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
