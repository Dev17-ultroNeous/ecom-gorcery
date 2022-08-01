export const AddToCart = (product) => {
    return {
        type: "AddToCart",
        paylod: product,
    };
};
export const AddToFav = (product) => {
    return {
        type: "AddToFav",
        paylod: product,
    };
};
