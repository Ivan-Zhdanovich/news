import React, { useState } from 'react'
import { IArticle } from '../models/models'
import { useActions } from '../hooks/actions'
import { useAppSelector } from '../hooks/redux'

export function ArticleCard({id, title, url, image_url, news_site, summary, published_at}: IArticle) {
    const {addFavourite, removeFavourite} = useActions()
    const {favourites} = useAppSelector(state => state.spaceflight)

    const [isFav, setIsFav] = useState(favourites.includes(id))

    const addToFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        addFavourite(id)
        setIsFav(true)
    }
    const removeFromFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        removeFavourite(id)
        setIsFav(false)
    }

    return(
        <div className='h-auto text-center border-solid border-2 border-indigo-100 rounded-2xl py-3 px-5 mb-2 hover:shadow-md hover:bg-gray-200 transition-all'>
            <a href={url} target='_blank'>
            {/* <div className='flex justify-center'> */}
                <img className='block m-auto'src={image_url} alt="newsImage" />
            {/* </div>      */}
            <h2 className='mb-3 text-lg text-center font-bold'>{title}</h2>
            <p className='mb-3 text-sm'>
                News site: <span className='font-bold mr-2'>{news_site}</span>
                Published at: <span className='font-bold'>{published_at}</span>
            </p>
            <p className='mb-3 text-sm font-thin'>{summary}</p>

            {!isFav && <button className='py-2 px-4 bg-yellow-400 mr-2 rounded hover:shadow-md transition-all'
            onClick={addToFavourite}
            >Add</button>}

            {isFav && <button className='py-2 px-4 bg-red-400 rounded hover:shadow-md transition-all'
            onClick={removeFromFavourite}
            >Remove</button>}
            </a>  
        </div>
    )
}