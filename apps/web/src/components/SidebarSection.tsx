"use client"

import { ChevronUp } from "lucide-react";
import { inter } from "../app/fonts";
import { useState } from "react";

interface SidebarSectionProps {
    title: string,
    icon: React.ReactNode;
    items: string[];
    isOpen: boolean;
    onToggle: () => void;


}


export function SidebarSection({ title, icon, items,onToggle, isOpen }: SidebarSectionProps) {





    return (

        <div className="px-2 py-3">
            <div className="flex justify-between items-center cursor-pointer border border-transparent py-2 px-3 hover:bg-[#EEF0F2] rounded-md hover:border-gray-500 transition-all duration-200"
                onClick={onToggle}

            >
                <div className="flex gap-2">
                    {icon}
                    <span className={`${inter.className}`}>{title}</span>
                </div>
                <ChevronUp size={24} className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
            </div>


            <div className={`${inter.className} transition-all duration-300 overflow-hidden ${isOpen ? "max-h-40 opacity-100 mt-4 pointer-events-auto" : "max-h-0  pointer-events-none"}`}
            >
                <div className="flex flex-col ml-6 gap-3 text-slate-900">
                    {items.map((item) => (
                        <span key={item} className="cursor-pointer py-2 px-3 border border-transparent hover:bg-[#EEF0F2] rounded-md hover:border-gray-500 transition-all duration-200 ">
                            {item}
                        </span>
                    ))}
                </div>
            </div>

        </div>

    )
}