import React from "react";

import SubHeading from "../../components/SubHeading";
import { images } from "../../constants";
import "./chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">
            At our restaurant, we believe in using only the freshest ingredients
            to create delicious,
          </p>
        </div>
        <p className="p__opensans">
          wholesome meals that nourish the body and soul. We are committed to
          supporting local farmers and sustainable agriculture practices to
          reduce our environmental impact and promote a healthier food system.
          Our passion for food and dedication to quality is reflected in every
          dish we serve.
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
