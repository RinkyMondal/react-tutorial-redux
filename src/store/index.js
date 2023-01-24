import { legacy_createStore as createStore } from 'redux';

const initialState = { counter: 0, showCounter: true }
//the reducer needed by the store
const counterReducer = (state = initialState, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        };
    }

    if (action.type === 'increase') {
        return {
            counter: state.counter + action.amount,  //demonstrating action payloads
            showCounter: state.showCounter
        }
    }

    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        };
    }

    if (action.type === 'toggle') {
        return {
            showCounter: !state.showCounter,
            counter: state.counter
        }
    }
    
    return state;
}

const store = createStore(counterReducer);

export default store;