function Tours(props) {
  return (
    <div className="abdallah">
      <h2 style = {{"border-top": "2px solid black", "margin-top": "100px"}} >{props.name}</h2>
      <img src={props.image} alt={props.name} />
    </div>
  );
}

export default Tours;
