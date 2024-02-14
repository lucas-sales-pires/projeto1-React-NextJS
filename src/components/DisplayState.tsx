interface DisplayStateprops {
    valor: number,
    fvalor:any;
}

export default function DisplayState(props: DisplayStateprops) {
    

    function operacao(op:number) {
        let c = props.valor;
        c+=op;
        props.fvalor(c)
    }

    return (
        <div className="flex flex-col p-5 rounded-md bg-zinc-300 justify-center items-center w-[300px]">
        <div className="flex bg-zinc-700 text-white justify-center items-center w-[200px] mb-3">
            {props.valor}
        </div>
            <div className="flex gap-5">
                <button className="btnPadrao" onClick={()=>operacao(1)}>Adicionar</button>
                <button className="btnPadrao" onClick={()=>operacao(-1)}>Subtrair</button>
            </div>
        </div>
    )

}
