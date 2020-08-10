import { createStore } from 'redux';


const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});


const setCount = ({ count }) => ({
    type: 'SET',
    count
});


const resetCount = () => ({
    type: 'RESET',
});


const countReducer = (state = {count: 0}, action) => {
    switch( action.type) {
        case("INCREMENT"):            
            return {
                count: state.count + action.incrementBy
            };
        case("DECREMENT"):
            return {
                count: state.count - action.decrementBy
            };
        case("RESET"): 
            return {
                count: 0
            }
        case("SET"):
            return {
                count: action.count
            }
        default:
            return state;
    }
    
};

const store = createStore(countReducer);


store.dispatch(incrementCount({ incrementBy: 5 }));
console.log(store.getState());

store.dispatch(incrementCount());
console.log(store.getState());






store.dispatch(decrementCount({ decrementBy: 57 }));
console.log(store.getState());




store.dispatch(decrementCount());
console.log(store.getState());




store.dispatch(resetCount());
console.log(store.getState());


store.dispatch(setCount({count: 102}));

console.log(store.getState());
