"use client";

import { ArrowDownUp } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import UpsertTransactionDialog from "./upsert-transaction-dialog";

const AddTransactionButton = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  
  return (
    <>
      <Button className="rounded-full" 
        onClick={() => setDialogIsOpen(true)}>
        Adicionar
        <ArrowDownUp />
      </Button>
      <UpsertTransactionDialog
        isOpen={dialogIsOpen} 
        setIsOpen={setDialogIsOpen} 
      />
    </>
  );
};

export default AddTransactionButton;
