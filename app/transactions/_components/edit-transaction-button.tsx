"use client";

import { useState } from "react";
import {  PencilIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import UpsertTransactionDialog from "@/components/upsert-transaction-dialog";

const EditTransactionButton = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false)
  
  return (
    <>
      <Button  variant="ghost" size="icon" className="text-muted-foreground" onClick={() => setDialogIsOpen(true)}>
        <PencilIcon />
      </Button>
      <UpsertTransactionDialog isOpen={dialogIsOpen} setIsOpen={setDialogIsOpen}  />
    </>
  );
};

export default EditTransactionButton;
