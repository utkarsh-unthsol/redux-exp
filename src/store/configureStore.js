import { configureStore } from '@reduxjs/toolkit';

import reducer from './reducer';
import logger from './middlewares/logger';
import toast from './middlewares/toast';
import api from './middlewares/api';

export default function configureStoreApp() {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger("console:"), toast, api),
  });
}
