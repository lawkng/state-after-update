export const actionTest = (data) => {
    return {
        type: 'TEST_ACTION',
        payload: {
            newState: {
                ...data
            }
        }
    }
}

export const updateTradeAction = (val) => {
    return {
        type: 'UPDATE_TRADE_ACTION',
        payload: {
            newState: {
                order: val
            }
        }
    }
}