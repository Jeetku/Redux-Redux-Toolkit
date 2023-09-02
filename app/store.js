const configureStore = require("@reduxjs/toolkit").configureStore;
// const reduxLogger = require("redux-logger");
const cakeReducer = require("../features/cake/cakeSlice");
const iceCreameReducer = require("../features/icecream/iceCreamSlice");

// const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreameReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
