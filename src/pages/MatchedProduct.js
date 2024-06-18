import { useLocation } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
import { ProductCard } from "../Components";
import { products as allProducts } from "../products/products";
import { Link } from "react-router-dom";

export const MatchedProduct = () => {
  useTitle("Search Results");
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get('search') || '';

  const filteredProducts = allProducts.filter(
    (product) => product.name.toLowerCase().includes(searchTerm.toLowerCase())
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
