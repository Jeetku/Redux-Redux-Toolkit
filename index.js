const redux = require("redux");
const bindActionsCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;
const createStore = redux.createStore;

const applyMiddleware = redux.applyMiddleware;

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

function orderCake() {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
}

function restokedCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
}

function orderIcecream(qty = 1) {
  return {
    type: ICECREAM_ORDERED,
    payload: qty,
  };
}

function restokedIcecream(qty = 1) {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty,
  };
}

const initialStateCake = {
  numOfCakes: 10,
  // numOfIcecream: 20,
  //   anotherProperty: 0,
};

const initialStateIceCream = {
  numOfIcecream: 20,
};

//(previousState,actions)=>newState

const cakeReducer = (state = initialStateCake, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };

    default:
      return state;
  }
};

const iceCreamReducer = (state = initialStateIceCream, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numOfIcecream: state.numOfIcecream - 1,
      };
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numOfIcecream: state.numOfIcecream + action.payload,
      };
    case CAKE_ORDERED:
      return {
        ...state,
        numOfIcecream: state.numOfIcecream - action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  IceCream: iceCreamReducer,
});

// const store = createStore(cakeReducer);
// console.log("initial state", store.getState());
// const unsubscribedCake = store.subscribe(() =>
//   console.log("update state", store.getState())
// );

const store = createStore(rootReducer);
console.log("initial state", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("updated state", store.getState());
});

const actions = bindActionsCreators(
  { restokedCake, orderCake, orderIcecream, restokedIcecream },
  store.dispatch
);

actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restokedCake(3);
actions.restokedIcecream(3);
actions.orderIcecream();
actions.orderIcecream();
actions.restokedIcecream(2);
unsubscribe();
