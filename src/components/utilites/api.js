const BASE_URL = 'https://strangers-things.herokuapp.com/api/2015-OKU-RM-WEB-PT/posts'
export async function getPosts() {
    const response = await fetch(BASE_URL)
    console.log(response)
}



