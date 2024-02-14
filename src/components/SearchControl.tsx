export function SearchControl({handleSearchInput, hasError}: any) {
    return (
        <div className='flex justify-center p-10 items-strech w-auto'>
             {hasError && <p className='text-center text-red-600'>Something went wrong...</p>}
            <div className='flex justify-center bg-gray-200 shadow-md'>
            <input
            className='p-3 border-none shadow-md bg-gray-200' 
            type="text"
            
            placeholder='Search for News...'
            onChange={e => handleSearchInput(e.target.value)}
            />
            <img src="https://images-na.ssl-images-amazon.com/images/I/41gYkruZM2L.png" alt="search icon" className='h-4 static pl-10'></img>
            </div>  
        </div>   
    )

}