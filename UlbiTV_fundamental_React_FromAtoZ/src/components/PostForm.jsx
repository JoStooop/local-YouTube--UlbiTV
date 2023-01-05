import React from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import { useState } from "react";

const PostForm = (props) => {
  const { create } = props
  const [post, setPost] = useState({
    title: '',
    body: '',
  })

  const handlerClick = (e) => {
    e.preventDefault()

    const newPost = {
      ...post,
      id: Date.now()
    }

    create(newPost)
    // или
    // setPosts([...posts, {...post, id: Date.now()}])

    setPost({ title: '', body: '' })
  }

  const handleChangeTitle = (e) => {
    const value = e.target.value
    setPost({ ...post, title: value })
  }

  const handleChangeBody = (e) => {
    const value = e.target.value
    setPost({ ...post, body: value })
  }

  return (
    <form>
      <MyInput
        value={post.title}
        onChange={e => handleChangeTitle(e)}
        type="text"
        placeholder='Название поста'/>
      <MyInput
        value={post.body}
        onChange={e => handleChangeBody(e)}
        type="text"
        placeholder='Описание поста'/>
      <MyButton onClick={handlerClick}>Создать</MyButton>
    </form>
  );
};

export default PostForm;
