import React, { ReactNode, createContext, useState } from 'react';

interface TodoContextType {
    todos: Todo[];
    addTask: (name: string) => void;
    deleteTask?: (name: string) => void,
    toggleTaskStatus: (name: string) => void,
}
interface Todo {
    name: string;
    data: Date;
    concluded: boolean;

}

const initialContext: TodoContextType = {
    todos: [],
    addTask: (name: string) => { },
    deleteTask: (name: string) => { },
    toggleTaskStatus: (name: string) => {},

};

const TodoContext = createContext<TodoContextType>(initialContext);

const TodoProvider = ( {children}: {children: ReactNode} ) => {

    const [todos, setTodos] = useState<Todo[]>([])
    
    const addTask = (name: string): void => {
        const task: Todo = {
            name,
            data: new Date(),
            concluded: false,
        }
        setTodos([...todos, task])
    }

    const deleteTask = (name: string): void => {
        const newTodos: Todo[] = todos.filter( (current) => current.name !== name )
        setTodos(newTodos);
    }

    const toggleTaskStatus = (name: string): void => {
        setTodos( (prevTodos) => 
            prevTodos.map( (current) =>
             current.name === name ? {...current, concluded: !current.concluded} : current ) )
    }
    
    return (
        <TodoContext.Provider value={{ toggleTaskStatus, deleteTask, addTask, todos}}>
            {children}
        </TodoContext.Provider>
    );

}

export {
    TodoContext,
    TodoProvider
};
export type {
        Todo,
        TodoContextType
    };
