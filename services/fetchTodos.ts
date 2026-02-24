import { Todo } from "../types/todo";

export const fetchTodos = async (page: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=10`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }

  return response.json() as Promise<Todo[]>;
};