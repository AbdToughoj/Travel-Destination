import { useState } from "react";
import { useParams } from "react-router";
function TourDetails(props) {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const { id } = useParams();

  const openedSite = props.data.filter((obj) => obj.id === id);

  if (openedSite?.length == 0) {
    return <div>There are no details for the provided ID</div>;
  }

  return (
    <div>
      <h1>{openedSite[0].name}</h1>
      <p className={showFullDescription ? "showAllText" : "showPartOfText"}>
        {openedSite[0].info}
      </p>
      <button onClick={() => setShowFullDescription(!showFullDescription)}>
        {showFullDescription ? "Show Less" : "Show More"}
      </button>
    </div>
  );
}

export default TourDetails;
