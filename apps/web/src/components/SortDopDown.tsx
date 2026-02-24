"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowDown01, ChevronUp } from "lucide-react";

export default function SortDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Newest");
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const options = ["Newest", "Oldest", "Highest"];

  // ✅ 1. Click outside to close
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ 2. Keyboard support
  function handleKeyDown(e: React.KeyboardEvent) {
    if (!isOpen) return;

    if (e.key === "ArrowDown") {
      setFocusedIndex((prev) =>
        prev === null || prev === options.length - 1 ? 0 : prev + 1
      );
    }

    if (e.key === "ArrowUp") {
      setFocusedIndex((prev) =>
        prev === null || prev === 0 ? options.length - 1 : prev - 1
      );
    }

    if (e.key === "Enter" && focusedIndex !== null) {
      setSelected(options[focusedIndex]);
      setIsOpen(false);
    }

    if (e.key === "Escape") {
      setIsOpen(false);
    }
  }

  return (
    <div
      ref={dropdownRef}
      className="relative inline-block"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {/* Trigger */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 border px-3 py-2 rounded-md cursor-pointer hover:bg-[#EEF0F2] transition"
      >
        <ArrowDown01 size={20} />
        <span>{selected}</span>
        <ChevronUp
          size={20}
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Dropdown Menu */}
      <div
        className={`absolute mt-2 w-full bg-white border rounded-md shadow-md z-10
        transition-all duration-200 origin-top
        ${
          isOpen
            ? "opacity-100 scale-y-100"
            : "opacity-0 scale-y-95 pointer-events-none"
        }`}
      >
        {options.map((option, index) => (
          <div
            key={option}
            onClick={() => {
              setSelected(option);
              setIsOpen(false);
            }}
            className={`px-3 py-2 cursor-pointer transition
              ${
                selected === option
                  ? "bg-gray-200 font-medium"
                  : "hover:bg-[#EEF0F2]"
              }
              ${
                focusedIndex === index
                  ? "bg-[#EEF0F2]"
                  : ""
              }`}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}