import Topo from "@/components/Topo";
import { useState, useEffect } from "react";
import Globais from "@/components/Globais";

export default function useeffect() {
    const [cont, setCont] = useState<number>(0)
    const [aux, setAux] = useState<number>(0);

    useEffect(() => {
        alert("Useeffect disparado")
        Globais.canal = "CFBDrone"
        Globais.curso = "Typescript"
        Globais.ano = "2099"
    },[aux])


    function add() {
        let c = aux;
        c++;
        setAux(c);
    }

    return (
        <div>
            <Topo></Topo>
            <div>
                <p>{`Valor de cont ${cont}`}</p>
                <p>{`Valor de aux ${aux}`}</p>
                <button onClick={add}>Adicionar 1</button>
            </div>
            <div>
                <p>{Globais.canal}</p>
                <p>{Globais.curso}</p>
                <p>{Globais.ano}</p>
            </div>
        </div>
    )
}
