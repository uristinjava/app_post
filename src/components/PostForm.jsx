import React from "react";
import { useState } from "react";
import MyButton from './UI/button/MyButton';
import MyImput from "./UI/input/MyInput";


const PostForm = ({ create }) => {

    const [post, setPost] = useState({ title: '', body: '' });

    const addNewPost = (e) => {
        e.preventDefault(); //отмена перезагрузки страницы
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost);
        setPost({ title: '', body: '' })
    };

    return (
        <form action="#">
            <MyImput
                value={post.title}
                onChange={e => setPost({ ...post, title: e.target.value })}
                type="text"
                placeholder="Название поста"
            />

            <MyImput
                value={post.body}
                onChange={e => setPost({ ...post, body: e.target.value })}
                type="text"
                placeholder="Описание поста"
            />

            <MyButton
                onClick={addNewPost} >Создать пост
            </MyButton>

        </form>
    )
}

export default PostForm