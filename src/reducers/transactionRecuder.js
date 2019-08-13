import constants from '../constants/actionTypes'

var initialState = {
    transaction: localStorage.getItem('transaction') ? localStorage.getItem('transaction') : '',
    transactions: localStorage.getItem('transactions') ? localStorage.getItem('transactions') : ''
}

export default (state = initialState, action) => {

    var updated = Object.assign({}, state);

    switch(action.type) {
        case constants.CREATE_TRANSACTION:
            updated['transaction'] = action.transaction;
            return updated;
        case constants.SET_TRANSACTIONS:
            updated['transactions'] = action.transactions;
            return updated;
        case constants.FETCH_TRANSACTIONS:
            updated['transactions'] = action.transactions;
            updated['selectedTransaction'] = action.transactions[0];
            return updated;
        case constants.FETCH_TRANSACTION:
            updated['selectedTransaction'] = action.selectedTransaction;
            return updated;

        default:
            return state;
    }
}

