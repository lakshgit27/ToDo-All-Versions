import React from 'react'

const AddTodo = () => {
  return (
  <>
   <div class="row" >
    <div class="col-4">
      <input type="text" placeholder="Enter Todo Here"></input>
    </div>
    <div class="col-4">
      <input type="date" placeholder="Select Date"></input>
    </div>
    <div class="col-2">
    <button type="button" class="btn btn-success styling">Add</button>
    </div>
  </div>
  
  </>
  )
}

export default AddTodo