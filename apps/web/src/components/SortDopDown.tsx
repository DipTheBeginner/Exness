"use client"

import { useState } from "react"
import { ArrowDown01, ArrowDownAZ, ArrowDownWideNarrow, ArrowUpNarrowWide } from "lucide-react";





export default function SortDropDown() {

  const [isOpen, setIsOpen] = useState(false);





  return (
    <div className="flex flex-col gap-1 border rounded-md">

      <div className="flex gap-2 text-gray-700 font-thin border border-transparent hover:bg-[#EEF0F2] cursor-pointer rounded-md p-2 ">
        <ArrowDownWideNarrow size={20} />
        <span>Newest</span>
      </div>

      <div className="flex gap-2 text-gray-700 font-thin border border-transparent hover:bg-[#EEF0F2] cursor-pointer rounded-md p-2" >
        <ArrowUpNarrowWide size={20} />
        <span>Oldest</span>
      </div>

      <div className="flex gap-2 text-gray-700 font-thin border border-transparent hover:bg-[#EEF0F2] cursor-pointer rounded-md p-2">
        <ArrowDown01 size={20} />
        <span>Free margin</span>
      </div>

      <div className="flex gap-2 text-gray-700 font-thin border border-transparent hover:bg-[#EEF0F2] cursor-pointer rounded-md p-2">
        <ArrowDownAZ size={20} />
        <span>Nickname</span>
      </div>
    </div>
  )

}



