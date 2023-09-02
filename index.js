const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const iceCreamActions =
  require("./features/icecream/iceCreamSlice").iceCreamActions;

console.log("initial state", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Updated state", store.getState());
});

store.dispatch(cakeActions.ordered(2));
store.dispatch(cakeActions.ordered(2));
store.dispatch(cakeActions.ordered(3));
store.dispatch(cakeActions.restocked(5));

store.dispatch(iceCreamActions.ordered(1));
store.dispatch(iceCreamActions.ordered(2));
store.dispatch(iceCreamActions.ordered(3));
store.dispatch(iceCreamActions.reStocked(5));

unsubscribe();
