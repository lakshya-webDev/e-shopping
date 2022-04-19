import React,{useEffect} from 'react'
import {useSelector,useDispatch} from "react-redux"
import ProductComponent from './ProductComponent';
import { setProducts } from '../redux/actions/productActions';
import axios from 'axios';
const ProductListing = () => {
    const products = useSelector((state)=>state);
    const dispatch =useDispatch();
    const fetchProducts = async () => {
        const response = await axios
          .get("https://fakestoreapi.com/products")
          .catch((err) => {
            console.log("Err: ", err);
          });
        dispatch(setProducts(response.data));
      };
    
    //  useEffect Hook to feth product from API when
     useEffect(()=>{
         fetchProducts();
     },[]);
     console.log(products,"PRODUCTS")
  return (
    <div className='container'>
        <div className="row">
           <ProductComponent/>
        </div>
    </div>
  )
}

export default ProductListing