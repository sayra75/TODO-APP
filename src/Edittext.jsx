import "./list.css";

function Edittext(props) {
  return (
    <>
        <div
      id="text"
      key={props.index}
      value={props.item}
      style={props.complete ? props.mystylef : {}}
    >
      <input
        type="text" 
        style={props.complete ? props. mystyle : {}}
        value={props.initial}
        className="text"
        onChange={(e) => {
          props.setedittext(e)
        }}
      />
      <div className="b1">
        <button
          className="edit b2"
          onClick={() => props.handlesave(props.index)}>
          save
        </button>
        <button
          className="delete b2"
          onClick={() => {
            props.handledelete(props.index);
          }}
        >
          Delete
        </button>
      </div>
      </div>
    </>
  );
}

export default Edittext;
