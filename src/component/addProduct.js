import React, { useState } from "react";
import { createProduct } from "../services/productService";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const AddProduct = () => {
  const [sku, setSku] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState(null);
  const history = useHistory();


  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
    const newProduct = {
        "sku": sku,
        "name": name,
        "description": description,
        "price":price,
        "image": image
    };

    //calling the add Book service
    createProduct(newProduct).then((res) => {
      if (res.ok) {
        alert("Book Added Successfully");
        history.push("/"); //redirected to the view page after success data entry
        window.location.reload();
      } else {
        alert("Something Went Wrong");
      }
    });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="sku">SKU:</label>
          <input
            type="text"
            id="sku"
            value={sku}
            onChange={(event) => setSku(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={(event) => setPrice(Number(event.target.value))}
          />
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
