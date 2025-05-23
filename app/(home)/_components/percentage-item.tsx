import { ReactNode } from "react";

interface PercentageItemProps{
    icon: ReactNode;
    title: string;
    value: number
}

const PercentageItem = ( {icon, title, value} : PercentageItemProps) => {
    return ( 
    <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
            <div className="rounded-lg bg-white bg-opacity-[3%] p-5">
                {icon}
            </div>
            
                <p className="text-sm text-muted-foreground">{title}</p>
            </div>
            <p className="font-bold text-sm">{value} %</p>
        </div>
     );
}
 
export default PercentageItem;