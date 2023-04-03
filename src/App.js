import Home from './Component/home/Home';
import Header from "./Component/header/Header";
import Footer from "./Component/footer/Footer";
import Tours from "./Component/tours/Tours";
const ToursData = require("./data/db.json")

function App() {
  return (
    <>
    <Home/>
    <Header/>
    <Footer/>
    {
      ToursData.map(data=>{
        return(
          <Tours name={data.name} image={data.image} />
        )
      })
    }
    </>
  );
}

export default App;
