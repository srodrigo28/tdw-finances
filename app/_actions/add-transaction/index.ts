"use server"

import { db } from "@/lib/prisma"
import { auth } from "@clerk/nextjs/server";
import { TransactionCategory, TransactionPaymentMethod, TransactionType } from "@prisma/client"
import { revalidatePath } from "next/cache";

interface UpsertTransactionParams{
    id?: string;
    name: string;
    amount: number;
    type: TransactionType;
    category: TransactionCategory;
    paymentMethod: TransactionPaymentMethod;
    date: Date;
}

export const UpsertTransaction = async (params: UpsertTransactionParams ) => {
    const {userId} = auth();
    if(!userId){
        throw new Error("Unauthorized")
    }
    await db.transaction.upsert({
        update: {
            name: params.name,
            amount: params.amount,
            type: params.type,
            category: params.category,
            paymentMethod: params.paymentMethod,
            date: params.date,
            userId: userId,
        },
        create: {
            name: params.name,
            amount: params.amount,
            type: params.type,
            category: params.category,
            paymentMethod: params.paymentMethod,
            date: params.date,
            userId: userId,
        },
        where: { id: params?.id ?? ""},
    });
    revalidatePath("/transactions")
}