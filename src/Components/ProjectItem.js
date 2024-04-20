import { Carousel } from "react-bootstrap";
import ExampleCarouselImage from "./ExampleCarouselImage";

function ProjectItem(props) {
    const { imageNumber } = props;

    // Define fixed width and height for the carousel images
    const imageWidth = 500; // Adjust as needed
    const imageHeight = 800; // Adjust as needed

    // Define style for the carousel caption text
    const captionStyle = {
        fontSize: '16px' // Font size
    };

    // Style for the description
    const descriptionStyle = {
        fontSize: '20px', // Increase font size
        fontWeight: 'normal', // Reset font weight to normal
        marginBottom: '20px', // Add some bottom margin for separation
        paddingTop: '50px' // Add padding for better readability
    };

    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p> {/* Description positioned below the Carousel */}
            <div className="container">
                <div className="row">
                    <Carousel style={{ maxHeight: '100%' }}>
                        {[...Array(imageNumber).keys()].map((index) => (
                            <Carousel.Item key={index}>
                                {/* Description */}
                                <p style={descriptionStyle}>{props[`desc${index + 1}`]}</p>

                                {/* Wrapping each image in a div with fixed width and height */}
                                <div style={{ width: imageWidth, height: imageHeight }}>
                                    <div className="carousel-image-container">
                                        {/* Setting the max width and height for the image itself */}
                                        <ExampleCarouselImage
                                            imgSrc={props[`image${index + 1}`]}
                                            style={{ maxWidth: '100%', maxHeight: '100%' }}
                                        />
                                        <div>
                                            {/* Caption */}
                                            <div className="carousel-caption" style={captionStyle}>
                                                <h3>{props[`lbl${index + 1}`]}</h3>
                                            </div>
                                            {/* Bottom buttons */}
                                            <div className="carousel-bottom-buttons">
                                                {/* Add your bottom buttons here */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default ProjectItem;
