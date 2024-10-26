import { createSlice } from '@reduxjs/toolkit';


const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        favoritesList: [],
    },
    reducers: {
        switchFavorite: (state, {payload}) => {
            const i = state.favoritesList.indexOf(payload);
            if (i !== -1) {
              state.favoritesList.splice(i, 1);
            } else {
              state.favoritesList.push(payload);
            }
        },
    },
});

export const selectFavoritesList = state => state.favorites.favoritesList;
export const { switchFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
