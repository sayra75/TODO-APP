import "./list.css";
import { useState } from "react";

 
function Edittext(props) {
  const [edit, setedit] = useState(props.initial)
  function setedittext(e){
 setedit(e.target.value)


   }
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
        value={edit}
        className="text"
        onChange={(e) => {
          setedittext(e)
        }}
      />
      <div className="b1">
        <button
          className="edit b2"
          onClick={() => props.handlesave(props.index,edit)}>
          Save
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
