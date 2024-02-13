import Card from "@/components/Card";
import Topo from "@/components/Topo";

function calcDesc(v: number, d: number) {
    return v - d;
}

function calcDesc2(v: number, d: number) {
    return v - (d / 2);
}

const produtos = [
    {
        produto: "Mouse",
        valor: 49.90,
        desconto: 0,
        disponivel: true
    },
    {
        produto: "Teclado",
        valor: 69.90,
        desconto: 5,
        disponivel: true
    },
    {
        produto: "Monitor",
        valor: 499.90,
        desconto: 50,
        disponivel: true
    },
    {
        produto: "CPU",
        valor: 1449.90,
        desconto: 100,
        disponivel: true
    },
    {
        produto: "CX.Som",
        valor: 39.90,
        desconto: 0,
        disponivel: true
    }
]

export default function produtosPagina() {
    return (
        <div>
            <Topo />
            <div className="flex gap-3 justify-center">

                {produtos.map((e) => {
                    return (
                        <Card produto={e.produto} valor={e.valor} desconto={e.desconto} funcao={calcDesc} />
                    )
                })}
            </div>
        </div>
    )
}
