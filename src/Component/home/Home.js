import Header from "../header/Header";
import Tours from "../tours/Tours";
import Footer from "../footer/Footer";

function Home(props) {
  const data = props.data;
  return (
    <div>
      <Header />
      <div className="cardsContainer">
        {data.map((data) => {
          return <Tours name={data.name} image={data.image} />;
        })}
      </div>

      <Footer />
    </div>
  );
}

export default Home;
