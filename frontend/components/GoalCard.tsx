"use client";
import { Category } from "../types";

type GoalCardProps = {
  category: Category;
  onUpdate: (id: string, field: keyof Category, value: string | number) => void;
};

export default function GoalCard({ category, onUpdate }: GoalCardProps) {
  const progress = Math.min((category.currentAmount / category.targetAmount) * 100, 100);

  return (
    <div className="bg-[#1a1a1a] p-4 rounded-xl shadow-md flex flex-col gap-4">
      <h3 className="text-white text-lg font-semibold">{category.name}</h3>
      <div className="flex justify-between text-sm text-gray-300">
        <span>Target: {category.targetAmount}</span>
        <span>Current: {category.currentAmount}</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
        <div className="h-3 bg-green-500" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="flex flex-col gap-2">
        <input
          type="number"
          defaultValue={category.currentAmount}
          className="p-1 rounded bg-gray-800 text-white"
          onBlur={e => onUpdate(category.id, "currentAmount", Number(e.target.value))}
        />
        <input
          type="date"
          defaultValue={category.nextDate}
          className="p-1 rounded bg-gray-800 text-white"
          onBlur={e => onUpdate(category.id, "nextDate", e.target.value)}
        />
      </div>
    </div>
  );
}
