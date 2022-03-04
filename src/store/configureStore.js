import { configureStore } from "@reduxjs/toolkit";

import reducer from "./bugs";

export default function configureStoreApp() {
  return configureStore({reducer});
}
