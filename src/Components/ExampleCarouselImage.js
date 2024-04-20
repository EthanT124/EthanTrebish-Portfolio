import React from 'react';

function ExampleCarouselImage({ imgSrc, text }) {
    return (
        <img
            className=""
            src={imgSrc}
            alt={text}
        />
    );
}

export default ExampleCarouselImage;