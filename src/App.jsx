import React from "react"

const Tombol = (props) => {

  const {children = 'Tombol', color} = props;

  return (<button type="button" className={`text-white bg-${color}-700 hover:bg-${color}-800 focus:ring-4 focus:ring-${color}-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-${color}-600 dark:hover:bg-${color}-700 focus:outline-none dark:focus:ring-${color}-800`}>
    {children}
  </button>)
}



function App() { 


  return (
    <> 
      <div className="text-center min-h-screen bg-blue-200 pt-6">

        <h1 className="text-2xl">Priana Saputra</h1>

        <br />

      

       <Tombol color="red" >
          Klik Saya
       </Tombol>
       <Tombol color="blue">
          Klik Saya
       </Tombol>
       
       <Tombol color="blue" />
      

      </div>  

     
     
     
    </>
  )
}

export default App
