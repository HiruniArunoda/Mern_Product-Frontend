import React, { useState, useEffect } from "react";

// import { getAllRecipe,deleteRecipe } from "../service/recipeService";

//

import { getAllProduct } from "../services/productService";

export default function Product() {
  const [productList, setProduct] = useState([]);


  useEffect(() => {
    getAllProduct().then((data) => {
      console.log(data);
      if (data) {
        setProduct(data.data.reverse());
      }
    });
  }, []);

  //adding components to the page body
  return (
    <div className="heading-container">
      <div className="heading">
        <h1>P R O D U C T S</h1>
      </div>
      <table class="table table-hover">
        <thead class="thead-dark">
          <tr>
            <th>SKU</th>
            <th>IMAGE</th>
            <th>PRODUCT NAME</th>
            <th>PRICE</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {productList.map((product) => {
            return (
              <tr>
                <td>{product.sku}</td>
                <td>
                  <img
                    src={product.image}
                    alt="product"
                    width="100px"
                    height="100px"
                  />
                </td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button> 
        <a href="/addProduct">Add Product</a>
        </button>
    </div>
  );
}
