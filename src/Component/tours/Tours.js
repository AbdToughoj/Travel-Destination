import Tour from "./tour/Tour";
import "./Tours.css";

function Tours(props) {
  return (
    <div className="cardsContainer">
      {props.travelSites.map((site, index) => {
        return <Tour site={site} index={index} />;
      })}
    </div>
  );
}

export default Tours;
