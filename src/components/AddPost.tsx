import { useMutation } from "@tanstack/react-query"
import PostForm from "./PostForm"
import { createPost } from "../api/posts"

export type newPostTypeID = {
    id: string,
} & newPostType

export type newPostType = {
    title: string,
    body: string
}

const AddPost = () => {

    const createPostMutation = useMutation({
        mutationFn: createPost
    })

    const handleAddPost = (post: newPostType) => {
        createPostMutation.mutate({
            id: 3,
            ...post
        })
    }

    return (
        <div>
            <h2>AddPost</h2>
            <PostForm onSubmit={handleAddPost} />
        </div>
    )
}

export default AddPost