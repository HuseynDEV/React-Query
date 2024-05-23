import { ChangeEvent, FormEvent, useState } from "react"
import { newPostType } from "./AddPost"

type submitType = {
    onSubmit: (data: newPostType) => void
}

const PostForm = ({ onSubmit }: submitType) => {


    type PostType = {
        title: string,
        body: string
    }

    const [post, setPost] = useState<PostType>({
        title: '',
        body: ''
    })


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setPost(prevPost => ({
            ...prevPost,
            [name]: value
        }))
    }

    const renderField = (label: string) => {
        return (
            <div>
                <label>{label}</label>
                <input onChange={handleChange} type="text" name={label} />
            </div>
        )
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        onSubmit(post)
        console.log(post)
        setPost({
            title: "",
            body: ""
        })


    }

    return (
        <form action="" onSubmit={handleSubmit}>
            {renderField('title')}
            {renderField('body')}
            <button type="submit">Submit</button>
        </form>
    )
}

export default PostForm