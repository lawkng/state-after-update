import React, { useState, useEffect } from 'react';

export const SelectViewUseEffect = (props) => {

    const [ selectedCoin, setCoin ] = useState('BTC');

    const onChangeHandler = (e) => {
        setCoin(e.target.value);
    }

    useEffect(() => {
        /*
            When the value of selectedCoin changes, this console.log will run.
            However, useEffect always run even onMount (first time when value is set) so is not perfect as we wants it to run AFTER init value changed not on init
        */
        console.log(`Your selected coin is ${selectedCoin}`);
    }, [selectedCoin]);

    return (
        <div>
        <select
            value={selectedCoin}
            onChange={onChangeHandler}>
            <option value="BTC">Bitcoin</option>
            <option value="LTC">Litecoin</option>
            <option value="BNB">Binance coin</option>
        </select>
        </div>
    )
}