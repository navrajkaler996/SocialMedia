import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {getPostsByUserIdParams, Post} from "../model/post.model";

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery(
        {
            baseUrl: 'http://localhost:4000/api/v1/posts'
        }
    ),
    endpoints: (builder) => ({
        getPostsByUserId: builder.query<Post[], getPostsByUserIdParams>({
            query: ({userId, offset}) =>  `/getPostsByUserId/${userId}/${offset}`,
        }
            
        )
    })
})

export const { useGetPostsByUserIdQuery } = postsApi

