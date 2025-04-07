import { PiggyBankIcon, TrendingDownIcon, TrendingUpIcon, WalletIcon } from "lucide-react";
import SummaryCard from "./summary-card";
import { db } from "@/lib/prisma";

interface SumaryCardProps{
    month: string;
}

const SummaryCards = async ({month}: SumaryCardProps) => {
    const where = {
        date: {
            gte: new Date(`2025-${month}-01`),
            lt: new Date(`2025-${month}-31`)
        }
    }
    const depositsTotal = Number(
        (await db.transaction.aggregate({
            where: {...where, type: "DEPOSIT" },
            _sum: { amount: true },
        }))?._sum?.amount
    )

    const investmentsTotal = Number(
        (await db.transaction.aggregate({
            where: {...where, type: "INVESTMENT" },
            _sum: { amount: true },
        }))?._sum?.amount
    )

    const expensesTotal = Number(
        (await db.transaction.aggregate({
            where: {...where, type: "EXPENSE" },
            _sum: { amount: true },
        }))?._sum?.amount
    )

    const balance = depositsTotal - ( investmentsTotal - expensesTotal )
    return ( 
        <div className="space-y-6">
            <SummaryCard 
                icon={<WalletIcon 
                size={25} />} 
                title="Saldo" 
                amount={balance} 
                className="text-4xl"
            />
            
            {/* Outros cards */}
            <div className="flex flex-col md:grid md:grid-cols-3 gap-6">
            <SummaryCard 
                icon={<PiggyBankIcon 
                size={25} /> } 
                title="Investido" 
                amount={investmentsTotal}
            />
            <SummaryCard 
                icon={<TrendingUpIcon 
                size={25} 
                className="text-primary" />} 
                title="Receita" 
                amount={depositsTotal}
            />
            <SummaryCard 
                icon={<TrendingDownIcon 
                size={25} 
                className="text-red-500" />} 
                title="Despesas" amount={expensesTotal}
            />
            </div>
        </div>
     );
}
export default SummaryCards ;