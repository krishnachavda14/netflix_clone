import { createSlice } from "@reduxjs/toolkit";

const movieSLice = createSlice({
    name: 'movie',
    initialState: {
        nowPlayingMovies: null,
    },
    reducers:{
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        }
    }

})
export const { addNowPlayingMovies } = movieSLice.actions;
export default movieSLice.reducer;