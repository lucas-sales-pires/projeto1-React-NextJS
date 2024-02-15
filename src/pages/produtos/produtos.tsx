import Card from "@/components/Card";
import Topo from "@/components/Topo";
import { useRouter } from "next/router";

function calcDesc(v: number, d: number) {
    return v - d;
}

function calcDesc2(v: number, d: number) {
    return v - (d / 2);
}

const produtos = [
    {   
        id:1,
        produto: "Mouse",
        valor: 49.90,
        desconto: 0,
        disponivel: true
    },
    {
        id:2,
        produto: "Teclado",
        valor: 69.90,
        desconto: 5,
        disponivel: true
    },
    {
        id:3,
        produto: "Monitor",
        valor: 499.90,
        desconto: 50,
        disponivel: true
    },
    {
        id:4,
        produto: "CPU",
        valor: 1449.90,
        desconto: 100,
        disponivel: true
    },
    {
        id:5,
        produto: "CX.Som",
        valor: 39.90,
        desconto: 0,
        disponivel: true,
    }
]

export default function ProdutosPagina() {
    const router = useRouter();
    // const nome = router.query.nome;
    // const curso = router.query.curso;
    const {nome,curso} = router.query
    console.log(nome)
    console.log(curso)
    return (
        <div>
            <Topo />
            <div className="flex gap-3 justify-center">

                {produtos.map((e) => {
                    return (
                        <Card key={e.id} produto={e.produto} valor={e.valor} desconto={e.desconto} funcao={calcDesc} >
                        <div>Teste Curso de React Next</div>
                        <div>CFBCursos</div>
                        </Card>
                        
                    )
                })}
            </div>
        </div>
    )
}
