import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:5000/"

const EnglishActivityApiService = createApi({
    reducerPath: "EnglishActivityApiService",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL
    }),
    tagTypes: ["English-Activity"],
    endpoints: build => ({
        getEnglishActivityResult: build.mutation<any, any>({
            query: (payload) => ({
                url: "predict",
                method: "POST",
                body: payload
            })
        })
    })
})

export const {useGetEnglishActivityResultMutation} = EnglishActivityApiService
export default EnglishActivityApiService
