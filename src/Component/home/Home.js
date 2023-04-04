import Header from "../header/Header";
import Tours from "../tours/Tours";
import Footer from "../footer/Footer";

function Home(props) {
    const data = props.data;
  return (
    <>
      <Header />
      {
      data.map((data) => {
        return <Tours name={data.name} image={data.image} />;
      })
      }
      <Footer />
    </>
  );
}

export default Home;
