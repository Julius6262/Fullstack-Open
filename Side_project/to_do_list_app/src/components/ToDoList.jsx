import React, {useState} from 'react'
const ToDoList = () => {
    const [tasks, setTasks] = useState(["Eat breakefast", "Take a shower", "Walke the dog"])
    const [newTask, setNewTask] = useState("")
    
    const handleInputChange = (event) => setNewTask(event.target.value);

    const addTask = () =>{
        if (newTask.trim() !== ""){
            setTasks(prevtask => [...prevtask, newTask]);
            setNewTask("");
        }
    };
    
    const deleteTask = (index) => {
        const newArray = [...tasks];
        newArray.splice(index, 1);
        setTasks(newArray);

        //another way of doing it
        /*
        const updatedTask = tasks.filter((_,i) => index !== i);
        setTasks(updatedTask);
        */
    };

    const moveTaskUp = (index) => {
        const newArray = [...tasks];
        const elementToMove = newArray.splice(index,1)[0];
        newArray.splice(index - 1, 0, elementToMove);
        setTasks(newArray);

        //another way of doing it
        /*
        const newArray = [...tasks]
        [newArray[index-1], newArray[index]] = [newArray[index], newArray[index-1]] swapping elements using destructuring
        setTasks(newArray);
        */
    };

    const moveTaskDown = (index) => {
        const newArray = [...tasks];
        const elementToMove = newArray.splice(index,1)[0];
        newArray.splice(index + 1, 0, elementToMove);
        setTasks(newArray);
    };

    return(
    <div className='to-do-list'>
        <h1>To do list</h1>
        <input 
            type="text"
            placeholder="Enter a task.."
            value={newTask}
            onChange={handleInputChange}/>

        <button
            className='add-button'
            onClick={addTask}> 
            Add
        </button>
        <ol>
        {tasks.map((task, index)=>
        <li key={index}>
            <span className='text'>{task}</span>
            <button 
                className='delete-button'
                onClick={() => deleteTask(index)}>
                Delete
            </button>
            <button 
                className='move-button'
                onClick={() => moveTaskUp(index)}>
                Move up
            </button>
            <button 
                className='move-button'
                onClick={() => moveTaskDown(index)}>
                Move down
            </button>
        </li>
        )}
        </ol>
    </div>
    
    );
};

export default ToDoList;