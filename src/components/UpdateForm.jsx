import React from 'react'

function UpdateForm({ UpdateData, changeTask, updateTask,CancelUpdate }) {
  return (
    <>
           <div className='row'>
          <div className='col'>
            <input 
            value={ UpdateData && UpdateData.title }
            onChange= {(e) => changeTask(e)}
            className='form-control form-control-lg' 
            />
          </div>
          <div className='col-auto'>
            <button 
              onClick={updateTask}
              className='btn btn-lg btn-success mr-20'
            >Update</button>
            <button
              onClick={CancelUpdate}
              className='btn btn-lg btn-warning'
              >Cancel</button>
            </div>
        </div>
        <br></br>
    </>
  )
}

export default UpdateForm