import "./Tour.css";

function Tour(props) {
  return (
    <a href={`city/${props.site.id}`} key={props.index} className="cardLink">
      <div className="card">
        <img src={props.site.image} alt={props.site.name} className="cardImg" />
        <div className="cardBody">
          <h2 className="cardTitle">{props.site.name}</h2>
        </div>
      </div>
    </a>
  );
}

export default Tour;
