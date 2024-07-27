import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Counter from "./state-management/Counter";
import TaskList from "./state-management/TaskList";
import LoginStatus from "./state-management/LoginStatus";
import TaskListReducer from "./state-management/reducer/TaskReducer";
import { useReducer } from "react";
import taskContext from "./state-management/context/TaskContext";
import LoginStatusReducer from "./state-management/reducer/LoginStatusReducer";
import LoginContext from "./state-management/context/LoginContext";

function App() {
  const [tasks,tasksAction] = useReducer(TaskListReducer,[]);

  return (
    <>
      <taskContext.Provider value={{ tasks,tasksAction}}>
        <Counter />
        <LoginStatus />
        <TaskList />
      </taskContext.Provider>
    </>
  );
}

export default App;
