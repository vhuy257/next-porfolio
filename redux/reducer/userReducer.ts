import { createReducer } from '@reduxjs/toolkit';
import { getImages, setCurrentPage, showPopupAction, setImagesPopup, setSortBy, setSearchQuery } from '../action/userAction';

export type User = {
    profile_image: { 
        small: string;
    };
    name: string;
    bio: string;
}
export type Image = {
    urls: {
        regular: string;
        small_s3: string;
    };
    alt_description: string;
    user: User
}

type userState = {
    loading: boolean;
    listImages: Image[];
    page: number;
    per_page: number;
    sort_by: string;
    searchQuery: string;
    showPopup: boolean;
    selectedItem: Image;
};

const initialState: userState | any = {
    loading: false,
    listImages: [],
    page: 1,
    per_page: 14,
    sort_by: 'latest',
    searchQuery: '',
    showPopup: false,
    selectedItem: {}
};

export const userReducer = createReducer(initialState, (builder) => {
    builder    
    .addCase(getImages, (state, action) => {        
        state.listImages = action.payload;        
    })
    .addCase(setCurrentPage, (state, action) => {
        state.page = action.payload
    })
    .addCase(showPopupAction, (state, action) => {
        state.showPopup = action.payload
    })
    .addCase(setImagesPopup, (state, action) => {
        state.selectedItem = action.payload
    })
    .addCase(setSortBy, (state, action) => {
        state.sort_by = action.payload
    })
    .addCase(setSearchQuery, (state, action) => {
        state.searchQuery = action.payload
    })
}); 
