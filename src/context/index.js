import { createContext, useReducer } from "react"

const initialValue = {
    term: "",
    filter:"all",
    data: [],
}

export const Context = createContext(initialValue)

const reducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case "ON_DELETE":
            const deleteArr = state.data.filter(c => c.id !== payload)
            return { ...state, data: deleteArr }
        default:
            return { state }
    }
}

const Provider = ({ children }) => {
    const { state, dispatch } = useReducer(reducer, initialValue)
    return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
}

export default Provider