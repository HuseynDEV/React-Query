import { newPostTypeID } from "../components/AddPost"

export async function fetchPosts() {
    const response = await fetch("http://localhost:3000/posts")
    return response.json()
}


export async function fetchPost(id: string) {
    const response = await fetch(`http://localhost:3000/posts/${id}`)
    return response.json()
}

export async function createPost(newPost: newPostTypeID) {
    const response = await fetch(`http://localhost:3000/posts`, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(newPost)

    })
    return response.json

}



export async function updatePost(updatedPost: newPostTypeID) {
    console.log(updatedPost, 'updatedPost')
    const response = await fetch(`http://localhost:3000/posts/${updatedPost.id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(updatedPost)

    })
    return response.json

}