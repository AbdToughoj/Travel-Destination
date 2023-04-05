import Header from "../header/Header";
import Tours from "../tours/Tours";
import Footer from "../footer/Footer";
import "./Home.css";

function Home(props) {
  const travelSites = props.data;

  return (
    <div>
      <Header />
      <div className="homeContainer">
        <Tours travelSites={travelSites} />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
