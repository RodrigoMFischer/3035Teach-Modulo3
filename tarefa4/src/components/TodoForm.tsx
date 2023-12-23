import React, { useContext, useState } from "react";
import { TodoContext } from "../contexts/todoContext";
import { TodoContextType } from "../contexts/todoContext";


export const TodoForm = () => {
    const [task, setTask] = useState<string>('');
    const { addTask } = useContext<TodoContextType>(TodoContext!)!;

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        addTask(task);
        setTask('');
    }

    return (
        <div id="tasks-add">
            <form onSubmit={submit}>
                <input id="tasks-add input" type="text" 
                placeholder="Digite aqui sua tarefa"
                value={task}
                onChange={ (e) => {setTask(e.target.value)}} />
                <button type="submit" >Criar</button>
            </form>
        </div>
    )
}

