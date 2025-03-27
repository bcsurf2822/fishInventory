import { Routes, Route } from "react-router"
import Home from "../components/home/Home"
import Nav from "../components/Nav"

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
