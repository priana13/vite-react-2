import CardProduct from "../Elements/CardProduct/Index";


const products = [
    {
        'id' : 1, 
        'title': 'Sepatu Baru 01',
        'price' : 'Rp. 200.000',
        'descpriction' : ' Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        'image' : '/sepatu.jpeg'
    },
    {
        'id' : 2, 
        'title': 'Sepatu Baru 02',
        'price' : 'Rp. 230.000',
        'descpriction' : ' Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        'image' : '/sepatu.jpeg'
    },
    {
        'id' : 3, 
        'title': 'Sepatu Baru 03',
        'price' : 'Rp. 220.000',
        'descpriction' : ' Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        'image' : '/sepatu.jpeg'
    }
]; 



const ProductPage = () => {  


    return (
       
            <div className="flex justify-center gap-2"> 
           
            {products.map((product) => {

                return (
                <CardProduct key={product.id}>
                    <CardProduct.Image image={product.image} />
                    <CardProduct.Description   title={product.title}  >
                        {product.descpriction}
                    </CardProduct.Description>
                    <CardProduct.Footer price={product.price} />
                </CardProduct>
                );

            })}
              
            </div>           
      
    );
}

export default ProductPage;