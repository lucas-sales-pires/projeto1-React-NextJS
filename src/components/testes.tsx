import { useState } from "react";

export default function Operacao () {
    const [numero,setNumero] = useState(0)
    return(

        <button onClick={()=>setNumero(numero => numero+1)}>+</button>
)
}

