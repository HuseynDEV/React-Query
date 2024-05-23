import { newPostTypeId } from "../components/AddPost"

export async function fetchPosts() {
    const response = await fetch("http://localhost:3000/posts")
    return response.json()
}


export async function fetchPost(id: string) {
    const response = await fetch(`http://localhost:3000/posts/${id}`)
    return response.json()
}

export async function createPost(newPost: newPostTypeId) {
    const response = await fetch(`http://localhost:3000/posts`, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(newPost)

    })
    return response.json

}