import { useQuery } from "@tanstack/react-query"
import { fetchPost } from "../api/posts"
import { useParams } from "react-router-dom"
import { Post as PostType } from "./PostLists"
const Post = () => {

    const { id } = useParams<{ id: string }>()

    const { isLoading, isError, data: post, error } = useQuery<PostType, Error>({
        queryKey: ['post', id],
        queryFn: () => fetchPost(id)
    })
    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error: {error.message}</div>
    return (
        <div><h2>
            {post?.title}</h2>
            <p>{post?.body}</p>
        </div>
    )
}

export default Post