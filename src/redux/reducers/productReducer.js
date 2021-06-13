import { ActionTypes } from "../contants/action-types";
const initialState={
    products:[]
}
export const productReducer = (state=initialState,{type,payload})=>{
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state,products:payload}
        default:
            return state;
    }
};

// ----------fetching 2nd API -----------//

export const selectedProductReducer = (state={},{type,payload})=>{
    switch (type) {
        case ActionTypes.SELECTED_PRODUCTS:
            return {...state,products:payload}
            case ActionTypes.REMOVE_SELECTED_PRODUCTS:
                return {} //showing data for the updated values
        default:
            return state;
    }
}




// this 3rd step
// so here we will remove data from products and will update state data from server
// Payload of an API Module is the body of your request and response message. 
// It contains the data that you send to the server when you make an API request.
// line no-8 --> data will be update
// ** now go to (productListing)
// 