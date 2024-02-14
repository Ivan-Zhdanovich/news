import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../hooks/redux'
import { ArticleCard } from '../components/ArticleCard'
import { useLazyGetArticleInfoQuery } from '../store/spaceflightnews/spaceflight.api'

export function FavouritesPage() {
   const [itemOffset, setItemOffset] = useState(0);
   const {favourites} = useAppSelector(state => state.spaceflight)
   const  [fetchFavArticles, { isLoading: isArticlesLoading, data: articles } ] = useLazyGetArticleInfoQuery()
   
   const itemsPerPage = 5;
   const endOffset = itemOffset + itemsPerPage;
   const currentItems = articles?.slice(itemOffset, endOffset) ?? [];
   const pageCount = Math.ceil((articles?.length ?? 1) / itemsPerPage);

   useEffect(() => {
    fetchFavArticles({articles: favourites})
    }, [])

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % (articles?.length ?? 1);
        setItemOffset(newOffset);
    };

   if (favourites.length === 0) return <p className='text-center'>No items.</p>

    return (
        <>
        <ol className='grid grid-cols-3 gap-1'>
            { currentItems?.map(fav => (
            <li key={fav?.id}>
                {/* <a href={fav} target='_blank'>{fav}</a> */}
                <ArticleCard 
                    title={fav?.title}
                    id={fav?.id}
                    url={fav?.url}
                    image_url={fav?.image_url}
                    news_site={fav?.news_site}
                    summary={fav?.summary}
                    published_at={fav?.published_at} 
                    updated_at={fav?.published_at} 
                    featured={fav?.featured} 
                    launches={fav?.launches} 
                    events={fav?.events}
                />
            </li>
            ))}
        </ol>
        </>
        
    
    )
}