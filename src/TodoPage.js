import React from "react";
import './Stylesheets/TodoPage.css'
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import robo from "./animations/robo.json"
import angry from "./animations/angry.json"
import Lottie from "lottie-react";

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
            <div className="main">
                <div className="angry">
                    <Lottie animationData={angry}/>
                </div>
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
            <div className="robo">
                    <Lottie animationData={robo}/>
                </div>
        </div>
        )
    }
}

export default TodoPage;