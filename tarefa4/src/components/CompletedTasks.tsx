import React, { useContext, useEffect, useState } from 'react';
import { TodoContext } from '../contexts/todoContext';
import { Todo } from '../contexts/todoContext'

const CompletedTasks = () => {
    const { todos, toggleTaskStatus, deleteTask } = useContext(TodoContext);
    const [completedTasks, setCompletedTasks] = useState(todos.filter((task: Todo) => task.concluded));
    useEffect( () => setCompletedTasks(todos.filter((task: Todo) => task.concluded) ), [todos])

    return (
        <div id='completed'>
            <h1 >Tarefas Concluídas</h1>
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
                    {completedTasks
                        .filter((current) => current.concluded)
                        .map((current) => (
                            <tr>
                                <td>{current.name}</td>
                                <td>{current.data.toLocaleDateString()}</td>
                                <td>
                                    <input
                                        type="checkbox"
                                        checked={current.concluded}
                                        onChange={() => {toggleTaskStatus(current.name)
                                        setCompletedTasks(todos)}}
                                        
                                    />
                                </td>
                                <td>
                                    {deleteTask && (
                                        <button onClick={() => {deleteTask(current.name)
                                        setCompletedTasks(todos)}}>Deletar</button>
                                    )}
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};


export default CompletedTasks;
