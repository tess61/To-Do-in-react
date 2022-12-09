
import React, { useState } from 'react'

import AddTaskForm from './components/AddTaskForm.jsx'
import UpdateForm from './components/UpdateForm.jsx'
import ToDo from './components/ToDo.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck, faL, faPen, faTrashCan
} from '@fortawesome/free-solid-svg-icons'

import './App.css'


function App() {
   // task (toDo list) State
  const [toDo, setToDo] = useState([
  ])

    //Temp state
  const [newTask, setNewTask] = useState('')
  const [UpdateData, setUpdateData] = useState('')

  //to add task
  const addTask = () => {
    if(newTask) {
      let num = toDo.length + 1
      let newEntry = {id: num, title: newTask, status:false }
      setToDo([...toDo, newEntry])
      setNewTask('')
    }
  }
  // to delete task
  const deleteTask = (id) => {
    let newTasks = toDo.filter( task => task.id !== id)
    setToDo(newTasks);
  }
  // mark task done or completed
  const markDone = (id) => {
      let newTask = toDo.map( task => {
        if( task.id === id ) {
          return ({ ...task, status: !task.status })
        }
        return task;
      })
      setToDo(newTask); 
    }
  // Cancel Update
  const CancelUpdate = () => {
    setUpdateData('')
  }
  // change task for update
  const changeTask = (e) => {
    let newEntry = {
      id: UpdateData.id,
      title: e.target.value,
      status: UpdateData.status ? true : false
    }
    setUpdateData(newEntry);
  }
  // to update task
  const updateTask = ( ) => {
    let filterRecords = [ ...toDo].filter(task => task.id !== UpdateData.id)
    let updatedObject = [ ...filterRecords, UpdateData]
    setToDo(updatedObject)
    setUpdateData('')
  }

  return (
    <div className="App container">
      <br></br>
      <h2 className=' text-3xl font-bold underline'> To Do List APP </h2>
      <br></br>
          {/* Update Task */}
          {UpdateData && UpdateData ? (
            <>
              <UpdateForm 
                UpdateData = {UpdateData}
                changeTask = { changeTask}
                updateTask = {updateTask}
                CancelUpdate = {CancelUpdate}
              />
            </>
          ) : (
            <>
              <AddTaskForm 
                newTask= {newTask}
                setNewTask = {setNewTask} 
                addTask = { addTask }
              />
            </>
          )}
      {/* Display ToDos */}

      { toDo && toDo.length? '' : 'No Tasks...' }
      <ToDo
         toDo = {toDo}
         markDone = {markDone}
         setUpdateData = {setUpdateData}
         deleteTask = {deleteTask} 
      />
    </div>
  );
}
export default App;
