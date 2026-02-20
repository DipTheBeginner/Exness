import { ChevronUp } from "lucide-react";

interface SidebarSectionProps {
    title: string,
    icon: React.ReactNode;
    items: string[]

}


export function SidebarSection({ title, icon, items }: SidebarSectionProps) {


    return (

        <div className="px-4 py-3">
            <div className="flex justify-between">
                <div className="flex gap-2">
                    {icon}
                    <span>Trading</span>
                </div>
                <ChevronUp size={24} />
            </div>


        </div>

    )
}