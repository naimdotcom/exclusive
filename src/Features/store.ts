import { configureStore } from "@reduxjs/toolkit";
import { ProductApi } from "./AllSlices/Api/productApi";
import { AuthApi } from "./AllSlices/Api/AuthApi";
import { OrderApi } from "./AllSlices/Api/OrderApi";
import AuthReducer from "./Auth/Auth";

export const store = configureStore({
  reducer: {
    [ProductApi.reducerPath]: ProductApi.reducer,
    [AuthApi.reducerPath]: AuthApi.reducer,
    [OrderApi.reducerPath]: OrderApi.reducer,
    // redux toolkit
    auth: AuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ProductApi.middleware, AuthApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
