import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dishSlice from "../features/dishes/dishSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import imageSlice from "../features/images/imageSlice";

const rootReducer = combineReducers({
    dishes: dishSlice,
    images: imageSlice

})

const store = configureStore({
    reducer: rootReducer,

    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,}),
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
