import React from 'react';
import {useEffect, useState} from "react";
import {data} from "../consts/consts";
import {usePosts} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {getPageCount} from "../utils/pages";
import MyButton from "../components/UI/button/MyButton";
import MyModal from "../components/UI/MyModal/MyModal";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import Loader from "../components/UI/Loader/Loader";
import PostList from "../components/PostList";
import Pagination from "../components/UI/Pagination/Pagination";

const Posts = () => {
    const [posts, setPosts] = useState(data)
    const [modal, setModal] = useState(false)
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    const [fetchPosts, isPostsLoading, postsError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page)
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })

    useEffect(() => {
        fetchPosts()
    }, [page])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(item => item.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page)
    }

    return (
        <div className="App">
            <MyButton onClick={() => setModal(true)}>
                Создать пользователя
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: '20px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>


            {postsError &&
                <h1>Произошла ошибка {postsError}</h1>
            }

            {isPostsLoading ?
                <div className='wrap__loader'>
                    <Loader/>
                </div>
                :
                <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Список постов 1'/>
            }

            <Pagination
                totalPages={totalPages}
                page={page}
                changePage={changePage}/>
        </div>
    )
};

export default Posts;
