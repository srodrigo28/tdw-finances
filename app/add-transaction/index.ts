"use server"

import { db } from "@/lib/prisma"
import { Prisma } from "@prisma/client"
import { revalidatePath } from "next/cache";

export const addTransaction = async (params: Prisma.TransactionCreateInput) => {
    await db.transaction.create({
        data:params,
    });
    revalidatePath('/transactions')
}