"use client";

import { useEffect, useState } from "react";
import Sidebar from "../../frontend/components/Sidebar";
import Header from "../../frontend/components/Header"; // default export
import CategoryTable from "../../frontend/components/CategoryTable"; // default export
import { getCategories, addCategory, updateCategory } from "../../frontend/crud";
import { Category } from "../../frontend/types";

export default function DashboardPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [name, setName] = useState<string>("");
  const [target, setTarget] = useState<string>("");
  const [current, setCurrent] = useState<string>("");
  const [nextDate, setNextDate] = useState<string>("");

  const fetchCategories = async () => {
    const data = await getCategories();
    setCategories(data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleAdd = async () => {
    if (!name || !target) return;

    await addCategory({
      name,
      targetAmount: Number(target),
      currentAmount: Number(current) || 0,
      nextDate,
      frequency: "monthly",
      reminders: ["WhatsApp"],
    });

    setName("");
    setTarget("");
    setCurrent("");
    setNextDate("");
    fetchCategories();
  };

  const handleUpdate = async (id: string, field: keyof Category, value: string | number) => {
    await updateCategory(id, { [field]: value } as Partial<Category>);
    fetchCategories();
  };
  
  console.log("Sidebar:", Sidebar);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col bg-[#0a0a0a] text-gray-200 p-6 gap-6">
        <Header />

        {/* Add Category Form */}
        <div className="bg-[#111111] p-4 rounded-xl flex flex-col gap-4 max-w-md">
          <h2 className="text-white text-lg font-semibold">Add Category</h2>
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 rounded bg-gray-800 text-white"
          />
          <input
            placeholder="Target Amount"
            type="number"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            className="p-2 rounded bg-gray-800 text-white"
          />
          <input
            placeholder="Current Amount"
            type="number"
            value={current}
            onChange={(e) => setCurrent(e.target.value)}
            className="p-2 rounded bg-gray-800 text-white"
          />
          <input
            placeholder="Next Date"
            type="date"
            value={nextDate}
            onChange={(e) => setNextDate(e.target.value)}
            className="p-2 rounded bg-gray-800 text-white"
          />
          <button
            onClick={handleAdd}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold p-2 rounded"
          >
            Add
          </button>
        </div>

        {/* Category Table */}
        <CategoryTable categories={categories} onUpdate={handleUpdate} />
      </div>
    </div>
  );
}
