import "./list.css";

function Edittext(props) {
  return (
    <>
      (
      <input
        type="text"
        style={props.complete ? props. mystyle : {}}
        value={props.initial}
        className="text"
        onChange={(e) => {
          props.changetext(e);
        }}
      />
      <div className="b1">
        <button
          className="edit b2"
          onClick={() => props.handlesave(props.index)}
        >
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
      );
    </>
  );
}

export default Edittext;
