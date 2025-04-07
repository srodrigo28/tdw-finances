import { TotalExpensePerCategory } from "@/app/_data/get-dashboard/types";
import { TRANSACTION_CATEGORY_LABELS } from "@/components/_constants/transactions";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ExpensesPerCategoryProps {
  expensesPerCategory: TotalExpensePerCategory[];
}

const ExpensesPerCategory = ({
  expensesPerCategory,
}: ExpensesPerCategoryProps) => {
  return (
    <>
      <ScrollArea className="col-span-2 rounded-md border pb-6 h-full">
        <CardHeader>
            <CardTitle>Gastos por Categoria</CardTitle>
        </CardHeader>
      
        <CardContent className="space-y-6">
          {expensesPerCategory.map((category) => (
            <div key={category.category} className="space-y-2">
              <div className="flex justify-between w-full">
                <p className="text-sm font-semibold">{
                    TRANSACTION_CATEGORY_LABELS[category.category]
                }</p>
                <p className="text-sm font-semibold"> {category.percentageOfTotal}%</p>
              </div>
              <Progress value={category.percentageOfTotal} />
            </div>
          ))}
        </CardContent>
      </ScrollArea>
    </>
  );
};

export default ExpensesPerCategory;
