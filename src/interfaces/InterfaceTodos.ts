export interface Todo {
  todo: string;
  done: boolean;
}

export interface Todos {
  todos: Todo[];
}

export interface ToDoContextType {
  gettodos: Todos;
  addtodo: (todo: string) => void;
  changedone: (index: number) => void;
  deltodo: (index: number) => void;
}