/*import { useState, useEffect } from "react";
import { useTitle } from "../hooks/useTitle";
import { ProductCard } from "../Components";
import { products as allProducts } from "../products/products";
import { useNavigate } from "react-router-dom";
import './Home.css';

export const Home = () => {
  useTitle("Home");
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [subcategory, setSubcategory] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
    if (selectedCategory === "All" || selectedCategory !== "Clothing") {
      setSubcategory("");
    }
  };

  useEffect(() => {
    const filteredProducts = allProducts.filter(product => {
      const isCategoryMatch = category === "All" || product.category === category;
      const isSubcategoryMatch = subcategory === "" || product.subcategory === subcategory;
      const isSearchMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      return isCategoryMatch && isSubcategoryMatch && isSearchMatch;
    });
    setFilteredProducts(filteredProducts);
  }, [searchTerm, category, subcategory]);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      if (filteredProducts.length > 0) {
        navigate("/product_found");
      }
    }
  };

  document.addEventListener('keydown', handleKeyPress);

  return (
    <main>
      <section className="filter-bar">
        <input 
          type="text" 
          placeholder="Search products..." 
          value={searchTerm} 
          onChange={handleSearch} 
        />
        <select value={category} onChange={handleCategoryChange}>
          <option value="All">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Home Appliances">Home Appliances</option>
        </select>
      </section>
      <section className="products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="not-found-container">
            <img className="not-found-image" src="../assets/no_data.jpg" alt="No products found" />
            <p className="not-found-text">No products found</p>
          </div>
        )}
      </section>
    </main>
  );
};
*/



import { useState, useEffect } from "react";
import { useTitle } from "../hooks/useTitle";
import { ProductCard } from "../Components";
import { products as allProducts } from "../products/products";
import { Link, useNavigate } from "react-router-dom";
import './Home.css';

export const Home = () => {
  useTitle("Home");
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [subcategory, setSubcategory] = useState("");
  const navigate = useNavigate();

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
    if (selectedCategory !== "All") {
      navigate(`/products?category=${selectedCategory}`);
    } else {
      navigate(`/`);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`/matched?search=${searchTerm}`);
  };

  const filteredProducts = allProducts.filter(product => {
    const isCategoryMatch = category === "All" || product.category === category;
    const isSubcategoryMatch = subcategory === "" || product.subcategory === subcategory;
    const isSearchMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return isCategoryMatch && isSubcategoryMatch && isSearchMatch;
  });

  useEffect(() => {
    if (filteredProducts.length === 0 && searchTerm !== "") {
      navigate("/no_data_found");
    }
  }, [filteredProducts, searchTerm, navigate]);

  return (
    <main>
      <section className="filter-bar">
        <form className="search_bar"onSubmit={handleSearchSubmit}>
          <input 
            type="text" 
            placeholder="Search products..." 
            value={searchTerm} 
            onChange={handleSearch} 
          />
          </form>
          <select className="options" value={category} onChange={handleCategoryChange}>
            <option value="All">All</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Home Appliances">Home Appliances</option>
          </select>
          
        
      </section>
      <section className="products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="not-found-container">
            <img className="not-found-image" src="../assets/no_data.jpg" alt="No products found" />
            <p className="not-found-text">No products found</p>
            <Link to="/" className="go-home-button">Go to Home</Link>
          </div>
        )}
      </section>
    </main>
  );
};








  




