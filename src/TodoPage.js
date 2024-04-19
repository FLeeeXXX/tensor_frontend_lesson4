import React from "react";
import './Stylesheets/TodoPage.css'
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

class TodoPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                {id: 0, name: "Купить картошку"},
                {id: 1, name: "Купить свеклу"},
                {id: 2, name: "Купить морковь"},
                {id: 3, name: "Сварить суп"}
            ]
        }
    }

    deleteTask = (id) => {
        const tasks = this.state.tasks.filter((task) => task.id !== id);
        this.setState({tasks: tasks});
    }

    addTask = (name) => {
        const newTask = {id: Date.now(), name: name}
        this.setState({
            tasks: [...this.state.tasks, newTask]
        })
    }

    render() {
        return (
            <div className="todo_block">
                <div>
                    <h1>Добавление задачи</h1>
                    <AddTodo addTask={this.addTask}/>
                </div>
                <div>
                    <h1>Задачи</h1>
                    <TodoList tasks={this.state.tasks} onDelete={this.deleteTask} />
                </div>
            </div>
        )
    }
}

export default TodoPage;