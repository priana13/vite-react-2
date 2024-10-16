import React from "react"

import Tombol from "./components/Elements/Tombol";


function App() { 


  return (
    <> 
      <div className="text-center min-h-screen bg-blue-200 pt-6">

        <h1 className="text-2xl">Priana Saputra</h1>

        <br />
  

       <Tombol bg="bg-red-700" >
          Klik Saya
       </Tombol>
       <Tombol bg="bg-blue-700">
          Klik Saya
       </Tombol>
       
       <Tombol bg="bg-green-700" />
      

      </div>  

     
     
     
    </>
  )
}

export default App
