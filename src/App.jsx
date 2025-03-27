import { Routes, Route } from "react-router";
import Home from "../components/home/Home";
import Nav from "../components/Nav";
import FishCollection from "../components/fish/FishCollection";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fish" element={<FishCollection />} />
      </Routes>
    </div>
  );
}

export default App;
