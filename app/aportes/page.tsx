import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { auth } from "@clerk/nextjs/server"
import { CheckIcon, XIcon } from "lucide-react"
import { redirect } from "next/navigation"

const Aportes = () => {
    const {userId} = auth()
    if(!userId) redirect('/login')
    return(
        <div className="w-screen">
            <Navbar />
            <div className="space-y-6 p-6 w-full">
                <h1 className="text-2xl font-bold md:text-4xl text-center text-primary mb-10">Assinaturas</h1>
                <div className="flex flex-col md:flex-row gap-6 justify-center w-full">
                    <Card className="md:w-[420px] w-full">
                        <CardHeader className="border-b border-solid py-8">
                            <h2 className="text-center text-2xl font-semibold">
                                Plano Pro Junior
                            </h2>
                            <div className="flex items-center gap-3 justify-center">
                                <span className="text-4xl">R$</span>
                                <span className="font-semibold text-6xl">400</span>
                                <div className="text-2xl text-muted-foreground">/mês</div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-6 py-6 flex flex-col">
                            <div className="flex items-center gap-2">
                                <CheckIcon className="text-primary" />
                                <p>Apenas 4 conexões por mês(4/16)</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <XIcon className="text-primary" />
                                <p>Inicio e acompanhamento.</p>
                            </div>
                            <Button className="rounded-full bg-primary">Adquirir plano</Button>
                        </CardContent>
                    </Card>
                    <Card className="md:w-[420px] w-full">
                        <CardHeader className="border-b border-solid py-8">
                            <h2 className="text-center text-2xl font-semibold">
                                Plano Conteúdo Vip + Remoto
                            </h2>
                            <div className="flex items-center gap-3 justify-center">
                                <span className="text-4xl">R$</span>
                                <span className="font-semibold text-6xl">800</span>
                                <div className="text-2xl text-muted-foreground">/mês</div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-6 py-6 flex flex-col">
                            <div className="flex items-center gap-2">
                                <CheckIcon className="text-primary" />
                                <p>Apenas 10 conexões por mês(10/16)</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <XIcon className="text-primary" />
                                <p>Inicio e primeiros projetos fullStack.</p>
                            </div>
                            <Button className="rounded-full bg-primary">Adquirir plano</Button>
                        </CardContent>                        
                    </Card>
                    <Card className="md:w-[420px] w-full">
                        <CardHeader className="border-b border-solid py-8">
                            <h2 className="text-center text-2xl font-semibold">
                                Plano Pro Particular + Projetos
                            </h2>
                            <div className="flex items-center gap-3 justify-center">
                                <span className="text-4xl">R$ </span>
                                <span className="font-semibold text-6xl">1.200,00</span>
                                <div className="text-2xl text-muted-foreground">/mês</div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-6 py-6 flex flex-col">
                            <div className="flex items-center gap-2">
                                <CheckIcon className="text-primary" />
                                <p>Apenas 16 conexões por mês(16/16)</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <XIcon className="text-primary" />
                                <p>Projetos fullStack Jobs sob orientação.</p>
                            </div>
                            <Button className="rounded-full bg-primary">Adquirir plano</Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Aportes