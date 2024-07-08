import "./list.css";
import { useState } from "react";
import Todoslist from "./Todoslist.jsx";
const mystyle = {
  textDecoration: " line-through",
};
const mystylefor = {
  backgroundColor: "black",
  opacity: "0.6",
  color: "white",
};

function Create() {
  const [initialtext, settext] = useState("");
  const [todos, settodos] = useState([]);

  function handlestrike(e) {
    let id = e.target.name;
    let newtodos = [...todos];
    newtodos[id].iscompleted = !newtodos[id].iscompleted;
    settodos(newtodos);
  }

  function handleaddtext() {
    settodos([...todos, { initialtext, iscompleted: false, isedit: false }]);
    settext("");
  }

  function changetext(e) {
    settext(e.target.value);
  }

  function handlecancel() {
    settext("");
  }

  const handleedit = (index) => {
   
    let newtodos = [...todos];
    newtodos[index].isdit = !newtodos[index].isedit;
    settodos(newtodos);
    console.log(isdit)
  };

  const handledelete = (index) => {
    const newtodos = [...todos];
    newtodos.splice(index, 1);
    settodos(newtodos);
  };
  const handlesave=(index)=>{
     const newtodo=[...todos];
     settodos(newtodo[index].value);
  }

  return (
    <>
      <div className="container">
        <h1>Your Todo</h1>
        <div className="main">
          <input
            type="text"
            id="input"
            value={initialtext}
            onChange={changetext}
          />
          <div className="button">
            <button
              id="entbutton"
              className="butn"
              onClick={handleaddtext}
              disabled={initialtext.length <= 1}
            >
              Add
            </button>
            <button id="button" className="butn" onClick={handlecancel}>
              Cancel
            </button>
          </div>
        </div>
        <div>
          <div className="output">
            <div className="content">
              {todos.map((item, index) => {
                return (
                  <Todoslist
                    handledelete={handledelete}
                    item={item}
                    index={index}
                    initial={item.initialtext}
                    complete={item.iscompleted}
                    mystyle={mystyle}
                    mystylef={mystylefor}
                    handlestrike={handlestrike}
                    handleedit={handleedit}
                    isedit={item.isedit}
                    handlesave={handlesave}
                    changetext={changetext}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Create;
