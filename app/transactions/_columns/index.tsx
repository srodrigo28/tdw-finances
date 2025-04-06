"use client"

import { Transaction } from "@prisma/client"
import { ColumnDef } from "@tanstack/react-table"
import TransactionTypeBadge from "../_components/type-badge"
import { Button } from "@/components/ui/button"
import { TrashIcon } from "lucide-react"
import { TRANSACTION_CATEGORY_LABELS, TRANSACTION_PAYMENT_METHOD_LABELS } from "@/components/_constants/transactions"
import EditTransactionButton from "../_components/edit-transaction-button"

export const TransactionColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },

  {
    accessorKey: "type",
    header: "Tipo",
    cell: ({ row: {original: transaction }}) => (
      <TransactionTypeBadge transaction={transaction} />
    )
  },
  {
    accessorKey: "category",
    header: "Categoria",
    cell: ({ row: { original: transaction } }) =>
      TRANSACTION_CATEGORY_LABELS[transaction.category],
  },
  {
    accessorKey: "paymentMethod",
    header: "Método de Pagamento",
    cell: ({ row: {original: transaction}}) =>
      TRANSACTION_PAYMENT_METHOD_LABELS[transaction.paymentMethod],
  },
  {
    accessorKey: "date",
    header: "Data",
    cell: ({ row: { original: transaction }}) =>
      new Date(transaction.date).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric"
      })
  },
  {
    accessorKey: "amount",
    header: "Valor",
    cell: ({ row: {original: transaction }}) => 
      new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(Number(transaction.amount)),
  },
  {
    accessorKey: "actions",
    header: "Ações",
    cell: () => {
      return (
        <div>
         <EditTransactionButton />
          <Button variant="ghost" size="icon" className="text-muted-foreground"> 
              <TrashIcon />
          </Button>
        </div>
      )
    }
  },
]
