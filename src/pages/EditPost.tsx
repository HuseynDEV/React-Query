import PostForm from "../components/PostForm"
import { useParams } from "react-router-dom"
import { fetchPost, updatePost } from "../api/posts"
import { newPostType } from "../components/AddPost"
import { useMutation, useQuery } from "@tanstack/react-query"
import { newPostTypeID } from "../components/AddPost"

const EditPost = () => {
    const { id } = useParams<{ id: string }>()

    const { isLoading, isError, data: post, error } = useQuery<newPostTypeID, Error>({
        queryKey: ['post', id],
        queryFn: () => fetchPost(id)
    })
    const updatePostMutation = useMutation({
        mutationFn: updatePost
    })

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error: {error.message}</div>

    const handleSubmit = (updatedPost: newPostType) => {

        updatePostMutation.mutate({ id, ...updatedPost })
    }
    return (
        <div>
            <PostForm onSubmit={handleSubmit} initialValue={post} />
        </div>
    )
}

export default EditPost