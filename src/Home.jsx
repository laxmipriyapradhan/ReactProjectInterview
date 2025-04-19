import React, {useEffect , useState} from "react";
import axios from "axios";
import  {useDispatch} from "react-redux";
import  {addToCart} from "./redux/cartSlice";
import {Link} from "react-router-dom";

const Home = () => {
     const [products, setProducts] = useState([]);
     const dispatch = useDispatch();
     useEffect(() => {
        axios.get("http://localhost:3000/products")
        .then((res) => {
            setProducts(res.data);
        })
        .catch((error) => {
            console.error("Error fetching products:", error);
        });
     },[]);
return (
    <div >
        {products.map((product) => (
            <div key={product.id} >
                <Link to={`/product/${product.id}`}>
                    <h3>{product.name}</h3>
                    
                </Link>
                <p>{product.price}</p>
                <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
            </div>
        ))}
    </div>
    );
}


export default Home;
