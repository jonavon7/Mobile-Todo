export interface Todo {
    id: number;
    title: string;
    done: boolean;
}

export interface TodosInfo {
    todos: Todo[];
    pendingTodos: number;
    completedTodos: number;
    allTodos: number; 
}