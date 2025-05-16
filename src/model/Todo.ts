export interface Todo {
    id: number;
    label: string;
    checked: boolean;
}

export interface TodosInfo {
    todos: Todo[];
    createdTodos: number;
}