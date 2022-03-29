const toast = (store) => (next) => (action) => {
  if (action.type === 'error') console.log('Toast:', action.message);
  next(action);
};

export default toast;