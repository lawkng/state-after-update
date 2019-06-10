import React from 'react';

class SelectViewClassComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selectedExchange: 'binance'};
    }

    onChangeHandler = (e) => {
        /*
            Put a callback funtion in setState will allow you to access the state value as soon as you set it, else the state value will always be the previous value.
        */
        this.setState({ selectedExchange: e.target.value }, () => {
            console.log(`Your selected exchange is ${this.state.selectedExchange}`)
        });
    }

    render() {
        return (
            <div>
            <select
                value={this.state.selectedExchange}
                onChange={this.onChangeHandler}>
                <option value="coinbase">Coinbase</option>
                <option value="binance">Binance</option>
                <option value="coinspot">Coinspot</option>
            </select>
            </div>
        )
    }
}

export default SelectViewClassComp;