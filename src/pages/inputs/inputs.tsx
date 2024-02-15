import { useState, useEffect } from "react"
import Topo from "@/components/Topo"
import Globais from "@/components/Globais"

const cursos = ["HTML","React","C++","Javascript","Arduino","CSS"]

export default function inputs() {
    const [nome, setNome] = useState<string>("")
    const [curso, setCurso] = useState<string>(cursos[0])
    
    useEffect(()=>{
        Globais.curso = "React"
    },[])

    function fcursos() {
        return cursos.map((c:any)=>{
            return <option value={c}>{c}</option>
        })
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
                 {fcursos()}
                </select>
            </div>
            <div>Nome digitado: {nome}</div>
            <div>Curso digitado: {curso}</div>
            <div>
                <p>{Globais.canal}</p>
                <p>{Globais.curso}</p>
                <p>{Globais.ano}</p>
            </div>
        </div>
    )
}
