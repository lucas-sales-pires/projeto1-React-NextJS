import { useState } from "react"
import Displaystate from "@/components/DisplayState"
export default function usestate() {
    //Primeiro estado e próximo estado
    let [cont, setCont] = useState<number>(0)


    return (
        <div>
            Usestate
                <Displaystate valor={cont}  fvalor={setCont}></Displaystate>
        </div>
    )
}
