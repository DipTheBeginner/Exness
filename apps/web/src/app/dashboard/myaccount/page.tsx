import { Plus } from "lucide-react"
import { inter } from "../../fonts"

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

                    <div className="flex">

                        <div>
                            <div className="flex gap-3 border px-4 py-2 rounded-md">
                                <div>
                                    Real
                                </div>
                                <div>
                                    Demo
                                </div>
                            </div>


                        </div>

                        <div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}