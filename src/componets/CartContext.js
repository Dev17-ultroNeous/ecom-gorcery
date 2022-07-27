import { createContext } from 'react'

const CartContext = createContext();

export function CartProvider({ children }) {
    <CartContext.Provider value={{ item: 1 }}>{children}</CartContext.Provider>
}


export default CartContext;