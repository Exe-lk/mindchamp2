import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:4000/"

const UserApiService = createApi({
    reducerPath: "UserApiService",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        credentials: 'include'
    }),
    tagTypes: ['User'],
    endpoints: build => ({
        logIn: build.mutation<any, any>({
            query: (payload) => ({
                url: 'user',
                method: 'POST',
                body: payload
            })
        }),
        status: build.query<any, any>({
            query: ({path}) => `user/${path}`
        })
    })
})

export const {useLogInMutation, useStatusQuery} = UserApiService
export default UserApiService
