'use client'

import { SelectContent, SelectItem, SelectTrigger, 
    SelectValue } from "@/components/ui/select";
import { Select } from "@radix-ui/react-select";
import { useRouter } from "next/navigation";

const MONTH_OPTIONS = [
    { value: "1", Label: 'Janary' },
    { value: "2", Label: 'February' },
    { value: "3", Label: 'March' },
    { value: "4", Label: 'April' },
    { value: "5", Label: 'May' },
    { value: "6", Label: 'June' },
    { value: "7", Label: 'July' },
    { value: "8", Label: 'August' },
    { value: "9", Label: 'September' },
    { value: "10", Label: 'October' },
    { value: "11", Label: 'November' },
    { value: "12", Label: 'December' },
]

const TimeSelect = () => {
    const { push } = useRouter()
    const handleMonthChange = (month: string) => {
        // push('/?month=' + month)
        push(`/?month=${month}`);
    }
    return ( 
        <Select onValueChange={(value) => handleMonthChange(value)}>
            <SelectTrigger className="w-44 rounded-full">
                <SelectValue placeholder="Mês" />
            </SelectTrigger>
            <SelectContent>
                {MONTH_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                        {option.Label}
                    </SelectItem>
                ))}
                </SelectContent>
        </Select>
     );
}
export default TimeSelect;