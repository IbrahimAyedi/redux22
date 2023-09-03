import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { handleAdd } from "../../redux/actions";
import "./Add.css"
const AddNewtask = (e) => {
    const [newTaskAction, setNewTaskAction] = useState("")
    const dispatch=useDispatch()
   const handleSubmit=(e)=>{
    e.preventDefault();
    const newTaskAdd={
        id:Math.random(),todoAction:newTaskAction,isDone:false
    }
    dispatch(handleAdd(newTaskAdd))

   }
  return (
    <div  className="test">
      <form  onSubmit={handleSubmit}>
        <input type="text"  value={newTaskAction} onChange={(e)=>setNewTaskAction(e.target.value)} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddNewtask;
