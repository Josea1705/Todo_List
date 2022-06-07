import React from "react";

export const ToDoCount = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    {props.list.lenght} items left...
                </div>
            </div>
        </div>
    )
}