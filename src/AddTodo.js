import React from "react";
import './Stylesheets/AddTodo.css'

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            showError: false
        }
    }

    handleInputChange = (event) => {
        this.setState({ 
            inputValue: event.target.value,
        })
        
    }

    handleAddTodo = () => {
        if (this.state.inputValue.length >= 5) {
            this.props.addTask(this.state.inputValue);
            this.setState({ inputValue: '', showError: false })
        } else {
            this.setState({ showError: true });
        }
    }

    render() {
        return (
            <div className="container">
                <div className="todo_add">
                    <input
                        class="input"
                        name="text"
                        autocomplete="off"
                        placeholder="Название задачи"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}  
                        type="text" />
                    {/* <button class="button" onClick={this.handleAddTodo}>Добавить</button> */}
                    <button class="button_add" onClick={this.handleAddTodo}>
                        <span>Добавить</span>
                    </button>
                </div>
                {this.state.showError && <div className="error-message">Минимальное количество символов: 5</div>}
            </div>
        );
    }
}

export default AddTodo;