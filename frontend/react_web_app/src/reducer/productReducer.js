const productReducer = (state ={} , action ) => {
    switch(action.type){
        case"LIST_PRODUCTS":
        return action.payload;
        default:
            return state;
    }
}

export default productReducer