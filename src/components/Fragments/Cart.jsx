import { useState } from "react";
import Tombol from "../Elements/Tombol/Index";

const Cart = (props) => {

   

    return <div className="mt-6 bg-gray-200 p-3 mx-5">
        <table >
            <thead>
                <tr className="text-center">
                    <td>Product</td>
                    <td>Qty</td>
                    <td>Price</td>
                </tr>
            </thead>
            <tbody>
                <tr className="text-center">
                    <td>Sepatu Baru</td>
                    <td>1</td>
                    <td>Rp. 2.000.000</td>
                </tr>
            </tbody>
        </table>

        <Tombol bg="bg-orange-600 mt-4">Checkout</Tombol>
    </div>
}

export default Cart;