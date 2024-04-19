import React from "react";
import './Stylesheets/AddTodo.css'

class AddTodo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue: ''
        }
    }

    handleInputChange = (event) =>{
        this.setState({ inputValue: event.target.value })
    }

    handleAddTodo = () =>{
        if(this.state.inputValue.length >= 5){
            this.props.addTask(this.state.inputValue);
            this.setState({inputValue: ''})
        }
    }

    render(){
        return(
            <div className="container">
                <div className="todo_add">
                    <input 
                    placeholder="Название задачи" 
                    value={this.state.inputValue} 
                    onChange={this.handleInputChange} 
                    className={this.state.inputValue.length >= 5 || this.state.inputValue.length === 0 ? '' : 'error'}
                    type="text"/>
                    <button onClick={this.handleAddTodo}>Добавить</button>
                </div>
            </div>
        );
    }
}

export default AddTodo;