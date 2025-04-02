import { ArrowDownUp } from "lucide-react";
import { Button } from "./ui/button";

const AddTransactionButton = () => {
  return (
    <Button className="rounded-full">
      Adicionar transação
      <ArrowDownUp />
    </Button>
  );
};

export default AddTransactionButton
