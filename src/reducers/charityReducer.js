import constants from '../constants/actionTypes'

var initialState = {
    charities: [],
    selectedCharity: null
};

export default (state = initialState, action) => {

    var updated = Object.assign({}, state);

    switch(action.type) {
        case constants.FETCH_CHARITIES:
            updated['charities'] = action.charities;
            updated['selectedCharity'] = action.charities[0];
            return updated;
        case constants.SET_CHARITY:
            updated['selectedCharity'] = action.selectedCharity;
            return updated;
        case constants.FETCH_CHARITY:
            updated['selectedCharity'] = action.selectedCharity;
            return updated;
        default:
            return state;
    }
}