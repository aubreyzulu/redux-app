import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.onAddition} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtraction} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: 'INCREMENT' }),
        onDecrementCounter: () => dispatch({ type: 'DECREMENT' }),
        onAddition: () => dispatch({ type: 'ADDITION', val: 10 }),
        onSubtraction: () => dispatch({ type: 'SUBTRACTION', val: 15 })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);