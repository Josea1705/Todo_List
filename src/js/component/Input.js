import React, {useState} from "react";
import PropTypes from "prop-types";
import { string } from "prop-types";

export const Input = (props) => {
    const inputHandler = (e) => {
        props.setInputValue(e.target.value);
    }
    const SubmitTodoHandlrer = (e) => {
        
        if (e.key === "Enter") {
            props.setAddNewTask([...props.addNewTask,{text: props.inputValue, id: Math.random() * 1000}])
            e.preventDefault();
            props.setInputValue("");
        }
    }
    
    return (
        <div className="input-group mb-3">
            <input
                value= {props.inputValue}
                onKeyDown={SubmitTodoHandlrer}
                onChange={inputHandler}  
                type="text" className="form-control" placeholder="What needs to be done?" aria-label="What need to be done?" aria-describedby="button-addon2"/>
                    
        </div>
    )
}

// Input.propTypes = {
//     inputValue: PropTypes.string,
//     setInputValue: PropTypes.func,
//     addNewTask: PropTypes.arrayOf(string),
//     setAddNewTask: PropTypes.func,
// }