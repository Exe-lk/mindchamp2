import {AppDispatch} from "../../../../../store/store";
import LessonsApiService from "../../../../../service/lessons-api.service";

export const NumberLessonsAction = () => {
    return async (dispatch: AppDispatch) => {
        const {error, data}: any = await dispatch(LessonsApiService.endpoints.getLessons.initiate({
            doc: "learning-skill"
        }))
    }
}
