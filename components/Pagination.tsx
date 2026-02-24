import { Dispatch, SetStateAction } from "react";

export default function Pagination({
  page,
  setPage,
}: {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}) {
  return (
    <div className="flex justify-between items-center mt-10">
      <button
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        disabled={page === 1}
        className="px-5 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 transition disabled:opacity-40"
      >
        Previous
      </button>

      <span className="text-lg font-semibold text-gray-700">
        Page {page}
      </span>

      <button
        onClick={() => setPage((prev) => prev + 1)}
        className="px-5 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 transition"
      >
        Next
      </button>
    </div>
  );
}