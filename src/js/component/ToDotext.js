import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTasks, faTrash } from '@fortawesome/free-solid-svg-icons'


export const ToDotext = (props) => {
    const deleteHandler = () => {
        props.setAddNewTask(props.addNewTask.filter(el => el.id !== props.task.id))
    } 
    return (
        <div className="container mb-3">
            <div className="bg-light text-color-danger">{props.text}
                <button onClick ={deleteHandler} className="d-flex ms-auto"><FontAwesomeIcon icon={faTrash}/></button>
            </div>
            
        </div> 
    )
}