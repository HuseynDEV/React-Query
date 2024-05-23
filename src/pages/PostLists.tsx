import { useQuery } from "@tanstack/react-query"
import AddPost from "../components/AddPost"
import { fetchPosts } from "../api/posts"
import { useNavigate } from "react-router-dom"

export type Post = {
    id: string,
    title: string,
    body: string
}

const PostLists = () => {

    const navigate=useNavigate()

    const { isLoading, isError, data: posts, error } = useQuery<Post[], Error>({
        queryKey: ['posts'],
        queryFn: fetchPosts
    })

    if (isLoading) return 'loading...'
    if (isError) return `Error: ${error.message}`

    return (
        <div>
            <AddPost />
            {posts?.map(post => (
                <div key={post.id}>
                    <h4 onClick={()=>navigate(`/post/${post.id}`)}>{post.title}</h4>
                    <button onClick={()=>navigate(`/post/${post.id}/edit`)}>Edit</button>
                    <button>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default PostLists