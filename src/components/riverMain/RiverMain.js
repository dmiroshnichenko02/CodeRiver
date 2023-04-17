import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";

import leg from "../../assets/img/slider/leg.jpg";
import shirt from "../../assets/img/slider/shirt.jpg";
import nature from "../../assets/img/slider/nature.jpg";
import slider_head from "../../assets/img/slider/slider_head.jpg";
import shoes from "../../assets/img/slider/shoes.jpg";
import btn from "../../assets/img/slider/btn.svg";

import "./riverMain.scss";

const RiverMain = () => {
    // eslint-disable-next-line
    const [slides, setSlides] = useState([
        slider_head,
        shoes,
        leg,
        shirt,
        nature,
        slider_head,
        shoes,
        leg,
        shirt,
        shoes,
    ]);
    const [transformX, setTransformX] = useState(-614);
    const [currentSlide, setCurrentSlide] = useState(4);
    const [isVisible, setIsVisible] = useState(false);
    const [startTouchX, setStartTouchX] = useState(null);
    const slideWidth = 270;

    const nextSlide = () => {
        if (currentSlide === 7) {
            setTransformX(-74);
            setCurrentSlide(2);
        } else {
            setTransformX(transformX - slideWidth);
            setCurrentSlide(currentSlide + 1);
        }
    };
    const prevSlide = () => {
        if (currentSlide === 2) {
            setTransformX(-1424);
            setCurrentSlide(7);
        } else {
            setTransformX(transformX + slideWidth);
            setCurrentSlide(currentSlide - 1);
        }
    };

    const handleTouchStart = (e) => {
        setStartTouchX(e.touches[0].clientX);
    };

    const handleTouchEnd = (e) => {
        const endTouchX = e.changedTouches[0].clientX;
        const touchDistance = endTouchX - startTouchX;
        if (touchDistance > 50) {
            prevSlide();
        } else if (touchDistance < -50) {
            nextSlide();
        }
    };

    return (
        <ScrollTrigger
            onEnter={() => setIsVisible(true)}
            onExit={() => setIsVisible(false)}
        >
            <div className={`main fade-in ${isVisible ? "visible" : ""}`}>
                <div className="container">
                    <div className="main__wrapper">
                        <div className="main__title">CHOOSE LOOKS</div>
                        <div
                            className="main__slider"
                            onTouchStart={handleTouchStart}
                            onTouchEnd={handleTouchEnd}
                        >
                            {slides.map((item, key) => {
                                return (
                                    <div
                                        className="slide"
                                        key={key}
                                        style={{
                                            transform: `translateX(${transformX}px)`,
                                        }}
                                    >
                                        <img src={item} alt="slide" />
                                    </div>
                                );
                            })}
                        </div>
                        <div className="slider__btn">
                            <button
                                className="slider__btn__next"
                                onClick={nextSlide}
                            >
                                <img src={btn} alt="btn" />
                            </button>
                            <button
                                className="slider__btn__prev"
                                onClick={prevSlide}
                            >
                                <img src={btn} alt="btn" />
                            </button>
                        </div>
                        <div className="main__about">MORE ABOUT US</div>
                        <p className="main__about_descr">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nam sed enim sed libero commodo efficitur.
                            Suspendisse et lorem ac neque dictum pellentesque
                            nec sit amet nisl. Fusce rutrum quis purus ut
                            pretium. Vivamus ornare mauris non ligula egestas,
                            accumsan faucibus quam sollicitudin. Duis efficitur
                            lorem tellus. Aliquam non rhoncus felis, porttitor
                            consequat quam. Morbi gravida semper mattis. Nunc
                            ultrices justo in pulvinar convallis. Curabitur
                            dapibus ut tellus eu condimentum. Morbi vitae
                            convallis purus, ac finibus ipsum.
                            <br />
                            <br />
                            Suspendisse nec pharetra turpis. Aenean id nunc id
                            orci aliquam pulvinar eget vitae nisl. In ligula
                            neque, vestibulum vel arcu eu, eleifend vestibulum
                            tortor. Duis facilisis, est et aliquam dapibus, urna
                            mauris sagittis mi, et mattis metus magna vel
                            tellus. Phasellus sit amet volutpat ante, ut
                            condimentum lorem. Quisque auctor sollicitudin dui,
                            vitae egestas nunc suscipit et. Nullam eu quam sem.
                            Donec a nibh molestie, aliquam libero maximus,
                            feugiat velit. Curabitur ac accumsan velit. In hac
                            habitasse platea dictumst.
                        </p>
                    </div>
                </div>
            </div>
        </ScrollTrigger>
    );
};

export default RiverMain;
