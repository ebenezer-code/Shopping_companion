import {useState, useReducer, useEffect, useRef} from "react";
import Alert from "./Components/Alert"
import List from "./Components/List"
import './App.css';


const reducer = (state, action) => {
  const newItems = [...state.inputArray, action.payload];
  if(action.type === "Add_Item") {
    return {
      ...state,
      inputArray: newItems,
      isModalOpen: true,
      modalContent: "Item Added"
    }
  }
  if(action.type === "No_Item") {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "Insert Item"
    }
  }
  if(action.type === "Clear_Item") {
    return {
      ...state,
      inputArray: [],
      isModalOpen: true,
      modalContent: "Items Cleared"
    }
  }
}

const defaultState = {
  inputArray: [],
  isModalOpen: false,
  modalContent: "",
  isEditing: false,
  editID: null
}


function App() {
    const [inputText, setInputText] = useState("");

    const [state, dispatch] = useReducer(reducer,defaultState);

    const refContainer = useRef(null);


    useEffect(() => {
      refContainer.current.focus();
    },[])

    const handleSubmit = (e) => {
      e.preventDefault();
      if(inputText) {
        const newItem = {id: new Date().getTime().toLocaleString(), inputText}
        dispatch({type: "Add_Item", payload: newItem});
        setInputText("")
      }else {
        dispatch({type: "No_Item"});
      }
    }
    const clearItem = () => {
      if(inputText) {
        dispatch({type: "Clear_Item"});
      }
    }

  return (
    <section className="section-div">
       <form className="form-classname" onSubmit={handleSubmit}>
        {state.isModalOpen && <Alert /> }
        <h3>Grocery bud</h3>
        <div className="input-div">
          <input type="text" className="grocery" placeholder="Enter grocery list" value={inputText} onChange={(e) => setInputText(e.target.value)} ref={refContainer}/>
          <button type="submit" className = {state.isEditing ? "grocery-btn-edit" : "grocery-btn"}> 
            {state.isEditing ? "Edit" : "Submit"}  
          </button>
        </div>
       </form>
       <div className="grocery-container">
          <List />
          <button type="submit" className="grocery-btn" onClick={() => clearItem}>clear items</button>
       </div>
    </section>
  );
}

export default App;
