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
        // <div className="grid h-full grid-cols-2">
        <div className="grid h-full grid-cols-2 justify-center items-center">

            {/* ESQUERDA */}
            <section className="flex gap-10 h-full w-screen flex-col justify-center max-w-[500px] p-8 mx-auto">
            <Image src="/logo.svg" width={173} height={39} alt="Finances Now" className="animate-pulse mx-auto mb-20" />
            <h1 className="text-4xl font-bold">Bem-Vindo</h1>
            <p className="text-green-600 text-xl text-justify tracking-wider">Seu dinheiro trabalhando para você, crescendo a cada dia com o seu esforço e construindo um futuro melhor. Não deixe para depois! Investir não é apenas aplicar, mas também cuidar para colher os frutos no futuro próximo.</p>
            <SignInButton>
                <Button variant="outline">
                    <LogInIcon className="mr-2" />
                    Fazer login ou criar conta
                </Button>
            </SignInButton>
            </section>
            {/* DIREITA */}
            <section className="relative h-full w-full hidden md:block">
                <Image src="/login.png" fill className="object-cover" alt="Finances Now" />
            </section>

        </div>
    )
}