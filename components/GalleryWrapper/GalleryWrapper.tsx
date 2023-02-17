import React, { useEffect } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import { useAppSelector, useAppDispatch } from '../../redux/store/hooks';

import { 
    getImages, 
    setCurrentPage, 
    setImagesPopup, 
    showPopupAction 
} from "../../redux/action/userAction";

import type { Image } from "../../redux/reducer/userReducer";

import Masonry from 'react-masonry-css'
import LoadingButton from '../LoadingButton/LoadingButton'

import getPhoto from "../../utils/getPhoto";
import ModalPhoto from '../ModalPhoto/ModalPhoto';
import FilterPhoto from "../FilterPhoto/FilterPhoto";
import InputSearch from "../InputSearch/InputSearch";

const Gallery: React.FC = () => {      
    const { 
        listImages, 
        page, 
        per_page, 
        sort_by, 
        searchQuery 
    } = useAppSelector((state: any) => state.user);
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        async function loadImage() {            
            if(searchQuery !== '') {                
                const url = `/search/photos?page=${page}&query=${searchQuery}`;
                const data = await getPhoto(url);
                const newListImages: [] | any = page > 1 ? [...listImages, ...data.results] : data.results;
                return dispatch(getImages(newListImages));
            }
            const url = `/photos?per_page=${per_page}&page=${page}&sort_by=${sort_by}`;
            const data = await getPhoto(url);
            const newListImages: [] | any = page > 1 ? [...listImages, ...data] : data;            
            return dispatch(getImages(newListImages));
        }
        loadImage();
    }, [page, searchQuery])

    const showPopupImage = (item: Image) => {        
        dispatch(showPopupAction(true))
        dispatch(setImagesPopup(item))
    }

    const templateTop = (item: Image, key: any) => {
        const {
            urls: { small_s3 },
            alt_description,
            user: { profile_image: { small }, name, bio }
        } = item;

        return (
            <div
                className="image-element-class pb-4 px-2 cursor-pointer hover:scale-150 ease-in-out duration-300"
                key={key}
                onClick={() => showPopupImage(item)}
            >
                <img src={small_s3} alt={alt_description} className="rounded-t-xl" loading="lazy" />
                <div className="user_info bg-white px-2 py-3 rounded-b-xl shadow-sm flex items-center justify-start">
                    <img src={small} className="rounded-full mr-4" />
                    <div className="info">
                        <h4 className="font-semibold text-sm">{name}</h4>
                        <span className="text-sm">{bio}</span>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="mx-auto rounded-md" id="scrollableDiv">
            <div className="filter-wrapper flex justify-between mb-2 items-center p-2">
                <InputSearch />
                <FilterPhoto />
            </div>
            <InfiniteScroll
                dataLength={listImages.length}
                next={() => dispatch(setCurrentPage(page+1))}
                hasMore={true}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                loader={<LoadingButton />}
            >
                <Masonry breakpointCols={3} className="flex w-auto items-stretch" columnClassName="my-masonry-grid_column">
                    {listImages && listImages.map((item: Image, key: any) => {
                        const {
                            urls: { small_s3 },
                            alt_description,
                            user: { profile_image: { small }, name, bio }
                        } = item;
                        if (key % 2) return templateTop(item, key);
                        return (
                            <div
                                className="image-element-class pb-4 px-2 cursor-pointer hover:scale-150 ease-in-out duration-300"
                                key={key}
                                onClick={() => showPopupImage(item)}
                            >
                                <div className="user_info bg-white px-2 py-3 rounded-t-xl shadow-sm flex items-center justify-start">
                                    <img src={small} className="rounded-full mr-4" />
                                    <div className="info">
                                        <h4 className="font-semibold text-sm">{name}</h4>
                                        <span className="text-sm">{bio}</span>
                                    </div>
                                </div>
                                <img src={small_s3} alt={alt_description} className="rounded-b-xl" loading="lazy" />
                            </div>
                        )
                    })}                    
                </Masonry>
            </InfiniteScroll>
            <ModalPhoto />
        </div>
    )
}

export default Gallery;