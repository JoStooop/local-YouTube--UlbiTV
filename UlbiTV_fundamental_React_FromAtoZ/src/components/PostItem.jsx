import React from 'react';
import MyButton from "./UI/button/MyButton";
import {useNavigate} from "react-router-dom";

const PostItem = (props) => {
    const {remove, post} = props
    const {title, body} = post

    let navigate = useNavigate();

    return (
        <div className='post'>
            <div>
                <span>{post.id}. {title}</span>
                <p>{body}</p>
            </div>
            <MyButton onClick={() => remove(post)} className='post__btn'>Удалить</MyButton>
            <MyButton onClick={() => navigate(`/posts/${post.id}`)} className='post__btn'>Открыть</MyButton>
        </div>
    );
};

export default PostItem;
