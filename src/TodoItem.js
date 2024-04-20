import React from "react";
import './Stylesheets/TodoItem.css'

class TodoItem extends React.Component{

    handleDelete = () =>{
        const {id, onDelete} = this.props;
        onDelete(id);
    }

    render(){
        return(
            <div className="todo_item">
                <div className="todo_item_tittle">
                    <p>{this.props.index}. {this.props.name}</p>
                </div>
                <div className="todo_item_button_block">
                <button className="button_item" onClick={this.handleDelete}>
                    <span>Завершить</span>
                </button>
                </div>
            </div>
        )
    }
}

export default TodoItem;