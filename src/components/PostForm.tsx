import { ChangeEvent, FormEvent, useState } from "react"
import { newPostType, newPostTypeID } from "./AddPost"

type submitType = {
    onSubmit: (data: newPostType) => void,
    initialValue?: newPostTypeID
}

const PostForm = ({ onSubmit, initialValue }: submitType) => {
console.log(initialValue, 'initialValue')

    type PostType = {
        title: string,
        body: string
    }

    const [post, setPost] = useState<PostType>({
        title: initialValue?.title || '',
        body: initialValue?.body || ''
    })


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setPost(prevPost => ({
            ...prevPost,
            [name]: value
        }))
    }

    const renderField = (label: keyof PostType) => {
        return (
            <div>
                <label>{label}</label>
                <input onChange={handleChange} value={post[label]} type="text" name={label} />
            </div>
        )
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        onSubmit(post)
        setPost({
            title: "",
            body: "",
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