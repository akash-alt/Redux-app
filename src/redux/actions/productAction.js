import { ActionTypes } from "../contants/action-types";

export const setProducts = (products)=>{
    return {
        type:ActionTypes.SET_PRODUCTS,
        payload:products,
    };
};

export const selectedProduct = (product)=>{
    return {
        type:ActionTypes.SELECTED_PRODUCT,
        payload:product,
    };
};

export const removeSelectedProduct = (product)=>{
    return {
        type:ActionTypes.SELECTED_PRODUCT,
        
    };
};

// ------- note --------
// 2nd step
// step 9th for
// here using (Dispatch)