import React from 'react'

const TodoItem1 = () => {

    let todoName = "Buy Milk";
    let todoDate = "4/10/2023";
  return (
    <>
    <div class="row">
    <div class="col-4 left" >
        {todoName}
     
    </div>
    <div class="col-4 left" >
        {todoDate}
      
    </div>
    <div class="col-2" >
    <button type="button" class="btn btn-danger styling">Delete</button>
    </div>
  </div>
    </>
  )
}

export default TodoItem1