import Edittext from "./Edittext.jsx";
import "./list.css";

function Todoslist(props) {
  return props.isedit ? (
    <Edittext
      handledelete={props.handledelete}
      index={props.index}
      handlesave={props.handlesave}
      initial={props.initial}
      complete={props.complete}
      changetext={props.changetext}
      mystyle={props.mystyle}
      initialtext={props.initialtext}
    />
  ) : (
    <div
      id="text"
      key={props.index}
      value={props.item}
      style={props.complete ? props.mystylef : {}} >
      <div className="svg" style={props.complete ? { display: "flex" } : {}}>       
        <svg xmlns="http://www.w3.org/2000/svg " viewBox="0 0 448 512">
          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5
-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z "/>
        </svg>
      </div>
      <button
        onClick={(e) => props.handlestrike(props.index)}
        name={props.index}
        value={props.complete}
        className="b"
        style={props.complete ? props.mystylef : {}}
      >
        <div style={props.complete ? props.mystyle : {}} className="task">
         
          {props.initial}{" "}
        </div>
      </button>
      <div className="b1">
        <button
          value={props.isedit}
          className="edit b2"
          onClick={() => {
            props.handleedit(props.index);
          }}
        >
          Edit
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
  );
}
export default Todoslist;
