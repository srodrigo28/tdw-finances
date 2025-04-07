import { PiggyBankIcon, TrendingDownIcon, TrendingUpIcon, WalletIcon } from "lucide-react";
import SummaryCard from "./summary-card";
import { db } from "@/lib/prisma";

const SummaryCards = async () => {
    const depositsTotal = Number(
        (await db.transaction.aggregate({
            where: { type: "DEPOSIT" },
            _sum: { amount: true },
        }))?._sum?.amount
    )

    const investmentsTotal = Number(
        (await db.transaction.aggregate({
            where: { type: "INVESTMENT" },
            _sum: { amount: true },
        }))?._sum?.amount
    )

    const expensesTotal = Number(
        (await db.transaction.aggregate({
            where: { type: "EXPENSE" },
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