import React, { useContext, useReducer } from "react";
import taskContext from "./context/TaskContext";

const TaskList = () => {
  const { tasks, tasksAction } = useContext(taskContext);
  return (
    <>
      <div className="p-4">
        <button
          onClick={() =>
            tasksAction({
              type: "ADD",
              task: { id: Date.now(), title: "task" + Date.now() },
            })
          }
          className="btn btn-primary"
        >
          Add
        </button>
        <ul className="list-group p-3">
          {tasks?.map((Task) => {
            return (
              <li key={Task.id} className="list-group-item">
                {Task.title}
                <button
                  onClick={() =>
                    tasksAction({ type: "DELETE", taskId: Task.id })
                  }
                  className="btn btn-outline-danger float-end"
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default TaskList;
