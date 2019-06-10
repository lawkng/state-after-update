import { combineReducers } from 'redux';

const BTCReducer = (state, action) => {
    return {
        ...state
    }
};


const LTCReducer = (state, action) => {
    return {
        ...state
    }
};


const BNBReducer = (state, action) => {
    return {
        ...state
    }
};

const TradeActionReducer = (state = '', action) => {
    if (action.type === 'UPDATE_TRADE_ACTION') {
        return {
            ...state,
            ...action.payload.newState
        }
    }
    return state;
}

const allReducers = combineReducers({
    BTC: BTCReducer,
    LTC: LTCReducer,
    BNB: BNBReducer,
    tradeAction: TradeActionReducer
});

export default allReducers;