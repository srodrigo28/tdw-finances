import { TransactionType } from "@prisma/client"

export const TRANSACTION_CATEGORY_LABELS = {
    EDUCATION: "Educação",
    ENTERTAINMENT: "Entretenimento",
    FOOD: "Alimentação",
    HEALTH: "Saúde",
    HOUSING: "Habitação",
    OTHER: "Outros",
    SALARY: "Salário",
    TRANSPORTATION: "Transporte",
    UTILTY: "Utilidades",
  }
  
  export const TRANSACTION_PAYMENT_METHOD_LABELS = {
    BANK_TRANSFER: "Transferência Bancária",
    BANK_SLIP: "Boleto Bancário",
    CASH: "Dinheiro",
    CREDIT_CARD: "Cartão de Crédito",
    DEBIT_CARD: "Cartão de Débito",
    OTHER: "Outros",
    PIX: "Pix",
  }

  export const TRANSACTION_TYPE_OPTIONS = [
    {
      value: TransactionType.EXPENSE,
      label: "Despesa",
    },
    {
      value: TransactionType.DEPOSIT,
      label: "Depósito",
    },
    {
      value: TransactionType.INVESTMENT,
      label: "Investimento",
    },
  ]