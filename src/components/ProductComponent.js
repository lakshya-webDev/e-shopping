import React, { Fragment } from "react";
import {Link} from 'react-router-dom'
import { useSelector } from "react-redux";
const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, price, image, category } = product;
    let product_title=title.substring(0,40 + 1)+"...";
    return (
      <div className="col-md-3 mt-3 mb-3" key={id} id={`product-${id}`}>
        <Link to={`/product/${id}`} className="product-link">
          <div className={`card products-card product-${id}`}>
              <div className="product-image">
                 <img src={image} className="card-img-top img-fluid" /> 
             </div>
            <div className="card-body product-content">
              <h5 className="card-title text-dark product-title text-start">{product_title}</h5>
              <h6 className="card-subtitle mb-2 text-muted product-category text-start">{category}</h6>
              <p className="card-link product-price text-start">${price}</p>
              <p><button className="cart-btn">Add to Cart</button></p>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <Fragment>{renderList}</Fragment>;
};

export default ProductComponent;
