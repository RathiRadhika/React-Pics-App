import './imageList.css';
import React from 'react';
import ImageCart from './ImageCard';

const ImageList =(props)=>{

    

    const Images= props.images.map((image)=>{
        return <ImageCart key={image.id} image={image}/>
    });

    console.log(props.images);

    return<div className="image-list">{Images}</div>;
}

export default ImageList;