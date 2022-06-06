import React, {useState} from "react";
import PropTypes from "prop-types";
import { string } from "prop-types";

export const Input = (props) => {
    const inputHandler = (e) => {
        props.setInputValue(e.target.value);
    }
    const SubmitTodoHandlrer = (e) => {
        
        if (e.key === "Enter") {
            props.setAddNewTask([...props.addNewTask,{text: props.inputValue, completed: false, id: Math.random() * 1000}])
            e.preventDefault();
        }
    }
    
    return (
        <div className="input-group mb-3">
            <input
                value= {props.inputValue}
                onKeyDown={SubmitTodoHandlrer}
                onChange={inputHandler}  
                type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
        </div>
    )
}

// Input.propTypes = {
//     inputValue: PropTypes.string,
//     setInputValue: PropTypes.func,
//     addNewTask: PropTypes.arrayOf(string),
//     setAddNewTask: PropTypes.func,
// }