export const InitialValue = {
    products: [],
    term: "",
    filter: "all",
}

const GlobalReducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case "ADD_TO_CARD":
            console.log("ADD_TO_CARD", payload);
            return { ...state, products: payload.product }
        case "DELET_FROM_CARD":
            console.log("ADD_TO_CARD", payload);
            return { ...state, products: payload.product }
        default:
            throw new Error(`No case for type ${type}`)
    }
}

export default GlobalReducer