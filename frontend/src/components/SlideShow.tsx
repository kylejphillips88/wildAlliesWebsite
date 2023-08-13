import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../styles/slideshow.module.css"
import image1 from "../assets/campFire1.jpg";
import image2 from "../assets/tree1.jpg";
import image3 from "../assets/running1.jpg";

import { useState } from "react";

const images = [
    {   
        alt: "image1",
        url: image1,
    },
    {
        alt: "image2",
        url: image2,
    },
    {
        alt: "image2",
        url: image3,
    }
];

const showSlides = images.map((image) => (
    <div key={image.alt}>
        <img src={image.url} alt={image.alt}/>
    </div>

));

const SlideShow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    function handleChange(index: number) {
        setCurrentIndex(index);
    }

    return(
        <div>
        <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showArrows={false}
            selectedItem={currentIndex}
            onChange={handleChange}
            className={styles.slideshow}
            showThumbs={false}
            showIndicators={false}
            showStatus={false}
        >
            {showSlides}
        </Carousel>
    </div>
    );
}

export default SlideShow;