import React from "react";


function List ({inputItems}) {
   return (
    <div>  
       {inputItems.map((item) => {
        const {id, inputText} = item;
        return (
            <div key={id}>
                <li>{inputText}</li>
            </div>
        )
       })}
    </div>
   )
}

export default List;