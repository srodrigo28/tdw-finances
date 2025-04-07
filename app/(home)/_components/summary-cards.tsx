import { PiggyBankIcon, TrendingDownIcon, TrendingUpIcon, WalletIcon } from "lucide-react";
import SummaryCard from "./summary-card";

const SummaryCards = () => {
    return ( 
        <div className="space-y-6">
            <SummaryCard 
                icon={<WalletIcon 
                size={25} />} 
                title="Saldo" 
                amount={270} 
                className="text-4xl"
            />
            
            {/* Outros cards */}
            <div className="flex flex-col md:grid md:grid-cols-3 gap-6">
            <SummaryCard 
                icon={<PiggyBankIcon 
                size={25} /> } 
                title="Investido" 
                amount={2000}
            />
            <SummaryCard 
                icon={<TrendingUpIcon 
                size={25} 
                className="text-primary" />} 
                title="Receita" 
                amount={5000}
            />
            <SummaryCard 
                icon={<TrendingDownIcon 
                size={25} 
                className="text-red-500" />} 
                title="Despesas" amount={4000}
            />
            </div>
        </div>
     );
}
export default SummaryCards ;