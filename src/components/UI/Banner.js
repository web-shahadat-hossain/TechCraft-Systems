import React, { Fragment } from "react";
import Slider from "react-slick";
import bn1 from "@/components/assets/banner1.jpg";
import Image from "next/image";

const Banner = () => {
  return (
    <>
      <section className="homeSlide contentWidth">
        <div className="container">
          <Fragment>
            <div className="hero_slide-banner">
              <Image
                src={bn1}
                alt="banner section baraqah shop"
                layout="responsive"
                objectFit="contain"
              />
            </div>
          </Fragment>
        </div>
      </section>
    </>
  );
};

export default Banner;
