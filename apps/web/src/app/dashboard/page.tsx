"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import DashboardNavbar from "../../components/DashboardNavbar";
import { ChartCandlestick, ChevronUp } from "lucide-react";
import { SidebarSection } from "../../components/SidebarSection";

export default function Dashboard() {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            router.push("/login");
        }
    }, []);

    return (

        <div className="bg-green-400 min-h-screen">
            <DashboardNavbar />

            <div className="flex flex-1">
                <aside className="w-64 border-r bg-gray-50">



                    <SidebarSection
                        title="Trading"
                        icon={<ChartCandlestick size={20} />}
                        items={
                            [
                                "My accounts",
                                "Performance",
                                "History of orders",
                                "Exness Terminal"
                            ]
                        }
                    >



                    </SidebarSection>

                    {/* <div className="flex gap-2 justify-between px-2 py-3">

                        <div className="flex flex-col">
                            <div className="flex">
                                <ChartCandlestick size={20} />
                                <div>Trading</div>
                            </div>
                            <div className="flex flex-col gap-5 ml-2 mt-4">
                                <span>My accounts</span>
                                <span>Performacne</span>
                                <span>History of orders</span>
                                <span>Exness Terminal</span>
                            </div>
                        </div>
                        <ChevronUp size={16} />
                    </div> */}















                </aside>
                <main className="flex-1 p-5 bg-white">
                    Content
                </main>
            </div>

        </div>
    )
}
