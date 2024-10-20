import CardProduct from "../Elements/CardProduct/Index";


const ProductPage = () => {

    return (
        <>
            <div className="flex justify-center gap-2"> 
              <CardProduct >
                 <CardProduct.Image image="/sepatu.jpeg" />
                 <CardProduct.Description   title="Sepatu Olahraga 1"  >
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 </CardProduct.Description>
                 <CardProduct.Footer price="Rp. 500.000" />
              </CardProduct>


              <CardProduct >
                 <CardProduct.Image image="/sepatu.jpeg" />
                 <CardProduct.Description title="Sepatu Orahraga 2" >
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 </CardProduct.Description>
                 <CardProduct.Footer price="Rp. 400.000" />
              </CardProduct>
              
              <CardProduct >
                 <CardProduct.Image image="/sepatu.jpeg" />
                 <CardProduct.Description title="Sepatu Orahraga 2" >
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 </CardProduct.Description>
                 <CardProduct.Footer price="Rp. 600.000" />
              </CardProduct>
              
            </div>           
        </>
    );
}

export default ProductPage;