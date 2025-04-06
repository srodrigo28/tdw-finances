"use server"

import { db } from "@/lib/prisma"
import { Prisma } from "@prisma/client"

export const addTransaction = async (params: Prisma.TransactionCreateInput) => {
    await db.transaction.create({
        data:params,
    })
}