"use client";

import { useState } from "react";
import { Todo } from "../types/todo";

export default function TodoItem({ todo }: { todo: Todo }) {
  const [completed, setCompleted] = useState(todo.completed);

  return (
    <div className="flex justify-between items-center p-4 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
      
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => setCompleted(!completed)}
          className="w-5 h-5 accent-purple-600 cursor-pointer"
        />

        <span
          className={`text-lg ${
            completed
              ? "line-through text-gray-400"
              : "text-gray-800 font-medium"
          }`}
        >
          {todo.title}
        </span>
      </div>

      <span
        className={`text-xs px-4 py-1 rounded-full font-semibold ${
          completed
            ? "bg-green-100 text-green-600"
            : "bg-yellow-100 text-yellow-600"
        }`}
      >
        {completed ? "Completed" : "Pending"}
      </span>
    </div>
  );
}