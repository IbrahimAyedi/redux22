import { ADD, COMPLETE, DELETE, EDIT } from "./actionTypes";

export const handleAdd = (newTask) => {
  return {
    type: ADD,
    payload: newTask,
  };
};

export const handleDelete = (ID) => {
  return {
    type: DELETE,
    payload: ID,
  };
};
export const handleComplete = (id) => {
  return {
    type: COMPLETE,
    payload: id,
  };
};

export const handleEdit=(editedTask)=>{
  return {
    type:EDIT,
    payload:editedTask
  }
}