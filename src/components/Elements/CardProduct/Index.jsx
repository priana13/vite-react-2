import Tombol from "../Tombol/Index";


const CardProduct = (props) => {

    const {children} = props;

    return (
        <>            
            <div className="w-[200px] max-w-sm bg-white border border-gray-200 rounded-lg shadow p-2 hover:scale-105 duration-100 flex flex-col justify-between">
              
              {children}

            </div>
        </>
    )
}


const Image = (props) => {

    const {image} = props;

    return (
      <a href="" className="">                       
        <img src={image} alt="" className="rounded-t-lg w-full" />
       </a>
    )
}

const Description = (props) => {

    const {children , title} = props;

    return (
        <div className="h-full">
            <h3 className="text-xl font-bold mt-2">{title}</h3>
            <p className="my-4">{children}</p>
        </div>
    )
}

const Footer = (props) => {

    const {price , addToCart} = props;

    return (
    <>
        <h2 className="text-2xl font-bold my-22">{price.toLocaleString('id-ID' , {styles: 'currency' , currency: 'IDR'})}</h2>

        <div className="text-center my-3">
            <Tombol bg="bg-blue-500 hover:bg-blue-700" handleAddToCart={addToCart}>Add To Cart</Tombol>                   
        </div> 

    </>
    )
}

CardProduct.Image = Image;
CardProduct.Description = Description;
CardProduct.Footer = Footer;

export default CardProduct;