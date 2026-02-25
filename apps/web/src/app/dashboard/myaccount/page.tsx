import { Plus,ArrowDown01,ChevronUp } from "lucide-react"
import SortDropDown from "../../../components/SortDopDown"

export default async function () {



    return (


        <div className="flex flex-col min-h-screen">
            <div className="py-20">

                <div className="max-w-7xl mx-auto px-7 gap-8 flex flex-col">

                    <div className="flex flex-row justify-between items-center">
                        <span className="text-3xl font-semibold">My accounts</span>
                        <div className="flex flex-row gap-2 border px-3 py-2 items-center rounded-sm bg-[#EEF0F2]">
                            <Plus size={20} />
                            <span>Open account</span>
                        </div>
                    </div>

                    <div className="flex justify-between">

                        <div>
                            <div className="flex gap-3 border px-1 py-1 rounded-md items-center border-slate-300">
                                <div className=" w-14 text-center border border-transparent  cursor-pointer hover:bg-[#EEF0F2] px-2 py-1 hover:border-gray-400 transition-all duration-200 rounded-sm">
                                    Real
                                </div>
                                <div className=" w-14 text-center border border-transparent  cursor-pointer hover:bg-[#EEF0F2] px-2 py-1  hover:border-gray-400 transition-all duration-200 rounded-sm">
                                    Demo
                                </div>
                            </div>


                        </div>

                        <div className="flex">
                            
                            <div>
                                <SortDropDown/>

                            </div>
                            <ChevronUp size={20}/>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}