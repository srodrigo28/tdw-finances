import AddTransactionButton from "@/components/add-transaction-button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ReactNode } from "react";

interface SummaryCardProps{
    icon: ReactNode;
    title: string;
    amount: number;
    className?: string;
}
const SummaryCard = ( {icon, title, amount, className } : SummaryCardProps) => {
  return (
    <Card>
      <CardHeader className="flex-row items-center gap-4">
        {icon}
        <p className="text-muted-foreground">{title}</p>
      </CardHeader>
      <CardContent className="flex justify-between">
        <p className={`text-2xl font-bold ${className}`}>{
            Intl.NumberFormat( "pt-BR",
                { style: "currency",
                  currency: "BRL",
                }).format(amount)}
        </p>
        { className == "text-4xl" && <AddTransactionButton /> }
      </CardContent>
    </Card>
  );
};

export default SummaryCard;