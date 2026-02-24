"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchTodos } from "../services/fetchTodos";
import TodoList from "../components/TodoList";
import Pagination from "../components/Pagination";
import { Todo } from "../types/todo";

export default function Home() {
  const [page, setPage] = useState(1);
  const [newTodo, setNewTodo] = useState("");
  const [localTodos, setLocalTodos] = useState<Todo[]>([]);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["todos", page],
    queryFn: () => fetchTodos(page),
    keepPreviousData: true,
  });

  const handleAddTodo = () => {
    if (!newTodo.trim()) return;

    const newItem: Todo = {
      userId: 1,
      id: Date.now(),
      title: newTodo,
      completed: false,
    };

    setLocalTodos((prev) => [newItem, ...prev]);
    setNewTodo("");
  };

  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 text-lg">
        Loading todos...
      </div>
    );

  if (isError)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 text-lg">
        Failed to load todos.
      </div>
    );

  return (
  <div className="min-h-screen w-full bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-10">
    
    <div className="
      w-full
      max-w-md
      sm:max-w-xl
      lg:max-w-3xl
      xl:max-w-4xl
      bg-white/80
      backdrop-blur-lg
      shadow-2xl
      rounded-3xl
      p-6
      sm:p-8
      lg:p-10
      border border-white/40
    ">

      <h1 className="text-3xl sm:text-4xl font-extrabold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
        ✨ Todo Dashboard
      </h1>

      {/* Add Todo Section */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm"
        />
        <button
          onClick={handleAddTodo}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:scale-105 transition-transform duration-200 shadow-md"
        >
          Add
        </button>
      </div>

      <TodoList todos={[...localTodos, ...(data || [])]} />

      <Pagination page={page} setPage={setPage} />

    </div>
  </div>
);
}