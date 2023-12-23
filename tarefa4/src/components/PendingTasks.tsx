import React, { useContext, useEffect, useState } from 'react';
import { TodoContext } from '../contexts/todoContext';
import { Todo } from '../contexts/todoContext'

const PendingTasks = () => {
    const { todos, toggleTaskStatus, deleteTask } = useContext(TodoContext);
    const [PendingTasks, setPendingTasks] = useState(todos.filter((task: Todo) => !task.concluded));
    useEffect( () => setPendingTasks(todos.filter((task: Todo) => !task.concluded) ), [todos])

    return (
        <div>
            <h1>Tarefas Pendentes</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Data</th>
                        <th>Conclusão</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {PendingTasks
                        .filter((current) => !current.concluded)
                        .map((current) => (
                            <tr>
                                <td>{current.name}</td>
                                <td>{current.data.toLocaleDateString()}</td>
                                <td>
                                    <input
                                        type="checkbox"
                                        checked={current.concluded}
                                        onChange={() => {toggleTaskStatus(current.name)
                                        setPendingTasks(todos)}}
                                        
                                    />
                                </td>
                                <td>
                                    {deleteTask && (
                                        <button onClick={() => {deleteTask(current.name)
                                        setPendingTasks(todos)}}>Deletar</button>
                                    )}
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};


export default PendingTasks;
