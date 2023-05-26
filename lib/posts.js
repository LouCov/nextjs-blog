
export const getSortedPostsData = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=4')
        .then(res => res.json())

    return res
}

export const getPostData = async (title) => {

    const allPosts = await getSortedPostsData()
    const data = allPosts.find( post => post.title === title)

    return data
} 