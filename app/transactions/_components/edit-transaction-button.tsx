"use client";

import { useState } from "react";
import {  PencilIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import UpsertTransactionDialog from "@/components/upsert-transaction-dialog";
import { Transaction } from "@prisma/client";

interface EditTransactionButtonProps{
    transaction: Transaction;
}

const EditTransactionButton = ( {transaction} : EditTransactionButtonProps ) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false)
  
  return (
    <>
      <Button  
        variant="ghost" size="icon" 
        className="text-muted-foreground" 
        onClick={() => setDialogIsOpen(true)}>
        <PencilIcon />
      </Button>
      <UpsertTransactionDialog 
        defaultValues={{
          ...transaction, 
          amount: Number(transaction.amount),
        }} 
        transactionId={transaction.id}
        isOpen={dialogIsOpen} setIsOpen={setDialogIsOpen}  />
    </>
  );
};

export default EditTransactionButton;
