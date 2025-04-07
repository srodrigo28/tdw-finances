"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import { DialogClose, DialogTitle } from "@radix-ui/react-dialog";
import { TransactionCategory, TransactionPaymentMethod, TransactionType, } from "@prisma/client";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTrigger,     
} from "./ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "./ui/form";
import { Input } from "./ui/input";
import { MoneyInput } from "./money-input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "./ui/select";
import { TRANSACTION_CATEGORY_OTIONS,
  TRANSACTION_PAYMENT_METHOD_OPTIONS, TRANSACTION_TYPE_OPTIONS, } from "./_constants/transactions";
import { DatePicker } from "./ui/date-picker";
import { UpsertTransaction } from "@/app/_actions/add-transaction";

const formSchema = z.object({
  name: z.string().trim().min(1, {
    message: "O nome é obrigatório. ",
  }),
  amount: z
    .number({ required_error: "Ovalor é obrigatório" })
    .positive({ message: "O valor tem que ser maior que zero" }),
  type: z.nativeEnum(TransactionType, {
    required_error: "O tipo é obrigatório. ",
  }),
  category: z.nativeEnum(TransactionCategory, {
    required_error: "A categoria é obrigatória. ",
  }),
  paymentMethod: z.nativeEnum(TransactionPaymentMethod, {
    required_error: "A método de pagamento é obrigatório. ",
  }),
  date: z.date({
    required_error: "A data é obrigatória.",
  }),
});

type FormSchema = z.infer<typeof formSchema>;

interface UpsertTranactionDiaglogProps{
    isOpen: boolean;
    defaultValues?: FormSchema;
    transactionId?: string;
    setIsOpen: (isOpen: boolean) => void;
}
const UpsertTransactionDialog = ( {
  isOpen, setIsOpen, defaultValues, transactionId
}: UpsertTranactionDiaglogProps) => {

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues ?? {
      name: "",
      amount: 0,
      date: new Date(),
      type: TransactionType.EXPENSE,
      category: TransactionCategory.OTHER,
      paymentMethod: TransactionPaymentMethod.CASH,
    },
  });

  const onSubmit = async (data: FormSchema) => {
    try {
      await UpsertTransaction({...data, id: transactionId});
      setIsOpen(false);
      form.reset();
    } catch (error) {
      console.log(error);
    }
  };
  const isUpdate = Boolean(transactionId);
  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        setIsOpen(open);
        if (!open) {
          form.reset();
        }
      }}
    >
      <DialogTrigger asChild>
        
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{isUpdate ? 'Atualizar' : 'Inserir'} transação</DialogTitle>
          <DialogDescription>Insira as informações abaixo. </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField /* NOME */
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="digite o nome" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField /* VALOR */
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Valor</FormLabel>
                  <FormControl>
                    <MoneyInput
                      placeholder="digite o valor"
                      value={field.value}
                      onValueChange={({ floatValue }) =>
                        field.onChange(floatValue)
                      }
                      onBlur={field.onBlur}
                      disabled={field.disabled}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField /* TRANSACTION_TYPE_OPTIONS */
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipo</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select o Tipo" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {TRANSACTION_TYPE_OPTIONS.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField /* TRANSACTION_CATEGORY_OTIONS */
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Categoria</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um Método de pagamento" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {TRANSACTION_CATEGORY_OTIONS.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField /* TRANSACTION_PAYMENT_METHOD_OPTIONS */
              control={form.control}
              name="paymentMethod"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Método de pagamento</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um Método de pagamento" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {TRANSACTION_PAYMENT_METHOD_OPTIONS.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField /* DATA*/
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Selecione uma Data</FormLabel>
                  <DatePicker value={field.value} onChange={field.onChange} />
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <DialogClose asChild>
                <Button className="bg-transparent border-2 border-red-500 hover:bg-red-500 duration-300">
                  Cancelar
                </Button>
              </DialogClose>
              <Button
                type="submit"
                className="bg-transparent border-2 border-green-500 hover:bg-green-500 duration-300"
              >
                {isUpdate ? 'Atualizar' : 'Adicionar'}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default UpsertTransactionDialog;
