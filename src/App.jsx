import starIcon from "./assets/icon-star.svg";
import illustrationTrankYou from "./assets/illustration-thank-you.svg"

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
      <div className="bg-gradient-dark text-white mx-6 p-6 rounded-2xl font-overpass max-w-103">
        <div className="bg-dark-blue w-fit p-4 rounded-full mb-4 ">
        <img src={starIcon} alt="Icon Star" />
      </div>

      <h1 className="text-2xl font-bold mb-2.5 ">How did we do?</h1>

      <p className=" text-light-grey mb-6  text-sm">Please let us know how we did with your support request. 
        All feedback is appreciated to help us improve our offering!</p>

        <div className="flex justify-between mb-6">
          <input type="button" value={1} className="bg-dark-blue w-10.5 h-10 rounded-full text-medium-grey text-sm font-bold focus:bg-medium-grey focus:text-white sm:w-13 sm:h-13 hover:bg-orange hover:text-white hover: cursor-pointer" onClick={()=>hadleMudarNotaAvaliacao(1)}/>
          <input type="button" value={2}  className="bg-dark-blue w-10.5 h-10 rounded-full text-medium-grey text-sm font-bold focus:bg-medium-grey focus:text-white sm:w-13 sm:h-13 hover:bg-orange hover:text-white hover: cursor-pointer" onClick={()=>hadleMudarNotaAvaliacao(2)}/>
          <input type="button" value={3} className="bg-dark-blue w-10.5 h-10 rounded-full text-medium-grey text-sm font-bold focus:bg-medium-grey focus:text-white sm:w-13 sm:h-13 hover:bg-orange hover:text-white hover: cursor-pointer" onClick={()=>hadleMudarNotaAvaliacao(3)}/>
          <input type="button" value={4} className="bg-dark-blue w-10.5 h-10 rounded-full text-medium-grey text-sm font-bold focus:bg-medium-grey focus:text-white sm:w-13 sm:h-13 hover:bg-orange hover:text-white hover: cursor-pointer" onClick={()=>hadleMudarNotaAvaliacao(4)}/>
          <input type="button" value={5} className="bg-dark-blue w-10.5 h-10 rounded-full text-medium-grey text-sm font-bold focus:bg-medium-grey focus:text-white sm:w-13 sm:h-13 hover:bg-orange hover:text-white hover: cursor-pointer" onClick={()=>hadleMudarNotaAvaliacao(5)}/>
        </div>

        <button onClick={handleSubmit}  className="bg-orange w-full uppercase tracking-1 font-bold rounded-3xl text-sm py-3 hover:bg-white hover:text-orange cursor-pointer">SUBMIT</button>
    </div>
    ) : (
      <div className="bg-gradient-dark text-white mx-6 p-6 rounded-2xl font-overpass max-w-103">
        <img className="mx-auto mb-6" src={illustrationTrankYou} alt="illustration thankyou" />

        <p className="text-orange bg-dark-blue w-fit mx-auto px-3 py-1.25 rounded-3xl mb-6">You selected {notaAvaliacao} out of 5</p>

        <h1 className="text-2xl font-bold mb-2.5 text-center">Thank you!</h1> 

        <p className=" text-light-grey text-sm text-center">We appreciate you taking the time to give a rating. 
          If you ever need more support, don’t hesitate to get in touch!</p>
    </div>
    )
  )
}