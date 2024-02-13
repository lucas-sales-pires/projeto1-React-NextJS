// import Image from "next/image";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });
import Topo from "../components/Topo";
import Card from "../components/Card";

const nome = "Lucas";
let canal = "Thelucas2011";



export default function Home() {

  return (
    <main>
      <div>
        <Topo></Topo>
        <div style={teste}>
          <div>Curso de react Next</div>
          <div>Typescript</div>
          <div style={{ color: "#f00", backgroundColor: "#bbb" }}>React</div>
        </div>
       
      </div>
    </main>
  );
}

const teste = {
  display: "flex",
  justifyContent: "center",
  alignItens: "center",
  color: "#00f",
  backgroundColor: "#eee",
  fontSize: "20px"

}
