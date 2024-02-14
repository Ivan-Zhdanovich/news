import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IArticle, ServerResponse } from '../../models/models'

const url = 'https://api.spaceflightnewsapi.net/v4/'
const urlArticle = 'articles/'

export const spaceflightApi = createApi({
    reducerPath: 'spaceflight/api',
    baseQuery: fetchBaseQuery({
        baseUrl: url
    }),
    refetchOnFocus: true,
    endpoints: build => ({
        searchArticle: build.query<ServerResponse<IArticle>, string>({
            query: (search: string) => ({
                url: urlArticle, 
                params: {
                search: search,
                    // per_page: 10
                }
            })
        }),
        getArticleInfo: build.query<IArticle[],{articles: string[]}>({
                queryFn: async (arg, api, extraOptions, baseQuery) => {
                    const { articles } = arg
                    let results = []
                    for (const [_, id] of Object.entries(articles)) {
                        let result = await baseQuery(urlArticle + `${id}`)
                        results.push(result.data)
                    }
                    return {data: results as IArticle[]}
            }
        })
    })
})

export const {useSearchArticleQuery, useLazyGetArticleInfoQuery} = spaceflightApi