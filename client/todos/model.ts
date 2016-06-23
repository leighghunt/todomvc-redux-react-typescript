export type Todo = {
  id?: number;
  text: string;
  completed: boolean;
};

export type Department = {
  name: string,
  description: string
}

export type IState = {
  todos: Todo[],
  departments: Department[]
}
