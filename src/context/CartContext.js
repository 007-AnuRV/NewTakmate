import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/cartReducer";
const initialState={
    cartList:[],
    total:0
}
//abb ek cardcontext bnayenge jo ki cartlist ya total value rkhega jaise jaise hmare activity bdhte jaayenge  
const CartContexts= createContext(initialState);
 
//we create a provider jo ki access all the value
//so we create the provider and wrap the App

 export const CartProvider=({children}) =>{
      const [state,dispatch]=useReducer(cartReducer,initialState);
      
      const addToCart=(product)=>{
       const updatedCart= state.cartList.concat(product);
       updateTotal(updatedCart);
       dispatch({
        type:"ADD_TO_CART",
        payload:{
           abc:updatedCart
        }
       })
      }
      
      const removeFromCart=(product)=>{
        const updatedCart=state.cartList.filter(current=>current.id!==product.id);
        updateTotal(updatedCart);
        dispatch({
          type:"REMOVE_FROM_CART",
          payload:{
             abc:updatedCart
          }
         })
      }

      const updateTotal=(abc)=>{
        let total=0;
       abc.forEach(product=>total=total+product.price);
        dispatch({
          type:"UPDATE_TOTAL",
          payload:{
            total
          }
        })
      }


      const value={
        total:state.total,
        cartList:state.cartList,
        addToCart,
        removeFromCart
        
      };
      return (
        <CartContexts.Provider value={value}>
             {children}
        </CartContexts.Provider>
      ); 
}
//hmne ek own provider create kiya jo ki children pr work krega i.e (App) aur uss provider me value pass hoga i.e value may be a method or function that uses in WebPage means remove aur Add to Cart ye dono bhi as a method aur function h jisse click krne pr koi function hota hoga
//now return krega provider value ko lega aur access krega aur children i.e App ko saari chize return kr dega
//here we are creating a useCart function that will help all the components to access and call all the value
export const useCart=()=>{
     const context=useContext(CartContexts);
    return context;
}















