import React from 'react'

const TodoItem2 = () => {
    let todoName = "Go to College";
    let todoDate = "  4/10/2023";
    let todoButton = "Delete"
  return (
   <>
   <div class="row">
    <div class="col-4 left">
        {todoName}
    
    </div>
    <div class="col-4 left ">
    {todoDate}
    </div>
    <div class="col-2">
    <button type="button" class="btn btn-danger styling">{todoButton}</button>
    </div>
  </div>
   </>
  )
}

export default TodoItem2