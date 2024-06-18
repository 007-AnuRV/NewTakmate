
/*import { useTitle } from "../hooks/useTitle";
import { ProductCard } from "../Components";
import { products as allProducts } from "../products/products";

import { Link } from "react-router-dom";

export const Products = () => {
useTitle("Products");

return (
<main>
<section className="products">
{allProducts.length > 0 ? (
allProducts.map((product) => (
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
};*/



import { useLocation } from 'react-router-dom';
import { useTitle } from "../hooks/useTitle";
import { ProductCard } from "../Components";
import { products as allProducts } from "../products/products";
import { Link } from "react-router-dom";

export const Products = () => {
  useTitle("Products");
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get('category') || 'All';

  const filteredProducts = allProducts.filter(
    (product) => product.category === category
  );

  return (
    <main>
      <section className="products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="not-found-container">
            <img
              className="not-found-image"
              src="../assets/no_data.jpg"
              alt="No products found"
            />
            <p className="not-found-text">No products found</p>
            <Link to="/" className="go-home-button">
              Go to Home
            </Link>
          </div>
        )}
      </section>
    </main>
  );
};
