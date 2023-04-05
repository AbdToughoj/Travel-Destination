import { Routes, Route } from "react-router-dom";
import Home from "./Component/home/Home";
import TourDetails from "./Component/TourDetails/TourDetails";
const ToursData = require("./data/db.json");

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home data={ToursData} />}></Route>
        <Route
          path="/city/:id"
          element={<TourDetails data={ToursData} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
