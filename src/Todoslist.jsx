import Edittext from "./Edittext.jsx";
import "./list.css";
function Todoslist( props ) {
    
return  props.isedit ? (
    <Edittext handledelete={props.handledelete} 
    index={props.index} 
    handlesave={props.handlesave}
    initial={props.initial}
     complete={props.complete}
     changetext={props.changetext}
     mystyle={props.mystyle}
     seteditext={props.seteditext}
     edit={props.edit}/>
  ) :
    (
  
   <div
      id="text"
      key={props.index}
      value={props.item}
      style={props.complete ? props.mystylef : {}}
    >
      <input type="checkbox" onChange={(e) => { props.handlestrike(e) }}
        name={props.index}
        value={props.complete}
        className="check"
      />

      <div style={props.complete ? props.mystyle : {}}> {props.initial} </div>

      <div className="b1">
        <button 
           value={props.isedit}
          className="edit b2"
          onClick={() => {
           props.handleedit(props.index)
       
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
    
  )
}
export default Todoslist;
