import "./style.css";
import { useState } from 'react';

const Form = ({ addNewTask }) => {

    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault(event);
        if(newTaskContent.trim() === "") {
            return;
        }
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                value={newTaskContent}
                className="form__input"
                placeholder="wpisz cel"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />

            <button
                className="form__addButton">
                <b>DODAJ!</b>
            </button>
        </form>
    );
}

export default Form;