import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";
const SingleProduct = () => {
  const product = useSelector((state) => state.product);
  const { id, title, price, image, category, description } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();
  const fetchSingleProduct = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((error) => {
        console.log(error, "SINGLE_PRODUCT_ERROR");
      });
    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    if (productId && productId !== "") fetchSingleProduct(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <div className="container mt-3 d-inline-flex">
    <div className="row product-card">
      <div className="card col-md-4 m">
        <img src={image} className="img-fluid rounded-start product-image" alt="..."/>
      </div>
      <div className="card col-md-8 ">
        <div className="card-body text-start">
          <h5 className="card-title product-title">{title}</h5>
          <p className="card-text product-description">{description}</p>
          <p className="card-text product-category"><small className="text-muted">{category}</small></p>
          <p className="card-text price display-6">${price}</p>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default SingleProduct;
