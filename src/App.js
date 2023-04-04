import Home from './Component/home/Home';
const ToursData = require("./data/db.json")

function App() {
  return (
    <>
      <Home data={ToursData} />
    </>
  );
}

export default App;
