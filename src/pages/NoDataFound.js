

import { Link } from "react-router-dom";
import './NoDataFound.css';

export const NoDataFound = () => {
  return (
    <div className="not-found-container">
      <img 
        className="not-found-image" 
        src="../assets/no_data.jpg" 
        alt="No products found" 
      />
      <div className="not-found-text">
        <h1>No products found</h1>
        <p>We couldn't find any products that match your search.</p>
      </div>
      <Link to="/" className="go-home-button">Go to Home</Link>
    </div>
  );
};
