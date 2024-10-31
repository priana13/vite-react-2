import { Link } from "react-router-dom";
import Tombol from "../Tombol/Index";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/slices/cartSlice";


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

    const {image, id} = props;

    return (
      <Link to={`/product/${id}`} className="">                       
        <img src={image} alt="" className="rounded-t-lg w-full h-[200px] object-cover" />
       </Link>
    )
}

const Description = (props) => {

    const {children , title} = props;

    return (
        <div className="h-full">
            <h3 className="text-xl mt-2">{title.substring(0,20)}...</h3>
            <p className="my-4">{children}</p>
        </div>
    )
}

const Footer = (props) => {

    const {id , price} = props;
    const dispatch = useDispatch();

    return (
    <>
        <h2 className="text-2xl font-bold my-22 text-center">${price.toLocaleString('id-ID' , {styles: 'currency' , currency: 'IDR'})}</h2>

        <div className="text-center my-3">            

            <button type="button" className={`text-white bg-blue-500 hover:bg-blue focus:ring-4 focus:ring-bg-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-bg-blue-600 dark:hover:bg-bg-blue-700 focus:outline-none dark:focus:ring-bg-blue-800`}   
            onClick={() => dispatch( addToCart({id , qty: 1})) }
            >
            Add To Cart
            </button>

        </div> 

    </>
    )
}

CardProduct.Image = Image;
CardProduct.Description = Description;
CardProduct.Footer = Footer;

export default CardProduct;