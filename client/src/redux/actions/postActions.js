import axios from "axios";

import {
    setLoading,
    setPostByCategory,
    setPost,
    postUpdated,
    postDeleted,
    postCreated,
    setUpdateButtonLoading,
    setError,
} from "../slices/post";

export const getPostsByCategory = (category, pageItems) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const { data } = await axios.get(
            `/api/posts?category=${category}&pageItems=${pageItems}`
        );
        dispatch(setPostByCategory(data));
    } catch (error) {
        dispatch(
            setError(
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
            )
        );
    }
};

export const getPost = (id) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const { data } = await axios.get(`/api/posts/${id}`);
        dispatch(setPost(data));
    } catch (error) {
        dispatch(
            setError(
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
            )
        );
    }
};

export const createPost = (post) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        await axios.post("/api/posts", post);
        dispatch(postCreated(true));
    } catch (error) {
        dispatch(
            setError(
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
            )
        );
    }
};

export const updatePost = (id, post) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        await axios.put(`/api/posts/${id}`, post);
        dispatch(postUpdated(true));
    } catch (error) {
        dispatch(
            setError(
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
            )
        );
    }
};

export const deletePost = (id) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        await axios.delete(`/api/posts/${id}`);
        dispatch(postDeleted(true));
    } catch (error) {
        dispatch(
            setError(
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
            )
        );
    }
};

export const updateButtonLoading = (loading) => (dispatch) => {
    dispatch(setUpdateButtonLoading(loading));
};
