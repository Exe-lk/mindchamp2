import {configureStore} from "@reduxjs/toolkit";
import rootReducer from "./reducers/root.reducer";
import LessonsApiService from "../service/lessons-api.service";
import UserApiService from "../service/user-api.service";
import EnglishActivityApiService from "../service/english-activity-api.service";

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(LessonsApiService.middleware)
            .concat(UserApiService.middleware)
            .concat(EnglishActivityApiService.middleware)
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
