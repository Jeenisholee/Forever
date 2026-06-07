import { createContext, useState } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();
export const ShopContextProvider = (props) => {
    const currency = 'Rs.';
    const shippingCost = 100;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);

    
    const value = {
        products , currency , shippingCost,
        search , setSearch,
        showSearch , setShowSearch
    
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}       
