import React from 'react';
import PostItem from "./PostItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const PostList = (props) => {
  const { remove, posts, title } = props

  if (!posts.length) {
    return <h2>Посты не найдены</h2>
  }


  return (
    <div>
      <h1 className='title'>{title}</h1>
      <TransitionGroup>
        {posts.map((post) =>
          <CSSTransition
            key={post.id}
            timeout={500}
            classNames="post">
            <PostItem remove={remove} post={post}/>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
