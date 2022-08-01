const counterReducer = (state = 10, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        case "RESET":
            return (state = 10);
        default:
            return state;
    }
};
export default counterReducer;
