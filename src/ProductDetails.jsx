import React, {useeffect , useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {useDispatch} from "react-redux";
import {addToCart} from "./redux/cartSlice";


const ProductDetails = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const dispatch = useDispatch();

    useeffect(() => {
        axios.get(`http://localhost:5173/products/${id}`)
        .then((res) => {
            setProduct(res.data);
        })
        .catch((error) => {
            console.error("Error fetching product details:", error);
        });
    },[id]);

    if (!product) { 
        return <P>Loading...</P>;
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
        </div>
    );
}

export default ProductDetails;

