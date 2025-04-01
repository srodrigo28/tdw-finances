import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { LogInIcon } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function PageLogin() {
    const { userId } = auth();
    if(userId){
        redirect("/")
    }
    return(
        <div className="grid h-full grid-cols-2">

            {/* ESQUERDA */}
            <section className="flex gap-10 h-full flex-col justify-center max-w-[500px] p-8 mx-auto">
            <Image src="/logo.svg" width={173} height={39} alt="Finances Now" className="animate-pulse" />
            <h1 className="text-4xl font-bold">Bem-Vindo</h1>
            <p className="text-green-600 text-xl text-justify tracking-wider">Seu dinheiro trabalhando ao seu seu favor crescendo com seu esforço de cada dia, dando sentido a um futuro melhor não deixe para amanhã! Não e simplismente investir e cudar para ter no futuro próximo</p>
            <SignInButton>
                <Button variant="outline">
                    <LogInIcon className="mr-2" />
                    Fazer login ou criar conta
                </Button>
            </SignInButton>
            </section>
            {/* DIREITA */}
            <section className="relative h-full w-full">
                <Image src="/login.png" fill className="object-cover" alt="Finances Now" />
            </section>

        </div>
    )
}