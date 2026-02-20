import { exo } from "../app/fonts";
import { CircleQuestionMark, Wallet, Bell,Grid3X3, CircleUserRound } from "lucide-react";



export default async function DashboardNavbar() {

    return (
        <nav>
            <div className="flex flex-row justify-between items-center px-4">
                <div className={`mt-3 text-4xl font-bold tracking-tight text-gray-900 ${exo.className}`}>
                    exness
                </div>
                <div className="flex flex-row gap-5 items-center">
                    <div className="flex flex-row gap-2 items-center">
                        <div>
                            <Wallet size={24} />
                        </div>
                        <div>
                            0.00 USD
                        </div>
                    </div>
                    <div>
                        <CircleQuestionMark size={20}/>
                    </div>
                    <div>
                       <Bell size={20}/>
                    </div>
                    <div>
                        <Grid3X3 size={20}/>
                    </div>
                    <div>
                        <CircleUserRound size={20}/>
                    </div>
                </div>
            </div>
            <div className="border-b border-gray-300 w-full mt-3"></div>
        </nav>
    );
}