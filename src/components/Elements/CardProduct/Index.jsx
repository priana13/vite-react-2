import Tombol from "../Tombol/Index";


const CardProduct = () => {

    return (
        <>
            
            <div className="w-[200px] max-w-sm bg-white border border-gray-200 rounded-lg shadow p-2 hover:scale-105 duration-100">
                <a href="" className="">                       
                    <img src="/sepatu.jpeg" alt="" className="rounded-t-lg w-full" />
                </a>

                <p className="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                <h2 className="text-2xl font-bold my-22">Rp. 1000.000</h2>

                <div className="text-center my-3">
                    <Tombol bg="bg-blue-500 hover:bg-blue-700">Add To Cart</Tombol>                   
                </div>                   

            </div>
        </>
    )
}

export default CardProduct;