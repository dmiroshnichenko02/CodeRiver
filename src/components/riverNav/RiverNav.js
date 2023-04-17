import { useState, useLayoutEffect, useEffect } from "react";
import ScrollTrigger from "react-scroll-trigger";

import apple from "../../assets/img/mobileApp/apple.svg";
import android from "../../assets/img/mobileApp/android.svg";

import "./riverNav.scss";

const RiverNav = () => {
    const [isVisible, setIsVisible] = useState(false);

    const [isMobile, setIsMobile] = useState(false);

    useLayoutEffect(() => {
        setIsMobile(window.innerWidth < 767);
    }, []);
    // When changing the width manually, not the original width
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 767);
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize);
        };
        // eslint-disable-next-line
    }, []);

    return (
        <ScrollTrigger
            onEnter={() => setIsVisible(true)}
            onExit={() => setIsVisible(false)}
        >
            {isMobile ? (
                <BurgerMenu />
            ) : (
                <div className={`header fade-in ${isVisible ? "visible" : ""}`}>
                    <div className="container">
                        <nav className="header__nav">
                            <div className="logotype">landing</div>
                            <ul className="header__nav_menu">
                                <li className="header__nav_menu_item">
                                    <a href="#">Clothes</a>
                                </li>
                                <li className="header__nav_menu_item">
                                    <a href="#">Sneakers</a>
                                </li>
                                <li className="header__nav_menu_item"><a href="#">Bags</a></li>
                                <li className="header__nav_menu_item">
                                    <a href="#">Accessorize</a>
                                </li>
                            </ul>
                            <div className="header__nav_menu_buy">
                                <div className="header__nav_menu_buy_text">
                                    <a href="#">buy</a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            )}
        </ScrollTrigger>
    );
};

export default RiverNav;

const BurgerMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState("disabled");

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
        setActiveMenu(isMenuOpen ? "disabled" : "active");
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isMenuOpen]);

    return (
        <div className="burger__menu">
            <div
                className={`burger__menu__btn ${activeMenu}`}
                onClick={handleMenuClick}
            >
                <span className="first"></span>
                <span className="second"></span>
                <span className="last"></span>
            </div>
            <div className="burger__menu__logotype">LANDING</div>
            <div className={`burger__menu_block ${activeMenu}`}>
                <h2 className="burger__menu_nav_logo">LANDING</h2>
                <nav className="burger__menu_nav">
                    <ul className="burger__menu_nav_list">
                        <li className="burger__menu_nav_item"><a href="#">Clothes</a></li>
                        <li className="burger__menu_nav_item"><a href="#">Sneakers</a></li>
                        <li className="burger__menu_nav_item"><a href="#">Bags</a></li>
                        <li className="burger__menu_nav_item"><a href="#">Accessorize</a></li>
                    </ul>
                </nav>
                <div className="burger__menu__mobile">
                    <div className="burger__menu__mobile_wrapper">
                        <div className="burger__menu__mobile_apple">
                            <img src={apple} alt="apple" />
                        </div>
                        <div className="burger__menu__mobile_android">
                            <img src={android} alt="android" />
                        </div>
                    </div>
                    <div className="burger__menu__mobile_title">
                        App available
                    </div>
                </div>
            </div>
        </div>
    );
};
