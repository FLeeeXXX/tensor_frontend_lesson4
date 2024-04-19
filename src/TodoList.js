import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
    render() {
        const { tasks, onDelete } = this.props;
        return (
            <div className="todo_list">
                {tasks.map((task,index) => (
                    <TodoItem index={index+1} key={task.id} id={task.id} name={task.name} onDelete={onDelete} />
                ))}
            </div>
        )
    }
}

export default TodoList;