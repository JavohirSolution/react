import { createContext, useReducer ,useContext} from "react";
import GlobalReducer, { InitialValue } from "./globalReducer";

const Context = createContext(InitialValue)

export const GlobalProvider = ({ children }) => {
    const { state, dispatch } = useReducer(GlobalReducer, InitialValue)

    const addChart = (product) => {
        const updatedChart = state.products.concat(product)

        dispatch({
            type: "ADD_TO_CARD",
            payload:{
                products: updatedChart
            }
        })
    }

    const value = {
        products: state.products,
        addChart
    }

    return <Context.Provider value={value}>{children}</Context.Provider>
}


const UseShop = () => {
    const context = useContext(Context)

    if(context === undefined){
        throw new Error("useShop must bu used within ShopContext")
    }
    return context
}

export default UseShop