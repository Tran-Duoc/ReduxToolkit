import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./userSlice.js";
import postReducer from "./postSlice.js";

export default configureStore({
   reducer: {
      user: userReducer,
      post: postReducer,
   },
});
