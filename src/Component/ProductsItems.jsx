import React from "react";

const ProductsItems = (props) => {
  const Product = props.products;
  return (
    <div>
      <div className="card text-center">
        <img src={Product.image} className="card-img-top" alt="products" />
        <div className="card-body">
            <h3>Name product</h3>
          <h5 className="card-title"> {Product.name}</h5>
          <p className="card-text">Price: {Product.price} dollar</p>
          <div>
              <button type="button" class="btn btn-primary">
                Mua ngay
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsItems;
