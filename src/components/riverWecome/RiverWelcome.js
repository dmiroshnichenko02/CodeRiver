import { useState, useEffect } from "react";
import ScrollTrigger from "react-scroll-trigger";

import line from "../../assets/img/line/line.svg";
import android from "../../assets/img/mobileApp/android.svg";
import apple from "../../assets/img/mobileApp/apple.svg";
import createImg1 from "../../assets/img/header/head.png";
import createImg2 from "../../assets/img/header/nature.png";
import createImg3 from "../../assets/img/header/leg.jpg";

import "./riverWelcome.scss";

const RiverWelcome = () => {
    // eslint-disable-next-line
    const [createPhoto, setCreatePhoto] = useState(createImg1);
    const [photoIndex, setPhotoIndex] = useState(1);
    // eslint-disable-next-line
    const [photoList, setPhotoList] = useState([
        createImg1,
        createImg2,
        createImg3,
    ]);
    const [currentColor, setCurrentColor] = useState("#bafd37");
    // eslint-disable-next-line
    const [colors, setColors] = useState(["#bafd37", "#647CE9", "#f54329"]);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const int = setInterval(() => {
            setCreatePhoto(photoList[photoIndex]);
            setPhotoIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
            setCurrentColor(colors[photoIndex]);
        }, 5000);

        return () => clearInterval(int);
        // eslint-disable-next-line
    }, [photoIndex]);

    return (
        <ScrollTrigger
            onEnter={() => setIsVisible(true)}
            onExit={() => setIsVisible(false)}
        >
            <div className={`welcome fade-in ${isVisible ? 'visible' : ''}`}>
                <div className="welcome__line">
                    <img src={line} alt="line" />
                </div>
                <div className="container">
                    <div className="welcome__wrapper">
                        <div>
                            <div className="welcome__mobile">
                                <div className="welcome__mobile_apple">
                                    <img src={apple} alt="apple" />
                                </div>
                                <div className="welcome__mobile_android">
                                    <img src={android} alt="android" />
                                </div>
                                <div className="welcome__mobile_title">
                                    App available
                                </div>
                            </div>
                            <div className="welcome__title">
                                CHOOSE YOUR WINTER
                                <span style={{ backgroundColor: currentColor }}>
                                    LOOK
                                </span><br/>
                                APPAREL
                            </div>
                        </div>
                        <div
                            className="welcome__create"
                            style={{ backgroundImage: `url(${createPhoto})` }}
                        >
                            CR
                            <br />
                            EA
                            <br />
                            TE
                        </div>
                    </div>
                </div>
            </div>
        </ScrollTrigger>
    );
};

export default RiverWelcome;
