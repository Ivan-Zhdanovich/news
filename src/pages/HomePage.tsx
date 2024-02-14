import React, { useEffect, useState } from 'react'
import { useSearchArticleQuery } from '../store/spaceflightnews/spaceflight.api'
import { useDebounce } from '../hooks/debounce'
import { ArticleCard } from '../components/ArticleCard'
import { SearchControl } from '../components/SearchControl'


export function HomePage() {
    const [search, setSearch] = useState('')
    const [dropdown, setDropdown] = useState(false)
    const [newsList, setNewsList] = useState(false)
    const debounced = useDebounce(search)
    const {isLoading, isError, data} = useSearchArticleQuery(debounced, {
    skip: debounced.length < 3,
    refetchOnFocus: true
   })

   

   useEffect( () => {
    setNewsList(debounced.length > 3 && data?.results?.length! > 0)
   }, [debounced, data])
   
   const clickHandler = (news: string) => {
        console.log(news)
   }
   const handleSearchInput = (searchText: string) => {
        setSearch(searchText)
   }

    return (
        <>
        <SearchControl handleSearchInput = {handleSearchInput} hasError={isError}/>
        {newsList && <ol className='grid grid-cols-3 gap-1'>
        {isLoading && <p className='text-center'>Loading...</p>}
           {data?.results.map(result => (
            <li key={result.id}>
               <ArticleCard 
                    title={result?.title}
                    id={result?.id}
                    url={result?.url}
                    image_url={result?.image_url}
                    news_site={result?.news_site}
                    summary={result?.summary}
                    published_at={result?.published_at} 
                    updated_at={result?.published_at} 
                    featured={result?.featured} 
                    launches={result?.launches} 
                    events={result?.events}               />
            </li>
           ))} 
        </ol>}
        {/* <div className='container'>
            { isNewsLoading && <p className='text-center'>News is loading...</p>}
        </div> */}
      </>
     
    )
}