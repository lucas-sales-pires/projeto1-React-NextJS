import { useState } from "react"
import Topo from "@/components/Topo"

const cursos = ["HTML","React","C++","Javascript","Arduino","CSS"]

export default function inputs() {
    const [nome, setNome] = useState<string>("")
    const [curso, setCurso] = useState<string>(cursos[0])

    function fcursos() {
        
    }

    return (
        <div>
            <Topo />
            <div className="campoForm">
                <label>Nome</label>
                <input type="text" value={nome} onChange={((v) => setNome(v.target.value))}></input>
            </div>
            <div className="campoForm">
                <label>Curso</label>
                <select value={curso} onChange={(evt) => setCurso(evt.target.value)}>
                  {
                    cursos.map((c:any)=>{
                        return <option value={c}>Curso de {c}</option>
                    })
                  }
                </select>
            </div>
            <div>Nome digitado: {nome}</div>
            <div>Curso digitado: {curso}</div>
        </div>
    )
}
