import constants from '../constants/actionTypes'

var initialState = {
    products: [],
    selectedProduct: null
}

export default (state = initialState, action) => {

    var updated = Object.assign({}, state);

    switch(action.type) {
        case constants.FETCH_PRODUCTS:
            updated['products'] = action.products;
            updated['selectedProduct'] = action.products[0];
            return updated;
        case constants.SET_PRODUCT:
            updated['selectedProduct'] = action.selectedProduct;
            return updated;
        case constants.FETCH_PRODUCT:
            updated['selectedProduct'] = action.selectedProduct;
            return updated;
        default:
            return state;
    }
}