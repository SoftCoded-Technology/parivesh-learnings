const TaskListReducer = (tasks, tasksAction) => {
    if(tasksAction.type==="ADD"){
        return [...tasks,tasksAction.task]
    }
    if(tasksAction.type==="DELETE"){
        return tasks.filter(t=>t.id!== tasksAction.taskId)
    }
}

export default TaskListReducer