import React, {useState} from "react";

export const Input = () => {
    const [inputValue, setInputValue] = useState("")
    return (
        <div className="input-group mb-3">
            <input value= {inputValue} 
                onChange={(e) => {
                    setInputValue(e.target.value)
                   
                }} 
                    
                type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
        </div>
    )
}