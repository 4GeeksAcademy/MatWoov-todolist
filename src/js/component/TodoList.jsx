import React, { useState } from "react";


export const TodoList = () => {

    const [task, setTask] = useState("");
    const [listTask, setListTask] = useState([]);

    const handleTask = (e) => {
        setTask(e.target.value)
    };

    const addTask = (event) => {
        event.preventDefault();
        setListTask([...listTask, task])
        setTask("");
    };


    return (
        <div className="container">
            <h1>To Do List</h1>
            <div className="paper mb-3">
                <ul className="list-group">
                    <li className="list-group-item">
                        <form onSubmit={addTask}>
                            <input type="text" onChange={handleTask} value={task} className="form-control border-0 text-center" id="exampleText" placeholder="What needs to be done?" />
                        </form>
                    </li>
                    {listTask.map((item, index) =>
                        <li className="list-group-item border border-top-0 text-start box">{item}
                            <i className="fas fa-times float-end opacity-50" onClick={() => setListTask(listTask.filter((t, currentIndex) => index != currentIndex))}></i>
                        </li>
                    )}
                    <li className="item text-start opacity-50 ">{listTask.length == 0 ? "No tasks, add a task" : `${listTask.length} item left`}</li>
                </ul>
            </div>
        </div>
    )
};