"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DashboardNavbar from "../../components/DashboardNavbar";
import { ChartCandlestick, ChevronUp } from "lucide-react";
import { SidebarSection } from "../../components/SidebarSection";

export default function Dashboard() {
    const router = useRouter();

    const [openSection, setOpenSection] = useState<string | null>(null)

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            router.push("/login");
        }
    }, []);

    return (

        <div className="bg-green-400 min-h-screen flex flex-col">
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

                        isOpen={openSection === "Trading"}
                        onToggle={() => setOpenSection(openSection === "Trading" ? null : "Trading")}
                    >
                    </SidebarSection>

                    <SidebarSection
                        title="Payment and Wallet"
                        icon={<ChartCandlestick size={20} />}
                        items={
                            [
                                "My accounts",
                                "Performance",
                                "History of orders",
                                "Exness Terminal"
                            ]
                        }

                        isOpen={openSection === "Payment and Wallet"}
                        onToggle={() => setOpenSection(openSection === "Payment and Wallet" ? null : "Payment and Wallet")}
                    >
                    </SidebarSection>

                    <SidebarSection
                        title="Anaylytics"
                        icon={<ChartCandlestick size={20} />}
                        items={
                            [
                                "My accounts",
                                "Performance",
                                "History of orders",
                                "Exness Terminal"
                            ]
                        }

                        isOpen={openSection === "Anaylytics"}
                        onToggle={() => setOpenSection(openSection === "Anaylytics" ? null : "Anaylytics")}
                    >
                    </SidebarSection>

                    <SidebarSection
                        title="Exness Benefits"
                        icon={<ChartCandlestick size={20} />}
                        items={
                            [
                                "My accounts",
                                "Performance",
                                "History of orders",
                                "Exness Terminal"
                            ]
                        }

                        isOpen={openSection === "Exness Benefits"}
                        onToggle={() => setOpenSection(openSection === "Exness Benefits" ? null : "Exness Benefits")}
                    >
                    </SidebarSection>

                    <SidebarSection
                        title="Settings"
                        icon={<ChartCandlestick size={20} />}
                        items={
                            [
                                "My accounts",
                                "Performance",
                                "History of orders",
                                "Exness Terminal"
                            ]
                        }

                        isOpen={openSection === "Settings"}
                        onToggle={() => setOpenSection(openSection === "Settings" ? null : "Settings")}
                    >
                    </SidebarSection>












                </aside>
                <main className="flex-1 p-5 bg-white">
                    Content
                </main>
            </div>

        </div>
    )
}
