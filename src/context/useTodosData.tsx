import { dummyData } from "@/data/dummyData";
import { TodosInfo } from "@/model/Todo";
import { createContext, useContext, useState } from "react";

export interface TodosData {
    todosInfo: TodosInfo;
    setTodos: (todosInfo: TodosInfo) => void;
}

const TodosContext = createContext<TodosData>({
    todosInfo: {
        todos: [],
        pendingTodos: 0,
        completedTodos: 0,
        allTodos: 0,
    },
    setTodos: () => { },
});

export const useTodosData = (): TodosData => useContext(TodosContext);

export const TodosDataProvider = ({ children: children }) => {
    const [todosInfo, setTodos] = useState<TodosInfo>({
        todos: dummyData,
        pendingTodos: dummyData.filter(todo => !todo.done).length,
        completedTodos: dummyData.filter(todo => todo.done).length,
        allTodos: dummyData.length - 1,
    });

    const value = {
        todosInfo,
        setTodos,
    };

    return <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
}
