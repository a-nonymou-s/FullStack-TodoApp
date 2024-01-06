import React, {useState} from "react";
const API_BASE= 'http://localhost:4001/todo';
function TodoItem(props){
    const {name, id, status, setItems} = props;
    const deleteItem = async (id) => {
        try{
          const response = await fetch(API_BASE + '/delete/' + id, {
            method: 'DELETE',
          });
          if(!response.ok){
            throw new Error("Failed to delete task!")
          }
          const data = await response.json()
          setItems(items => items.filter(item => item._id !== data._id))
        } catch(err) {
          console.error("Error deleting tasks: ",err)
        }
    }
    const updateItem = async (id) => {
        try {
            const response = await fetch(API_BASE + '/update/' + id, {
                method: 'PUT',
            });
            if (!response.ok) {
                throw new Error("Failed to update task!");
            }
            const updatedItem = await response.json();

            setItems(items => items.map(item => 
                item._id === updatedItem._id ? { ...item, status: updatedItem.status } : item
            ));
        } catch (err) {
            console.error("Error updating task status: ", err);
        }
    };
    return(
     <div className="flex flex-row border border-gray-300 rounded-md p-2 m-2 w-96">
        <div className={status == 1 ? "flex-grow items-start text mx-2  line-through":"flex-grow items-start text mx-2"}>{name}</div> 
        {status ?  <div></div> : <div className="items-end mx-2 cursor-pointer" onClick={() => updateItem(id)}><span >✔</span></div>}
        <div className="items-end mx-2 cursor-pointer" onClick={() => deleteItem(id)}><span >🗑</span></div>   
      </div>
    )
}

export default TodoItem;