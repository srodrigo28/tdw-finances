import { db } from "../../lib/prisma"
import { DataTable } from "@/components/ui/data-table"
import { TransactionColumns } from "./_columns"
import AddTransactionButton from "@/components/add-transaction-button"
import Navbar from "@/components/navbar"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

const Transactions = async () => {
    const {userId} = auth()
    if(!userId) redirect('/login')
    const transactions = await db.transaction.findMany({
        where: {userId: userId } // filtra por usuário
    })
    return(
        <>
            <Navbar />
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
                </div>
            </div>
        </>
    )
}

export default Transactions