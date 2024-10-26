import { configureStore } from "@reduxjs/toolkit";
import { trucksReducer } from "./trucksSlice";
import { filtersReducer } from "./filtersSlice";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import favoritesSlice from "./favoritesSlice";


const favoritePersistConfig = {
  key: 'favorites',
  storage,
  whitelist: ['favoritesList'],
};

const persistedFavoriteReducer = persistReducer(
  favoritePersistConfig,
  favoritesSlice
);

const rootReducer = {
    trucks: trucksReducer,
    filters: filtersReducer,
    favorites: persistedFavoriteReducer,
};


export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);
