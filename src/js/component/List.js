import React, {useState} from "react";
import { Title } from "./Title";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Input } from "./Input";
import { ToDotext } from "./ToDotext";
import { ToDoCount } from "./ToDoCount";


//create your first component
export const List = () => {
	const [inputValue, setInputValue] = useState("");
	const [addNewTask, setAddNewTask] = useState([]);
	return (
		<div className="container justify-content-center">
			<Title/>
			<Input setInputValue={setInputValue}
					addNewTask = {addNewTask} 
					setAddNewTask = {setAddNewTask}
					inputValue= {inputValue}
			/>
			<ToDotext/>
			<ToDoCount/>
		</div>
	);
};
