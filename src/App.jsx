
import { CardFinal } from "./components /CardFinal";
import { CardInicial } from "./components /CardInicial";

import { useState } from "react";

export function App () {

  const[notaAvaliacao,setNotaAvaliacao] = useState(0)
  const[submited,setSubmited] = useState(false)

  function hadleMudarNotaAvaliacao(nota){
      setNotaAvaliacao(nota)
  }

  function handleSubmit(){
    if(notaAvaliacao !== 0){
      setSubmited(true)
      return
    }

    alert("Escolha uma nota")
  }

  
  return (
    submited===false? (
      <CardInicial setNotaAvaliacao={setNotaAvaliacao} handleSubmit={handleSubmit}/>
    ) : (
     <CardFinal notaAvaliacao={notaAvaliacao}/>
    )
  )
}