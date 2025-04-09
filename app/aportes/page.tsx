import Navbar from "@/components/navbar"
import { Card, CardHeader } from "@/components/ui/card"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

const Subscription = () => {
    const {userId} = auth()
    if(!userId) redirect('/login')
    return(
        <div>
            <Navbar />
            <div className="space-y-6 p-6">
                <h1 className="text-2xl font-bold md:text-4xl">Assinatura</h1>

                <div className="flex gap-6">
                    <Card className="md:w-[450px] w-full">
                        <CardHeader className="border-b border-solid py-8">
                            <h2 className="text-center text-2xl font-semibold">
                                Plano Básico
                            </h2>
                            <div className="flex items-center gap-3 justify-center">
                                <span className="text-4xl">R$</span>
                                <span className="font-semibold text-6xl">0</span>
                                <div className="text-2xl text-muted-foreground">/mês</div>
                            </div>
                        </CardHeader>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Subscription