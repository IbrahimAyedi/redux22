import React from 'react'
import { useDispatch } from 'react-redux'
import { handleComplete, handleDelete } from '../redux/actions'
import Edit from './Edit'

const TaskCard = ({task}) => {
  const dispatch=useDispatch()
  return (
    <div className={task.isDone?"completed":"notCompleted"}  >
        <h1>{task.todoAction}</h1>
        <button onClick={()=>dispatch(handleDelete(task.id))} >Delete</button>
        <button onClick={()=>dispatch(handleComplete(task.id))}>Complete</button>
        <Edit task={task} />
       
    </div>
  )
}

export default TaskCard