import { Badge } from "@/components/ui/badge"
import { Transaction, TransactionType } from "@prisma/client"
import { CircleIcon } from "lucide-react"

interface TransactionTypeBadgeProps{
    transaction: Transaction

}

const TransactionTypeBadge = ({transaction} : TransactionTypeBadgeProps) => {
        if(transaction.type === TransactionType.DEPOSIT) {
            return(
              <Badge className="bg-muted font-bold text-primary hover:bg-muted">
                <CircleIcon size={15} className="mr-2 fill-primary" />
                Depósito
              </Badge>
            )
          }
          if(transaction.type === TransactionType.EXPENSE) {
            return(
              <Badge className="text-danger bg-danger hover:bg-red-400">
                <CircleIcon size={15} className="mr-2 fill-danger" />
                Despesa
              </Badge>
            )
          }
          return(
            <Badge className="bg-muded font-bold text-white hover:bg-muted">
              <CircleIcon size={15} className="mr-2 fill-white" />
              Investimento
            </Badge>
          )
}

export default TransactionTypeBadge