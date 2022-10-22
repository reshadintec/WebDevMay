function Persons(props) {
  return <div>
    <h1 style={{display:"inline-block"}}>{ props.name } </h1>:
    <h4 style={{display:"inline-block", color:"#000"}}>{props.age}</h4>
    </div>;
}

export default Persons;
