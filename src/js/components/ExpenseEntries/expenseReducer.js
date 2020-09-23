const defaultState = {
    description: '',
    amount: '',
    lineItems: []
};

export default function ExpenseReducer (state = defaultState, action) {
    return state;
}

// the `state = defaultState` above is new ES6 syntax for defining a default value on a parameter