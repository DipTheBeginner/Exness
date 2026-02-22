"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DashboardNavbar from "../../components/DashboardNavbar";
import { ChartCandlestick, Wallet, FileChartColumn, Award, Settings, ContactRound,Heart } from "lucide-react";
import { SidebarSection } from "../../components/SidebarSection"; <div className="px-2 py-3 rounded-md gap-3">
    <div className="flex bg-green-300 py-2 px-3 rounded-md gap-2 items-center">

        <ContactRound size={20} />
        <span>Copy Trading</span>
    </div>

</div>
import { inter } from "../fonts";

export default function SidebarLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();

    const [openSection, setOpenSection] = useState<string | null>(null)

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            router.push("/login");
        }
    }, []);

    return (

        <div className="min-h-screen flex flex-col">
            <DashboardNavbar />

            <div className="flex flex-1">
                <aside className="w-72 border-r bg-gray-50">

                    <SidebarSection
                        title="Trading"
                        icon={<ChartCandlestick size={20} />}
                        items={
                            [
                                "My accounts",
                                "Performance",
                                "History of orders",
                                "Exness Terminal",

                            ]
                        }

                        isOpen={openSection === "Trading"}
                        onToggle={() => setOpenSection(openSection === "Trading" ? null : "Trading")}
                    >
                    </SidebarSection>

                    <SidebarSection
                        title="Payment and Wallet"
                        icon={<Wallet size={20} />}
                        items={
                            [
                                "Deposit",
                                "Withdrawal",
                                "Transaction history",
                                "Crypto Wallet"
                            ]
                        }

                        isOpen={openSection === "Payment and Wallet"}
                        onToggle={() => setOpenSection(openSection === "Payment and Wallet" ? null : "Payment and Wallet")}
                    >
                    </SidebarSection>

                    <SidebarSection
                        title="Analytics"
                        icon={<FileChartColumn size={20} />}
                        items={
                            [
                                "Analyst Views",
                                "Market News",
                                "Economic Calender",

                            ]
                        }

                        isOpen={openSection === "Anaylytics"}
                        onToggle={() => setOpenSection(openSection === "Anaylytics" ? null : "Anaylytics")}
                    >
                    </SidebarSection>


                    <SidebarSection
                        title="Exness Benefits"
                        icon={<Award size={20} />}
                        items={
                            [
                                "Trading Conditions",
                                "Savings",
                                "Virtual Private Server"
                            ]
                        }

                        isOpen={openSection === "Exness Benefits"}
                        onToggle={() => setOpenSection(openSection === "Exness Benefits" ? null : "Exness Benefits")}
                    >
                    </SidebarSection>


                    <div className="px-2 py-3">
                        <div className="flex justify-between items-center cursor-pointer border border-transparent py-2 px-3 hover:bg-[#EEF0F2] rounded-md hover:border-gray-500 transition-all duration-200">
                            <div className="flex gap-2">
                                <ContactRound size={20} />
                                <span className={`${inter.className}`}>Copy Trading</span>
                            </div>
                        </div>
                    </div>

                    <div className="px-2 py-3">
                        <div className="flex justify-between items-center cursor-pointer border border-transparent py-2 px-3 hover:bg-[#EEF0F2] rounded-md hover:border-gray-500 transition-all duration-200">
                            <div className="flex gap-2">
                                <Heart size={20} />
                                <span className={`${inter.className}`}>Support hub</span>
                            </div>
                        </div>
                    </div>

                    <SidebarSection
                        title="Settings"
                        icon={<Settings size={20} />}
                        items={
                            [
                                "Profile",
                                "Security",
                                "Trading Terminal"
                            ]
                        }

                        isOpen={openSection === "Settings"}
                        onToggle={() => setOpenSection(openSection === "Settings" ? null : "Settings")}
                    >
                    </SidebarSection>

                </aside>
                <main className="flex-1 p-5 bg-white">
                    {children}
                </main>
            </div>

        </div>
    )
}
