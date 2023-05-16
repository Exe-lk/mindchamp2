import {AppDispatch} from "../../../store/store";
import userService from "../../../service/user-api.service"

const LoginPageActions = (form: any, navigate: any) => {

    return async (dispatch: AppDispatch) => {
        const {error, data}: any = await dispatch(userService.endpoints.logIn.initiate(form))
        if (!error) {
            navigate('/')
        }
    }
}

export default LoginPageActions
