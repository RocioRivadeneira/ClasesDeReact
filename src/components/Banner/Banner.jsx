import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";

function Banner() {
    return (
        <div className="carousel-inner">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={"/assets/images/slider/banner.jpg"}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={"/assets/images/slider/banner1.jpg"}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={"/assets/images/slider/banner2.jpg"}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
export default Banner;
