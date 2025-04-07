export const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(value);
}

export const formatDate = (value: string) => {
    return new Date(value).toLocaleDateString("pt-BR", { 
        day: "2-digit", 
        month: "short", 
        year: "numeric"
    })
}