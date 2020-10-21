import React from 'react'

const Form = () => {
    // Here I can write JS code
    const inputTextHandler = e => console.log(e.value.target);
    return(
        <form>
            <input onChange={inputTextHandler} type="text" className="todo-input" />
            <button className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="incomplete"></option>
                </select>
            </div>
        </form>
    );
}

export default Form;