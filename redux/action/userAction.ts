import { createAction } from '@reduxjs/toolkit';
import type { Image } from '../reducer/userReducer';

export const getImages = createAction<Array<Image>>('user/getimages')

export const setCurrentPage = createAction<number>('user/setCurrentPage')

export const showPopupAction = createAction<boolean>('user/showPopup')

export const setImagesPopup = createAction<Image>('user/setImages')

export const setSortBy = createAction<string>('user/setSortBy')

export const setSearchQuery = createAction<string>('user/setSearchQuery')