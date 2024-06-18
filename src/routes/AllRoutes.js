//YE BEST THA
/*import { Routes, Route } from 'react-router-dom';
import { Home, Cart, NoDataFound, Products } from "../pages";

export const AllRoutes = () => {
return (
<>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/cart" element={<Cart />} />
<Route path="/no_data_found" element={<NoDataFound />} />
<Route path="/products" element={<Products category="Electronics" />} />
</Routes>
</>
);
}; */


import { Routes, Route } from 'react-router-dom';
import { Home, Cart, NoDataFound, Products,MatchedProduct } from "../pages";
//import { MatchedProduct } from "../pages";  // Import the new component

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/no_data_found" element={<NoDataFound />} />
        <Route path="/products" element={<Products category="Electronics" />} />
        <Route path="/matched" element={<MatchedProduct />} />  
      </Routes>
    </>
  );
};







/*import { Routes, Route } from 'react-router-dom';
import { Home,Cart } from "../pages";


export const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        
    </Routes>
    </>
  )
}*/
