import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Query } from "appwrite";
import ProductsCard from "../components/ProductsCard";

function Products() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("All Products");
  const [categories, setCategories] = useState([
    "All Products",
    "Cement",
    "Sand",
    "Pavers",
    "Putty",
    "Chemical",
    "Others",
  ]);

  useEffect(() => {
    appwriteService.getProducts().then((product) => {
      if (product) {
        setProducts(product.documents);
      }
    });
  }, []);

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  return (
    <div className="products-page">
      <section className="cement container">
        <div className="section-header mb-20 grid grid-cols-2">
          <select
            className="dropdown-menu"
            value={category}
            onChange={(e) => handleCategoryChange(e.target.value)}>
            {categories.map((cat) => (
              <option key={cat} value={cat} className="option">
                {cat}
              </option>
            ))}
          </select>
          <h2 className="inline-block text-5xl font-bold text-orange-600">
            {category}
          </h2>
        </div>
        <div className="products-list">
          {products.map((product) => {
            return (
              (category === "All Products" ||
                product.category === category.toLowerCase()) && (
                <ProductsCard
                  key={product.name}
                  name={product.name}
                  image={product.featuredimage}
                  link={product.productLink}
                />
              )
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Products;
