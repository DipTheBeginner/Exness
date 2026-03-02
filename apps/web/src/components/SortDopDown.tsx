"use client";

import {
  ArrowDown01,
  ArrowDownAZ,
  ArrowDownWideNarrow,
  ArrowUpNarrowWide,
  ChevronUp,
} from "lucide-react";

import { useEffect, useRef, useState } from "react";

export default function SortDropDown() {
  const containerRef = useRef<HTMLDivElement>(null);

  const options = [
    { label: "Newest", icon: ArrowDownWideNarrow },
    { label: "Oldest", icon: ArrowUpNarrowWide },
    { label: "Free margin", icon: ArrowDown01 },
    { label: "Nickname", icon: ArrowDownAZ },
  ];

  const [selected, setSelected] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setFocusedIndex(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Keyboard navigation
  function handleKeyDown(e: React.KeyboardEvent) {
    if (!isOpen && (e.key === "Enter" || e.key === " ")) {
      setIsOpen(true);
      return;
    }

    if (!isOpen) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setFocusedIndex((prev) =>
        prev === null || prev === options.length - 1 ? 0 : prev + 1
      );
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      setFocusedIndex((prev) =>
        prev === null || prev === 0 ? options.length - 1 : prev - 1
      );
    }

    if (e.key === "Enter" && focusedIndex !== null) {
      setSelected(options[focusedIndex]);
      setIsOpen(false);
      setFocusedIndex(null);
    }

    if (e.key === "Escape") {
      setIsOpen(false);
      setFocusedIndex(null);
    }
  }

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="relative w-48 outline-none"
    >
      {/* Trigger */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center gap-2 text-gray-700 font-thin border rounded-md p-2 cursor-pointer hover:bg-[#EEF0F2]"
      >
        <div className="flex gap-2 items-center">
          <selected.icon size={20} />
          <span>{selected.label}</span>
        </div>

        <ChevronUp
          size={18}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-full flex flex-col gap-1 border rounded-md bg-white shadow-md z-10">
          {options.map((option, index) => (
            <div
              key={option.label}
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
                setFocusedIndex(null);
              }}
              className={`flex gap-2 text-gray-700 font-thin cursor-pointer rounded-md p-2
                ${
                  selected.label === option.label
                    ? "bg-[#EEF0F2]"
                    : "hover:bg-[#EEF0F2]"
                }
                ${focusedIndex === index ? "bg-[#EEF0F2]" : ""}`}
            >
              <option.icon size={20} />
              <span>{option.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}