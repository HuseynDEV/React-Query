import { useMutation, useQueryClient } from "@tanstack/react-query"
import PostForm from "./PostForm"
import { createPost } from "../api/posts"
import { v4 as uuidv4 } from 'uuid';

export type newPostTypeID = {
    id: string,
} & newPostType

export type newPostType = {
    title: string,
    body: string
}



const AddPost = () => {

    const queryClient=useQueryClient()

    const createPostMutation = useMutation({
        mutationFn: createPost,
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:['posts']})
        }
    })

    const handleAddPost = (post: newPostType) => {
        createPostMutation.mutate({
            id: uuidv4(),
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