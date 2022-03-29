const logger = (params) => (store) => (next) => (action) => {
  console.log(params, action.type);
  next(action);
};

export default logger;