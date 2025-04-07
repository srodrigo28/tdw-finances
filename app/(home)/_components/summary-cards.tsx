import { PiggyBankIcon, TrendingDownIcon, TrendingUpIcon, WalletIcon } from "lucide-react";
import SummaryCard from "./summary-card";

interface SumaryCardProps{
    month: string;
    balance: number;
    depositsTotal: number;
    investmentsTotal: number;
    expensesTotal: number;
}

const SummaryCards = async ({ balance, depositsTotal, investmentsTotal, expensesTotal}: SumaryCardProps) => {
    return ( 
        <div className="space-y-6">
            <SummaryCard 
                icon={<WalletIcon 
                size={25} />} 
                title="Saldo" 
                amount={balance} 
                className="md:text-4xl"
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