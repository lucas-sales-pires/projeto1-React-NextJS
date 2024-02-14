import { useState } from "react";

export default function operacao () {
    const [numero,setNumero] = useState(0)
    return(

        <button onClick={()=>setNumero(numero => numero+1)}>+</button>
)
}

