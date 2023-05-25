
export const getSortedPostsData = async () => {
    
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=4')

    if( !res.ok ) {
        throw Error(' Post failed')
    }

    return res.json()
}