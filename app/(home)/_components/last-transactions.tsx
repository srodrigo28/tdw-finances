import { formatCurrency } from "@/app/_utils/formatUtil";
import { TRANSACTION_PAYMENT_METHOD_ICONS } from "@/components/_constants/transactions";
import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Transaction, TransactionType } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface LastTransactionsProps{
    lastTransactions: Transaction[]
}

const LastTransactions = ( {lastTransactions} : LastTransactionsProps ) => {
    
    const getPriceColor = (transaction: Transaction) => {
        if(transaction.type === TransactionType.EXPENSE) {
            return "text-red-500"
        }
        if(transaction.type === TransactionType.DEPOSIT){
           return "text-primary"
        }
        return "text-white"
    }
    const getAmountPrefix = (transaction: Transaction) => {
        if(transaction.type === TransactionType.DEPOSIT) {
            return "+"
        }
        return "-"
    }
    return ( 
        <ScrollArea className="rounded-md border mt-6 md:mt-0">
            <CardHeader className=" flex flex-row items-center justify-between">
                <CardTitle className="font-semibold">Últimas Transações</CardTitle>
                <Button variant="outline" className="rounded-full font-semibold">
                    <Link href="/transactions">Ver mais</Link>
                </Button>
            </CardHeader>
            <CardContent className="space-y-6">
                {lastTransactions.map((transaction) => (
                    <div key={transaction.name} className="flex items-center justify-between p-2 border-b-2 border-white">
                        <div className="flex gap-3 items-center">
                            <div className="rounded-lg bg-white bg-opacity-[3%] p-5">
                                <Image src={TRANSACTION_PAYMENT_METHOD_ICONS[transaction.paymentMethod]} height={20} width={20} alt="icone do pix" />
                            </div>
                            <div className="tracking-wider">
                                <p className="text-sm font-bold">{transaction.name}</p>
                                <p className="text-xs text-gray-400">
                                    {new Date(transaction.date).toLocaleDateString("pt-BR", { 
                                        day: "2-digit", 
                                        month: "short", 
                                        year: "numeric" 
                                    })}
                                </p>
                            </div>
                        </div>
                        <p className={`text-sm font-bold ${getPriceColor(transaction)}`}>
                           {getAmountPrefix(transaction)} {formatCurrency(Number(transaction.amount))}
                        </p>
                    </div>
                ))}
            </CardContent>

        </ScrollArea>
     );
}
 
export default LastTransactions;