import axios from 'axios';
import * as actions from '../api';

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== 'api/callBegan') return next(action);

    const { url, method, data, onStart, onSuccess, onError } = action.payload;
    if (onStart) dispatch({ type: onStart });

    next(action);

    const baseURL = 'http://localhost:9001/api';
    try {
      const response = await axios.request({
        baseURL,
        url,
        method,
        data,
      });
      dispatch({ type: actions.apiCallSuccess.type, payload: response.data });

      if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
    } catch (error) {
      dispatch(actions.apiCallError(error));

      if (onError) dispatch({ type: onError, payload: error });
    }
  };

export default api;
