import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    posts: [],
    post: null,
    loading: false,
    error: null,
    pageItems: 0,
    status: 200,
    updateButtonLoading: false,
    postCreated: false,
    postUpdated: false,
    postDeleted: false,
};

export const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        setLoading: (state, { payload }) => {
            state.loading = payload;
        },
        setPostByCategory: (state, { payload }) => {
            state.posts = payload;
            state.loading = false;
            state.error = null;
        },
        setPost: (state, { payload }) => {
            state.post = payload;
            state.loading = false;
            state.error = null;
        },
        postUpdated: (state, { payload }) => {
            state.postUpdated = payload;
            state.loading = false;
            state.error = null;
        },
        postDeleted: (state, { payload }) => {
            state.postDeleted = payload;
            state.loading = false;
            state.error = null;
        },
        postCreated: (state, { payload }) => {
            state.postCreated = payload;
            state.loading = false;
            state.error = null;
        },
        setUpdateButtonLoading: (state, { payload }) => {
            state.updateButtonLoading = payload;
            state.loading = false;
            state.error = null;
        },
        setError: (state, { payload }) => {
            state.error = payload;
            state.loading = false;
            state.updateButtonLoading = false;
        },
    },
});

export const {
    setLoading,
    setPostByCategory,
    setPost,
    postUpdated,
    postDeleted,
    postCreated,
    setUpdateButtonLoading,
    setError,
} = postSlice.actions;

export default postSlice.reducer;

export const postSelector = (state) => state.posts;
