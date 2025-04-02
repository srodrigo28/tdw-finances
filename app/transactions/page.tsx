import { Button } from "@/components/ui/button"
import { db } from "../../lib/prisma"
import { ArrowDownUp } from "lucide-react"
import { DataTable } from "@/components/ui/data-table"
import { TransactionColumns } from "./_columns"
import AddTransactionButton from "@/components/add-transaction-button"

const Transactions = async () => {
    const transactions = await db.transaction.findMany({})
    return(
        <div className="space-y-6 p-6">
            {/* MENU */}
            <div></div>

            {/* TITULO E BOTAO */}
            <div className="flex w-full justify-between items-center">
                <h1 className="text-2xl font-semibold">Transações</h1>
                <AddTransactionButton />
            </div>

            {/* TABELA */}
            <div>
                <DataTable columns={TransactionColumns} data={transactions} />
                
                {/* {transactions.map((item) =>(
                    <div className="text-white" key={item.id}>{item.name}</div>
                ))} */}
            </div>
        </div>
    )
}

export default Transactions