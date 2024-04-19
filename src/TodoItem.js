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
                <p>{this.props.index}. {this.props.name}</p>
                <button className="item_botton" onClick={this.handleDelete}>Завершить</button>
            </div>
        )
    }
}

export default TodoItem;