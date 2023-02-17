import React from 'react';
import Head from 'next/head';

import GalleryWrapper from '../components/GalleryWrapper/GalleryWrapper';

const Gallery: React.FC = () => {    
    return (
        <React.Fragment>
            <Head>
                <title>Unsplash Gallery</title>
            </Head>
            <div className="container max-w-5xl rounded-md mx-auto p-4 mt-8">
                <GalleryWrapper />                    
            </div>
        </React.Fragment>
    )
}

export default Gallery;
