import {createStore} from 'redux';

const store = createStore( (state = { count : 0 }, action) => {
    console.log(state);
        switch(action.type){
        case "INCREMENT":
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
            return{
                count: state.count + 1
            };
        
        case "DECREMENT":
        const decrementBy = typeof action.decrementBy === 'number ' ? action.decrementBy : 1
            return {count: state.count - 1};
        
        case "RESET": 
            return{count : 0};

        default:
            return state;
    }
}

);
console.log(store.getState());

store.dispatch({
    type:"INCREMENT",
    incrementBy: 5
});


store.dispatch({
    type:"INCREMENT"
});

store.dispatch({
    type:"DECREMENT"
});

store.dispatch({
    type:"DECREMENT",
    decrementBy:5
});

store.dispatch({
    type:"RESET"
});
console.log(store.getState());
