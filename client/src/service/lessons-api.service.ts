import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:4000/"

const LessonsApiService = createApi({
    reducerPath: "LessonsApiService",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        credentials: "include"
    }),
    tagTypes: ['Lessons'],
    endpoints: build => ({
        getLessons: build.query<any, any>({
            query: ({
                        doc
                    }: any) => `${doc}`
        }),

        getLessonDetails: build.query<any, any>({
            query: ({
                        path
                    }: any) => `${path}`
        }),

        getShapeLessons: build.query<any, any>({
            query: ({
                        path
                    }: any) => `${path}`
        }),

        addResult: build.mutation<any, any>({
            query: (payload) => ({
                url: 'learning-skill/add-result',
                method: 'POST',
                body: payload
            })
        })
    })
})

export const {
    useGetLessonsQuery,
    useGetLessonDetailsQuery,
    useGetShapeLessonsQuery,
    useAddResultMutation
} = LessonsApiService
export default LessonsApiService
