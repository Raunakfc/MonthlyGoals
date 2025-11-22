"use client";

import { Category } from "../types";

type CategoryTableProps = {
  categories: Category[];
  onUpdate: (id: string, field: keyof Category, value: string | number) => void;
};

export default function CategoryTable({ categories, onUpdate }: CategoryTableProps) {
  return (
    <table className="w-full border-collapse text-gray-200">
      <thead>
        <tr className="bg-gray-800">
          <th className="p-2 border border-gray-700">Name</th>
          <th className="p-2 border border-gray-700">Target</th>
          <th className="p-2 border border-gray-700">Current</th>
          <th className="p-2 border border-gray-700">Next Date</th>
          <th className="p-2 border border-gray-700">Save</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((cat) => (
          <tr key={cat.id} className="bg-[#1a1a1a]">
            <td className="p-2 border border-gray-700">{cat.name}</td>
            <td className="p-2 border border-gray-700">{cat.targetAmount}</td>
            <td className="p-2 border border-gray-700">
              <input
                type="number"
                defaultValue={cat.currentAmount}
                className="w-full p-1 rounded bg-gray-800 text-white"
                onBlur={(e) => onUpdate(cat.id, "currentAmount", Number(e.target.value))}
              />
            </td>
            <td className="p-2 border border-gray-700">
              <input
                type="date"
                defaultValue={cat.nextDate}
                className="w-full p-1 rounded bg-gray-800 text-white"
                onBlur={(e) => onUpdate(cat.id, "nextDate", e.target.value)}
              />
            </td>
            <td className="p-2 border border-gray-700">
              <button
                className="px-3 py-1 bg-green-500 rounded hover:bg-green-600"
                onClick={() => onUpdate(cat.id, "currentAmount", cat.currentAmount)}
              >
                Save
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
