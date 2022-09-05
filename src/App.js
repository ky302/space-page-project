import { BrowserRouter, Route, Routes } from "react-router-dom";
import Crew from "./contents/crew/Crew";
import Destination from "./contents/destination/Destination";
import Home from "./contents/Home";
import Technology from "./contents/technology/Technology";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;