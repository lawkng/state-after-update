import React from 'react';
import { connect } from 'react-redux';
import { updateTradeAction } from '../actions';

class SelectViewReduxChange extends React.Component {


    componentDidUpdate(prevProps, prevState, snapshot) {
        /*
        https://stackoverflow.com/questions/36557089/how-to-listen-for-specific-property-changes-in-redux-store-after-an-action-is-di

        We can check the redux state props to compare the previous and current state values.
        
        When the state changes, this component will re-ender,
        we can then use the prevProps to check if the value has changed, and take action.

        */
        if (prevProps.selectedTradeAction !== this.props.selectedTradeAction) {
            console.log(`Trade order changed from ${prevProps.selectedTradeAction} to ${this.props.selectedTradeAction}`);
        }
    }

    onChangeHandler = (e) => {
        this.props.changeTradeAction(e.target.value);
    }

    render() {
        return (
            <div>
                <select
                    value={this.props.selectedTradeAction}
                    onChange={this.onChangeHandler}>
                    <option value="buy">Buy</option>
                    <option value="sell">Sell</option>
                    <option vaule="hold">Hold</option>
                </select>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    selectedTradeAction: state.tradeAction.order
})

const mapDispatchToProps = (dispatch) => {
    return {
        changeTradeAction: (data) => { dispatch(updateTradeAction(data)) }
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectViewReduxChange);