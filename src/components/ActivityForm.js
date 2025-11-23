import { useState } from "react";

export default function ActivityForm({ placeholder, onAdd }) {
  const [text, setText] = useState("");
  const [value, setValue] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    const item = {
      id: Date.now(),
      title: text.trim(),
      value: value ? Number(value) : null,
      createdAt: new Date().toISOString(),
    };

    onAdd(item);
    setText("");
    setValue("");
  };

  return (
    <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3">
      <input
        className="flex-1 border border-slate-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
        placeholder={placeholder}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <input
        type="number"
        min="0"
        className="w-full sm:w-32 border border-slate-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
        placeholder="kcal / minutes"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Add
      </button>
    </form>
  );
}
