import React from "react";

const TodoList = (props) => {
    return (
        <div>
            <input type="checkbox"
                   checked={props.list.completed}
                   onChange={() => props.handleEvent(props.list.id)}/>
            <p>{props.list.text}</p>
        </div>
    )
}

export default TodoList;