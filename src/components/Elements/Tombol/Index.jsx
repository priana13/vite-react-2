const Tombol = (props) => {

    const {children = 'Tombol', bg , type = "button" , handleAddToCart} = props;
  
    return (<button type={type} className={`text-white ${bg} hover:${bg} focus:ring-4 focus:ring-${bg}-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-${bg}-600 dark:hover:bg-${bg}-700 focus:outline-none dark:focus:ring-${bg}-800`}   
    onClick={() => handleAddToCart()}
    >
      {children}
    </button>)
  }

  export default Tombol;