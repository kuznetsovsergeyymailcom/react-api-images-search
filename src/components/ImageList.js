import React from 'react';
import ImageCard from './ImageCard';

import './ImageList.css';

const ImageList = (props) => {

    console.log(props.images);
    
    return(
        <div className="image-list">
        
            { props.images.map(image => <ImageCard key={image.id}  image={image} />) }
        </div>
    );
}

export default ImageList;