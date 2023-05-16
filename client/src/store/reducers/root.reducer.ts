import {combineReducers} from "@reduxjs/toolkit";
import ActivityItemSlice from "./activity-item.slice";
import LessonsApiService from "../../service/lessons-api.service";
import ShapeActivityItemSlice from "./shape-activity-item.slice";
import UserApiService from "../../service/user-api.service";
import EnglishActivityApiService from "../../service/english-activity-api.service";

const rootReducer = combineReducers({
    activityItem: ActivityItemSlice.reducer,
    shapeActivityItem: ShapeActivityItemSlice.reducer,
    [LessonsApiService.reducerPath]: LessonsApiService.reducer,
    [UserApiService.reducerPath]: UserApiService.reducer,
    [EnglishActivityApiService.reducerPath]: EnglishActivityApiService.reducer
})

export default rootReducer
