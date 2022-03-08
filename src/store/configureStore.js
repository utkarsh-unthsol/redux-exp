import { configureStore } from "@reduxjs/toolkit";

import reducer from "./reducer";

export default function configureStoreApp() {
  return configureStore({reducer});
}
