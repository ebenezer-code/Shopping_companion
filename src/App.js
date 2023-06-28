import {useState, useReducer, useEffect, useRef} from "react";
import Alert from "./Components/Alert"
import List from "./Components/List"
import './App.css';


const reducer = (state, action) => {

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


    // useEffect(() => {
    //   refContainer.current.focus();
    // },[])

    const handleSubmit = (e) => {
      e.preventDefault();
    }

  return (
    <section className="section-div">
       <form className="form-classname" onSubmit={handleSubmit}>
        {state.isModalOpen && <Alert /> }
       </form>
       <div>
          <List />
          <button type="btn">clear items</button>
       </div>
    </section>
  );
}

export default App;
