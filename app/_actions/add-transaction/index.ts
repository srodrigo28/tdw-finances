"use server"

import { db } from "@/lib/prisma"
import { auth } from "@clerk/nextjs/server";
import { TransactionCategory, TransactionPaymentMethod, TransactionType } from "@prisma/client"

interface AddTransactionParams{
    name: string;
    amount: number;
    type: TransactionType;
    category: TransactionCategory;
    paymentMethod: TransactionPaymentMethod;
    date: Date;
}

export const addTransaction = async (params: AddTransactionParams ) => {
    const {userId} = auth();
    if(!userId){
        throw new Error("Unauthorized")
    }
    await db.transaction.create({
        data: {... params, userId},
    });
}