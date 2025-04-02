import { db } from "../../lib/prisma"

const Transactions = async () => {
    const transactions = await db.transaction.findMany({})
    return(
        <div className="p-20">
            {transactions.map((item) =>(
                <div className="text-white" key={item.id}>{item.name}</div>
            ))}
        </div>
    )
}

export default Transactions