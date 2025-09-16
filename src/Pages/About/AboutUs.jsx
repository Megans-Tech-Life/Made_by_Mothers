import React from "react";
import "./AboutUs.css";
import BabyFoodJars from "../../images/BabyFoodJars.jpg";
import BabyWithFood from "../../images/BabyWithFood.jpg";
import MomBaby from "../../images/Mom-Baby.jpg";
import Sparkle from "../../images/Sparkle.png";
import BannerTop from "../../images/Banner-top.png";

function AboutUs() {
  return (
    <div className="about">
      <section
        className="about__section"
        style={{ background: `url(${BannerTop}) no-repeat center/cover` }}
      >
        <h1 className="about__section-title">Our Story</h1>
        <p className="about__section-intro">
          Born from the love and dedication of mothers around the world, we are
          a community of parents committed to providing the best for our little
          ones. What started as a few homemade recipes shared between my husband
          and I has grown into a space where parents can find inspiration,
          guidance, and reassurance.
        </p>
      </section>
      <section>
        <img className="about__image" src={BabyWithFood} alt="Baby with food" />
        <h2 className="about__section-title">What We Stand For</h2>
        <ul className="about__list">
          <li>
            <img
              src={Sparkle}
              alt="Sparkle icon"
              className="about__list-icon"
            />
            Every baby deserves the best possible start in life through proper
            nutrition
          </li>
          <li>
            <img
              src={Sparkle}
              alt="Sparkle icon"
              className="about__list-icon"
            />
            Creating a supportive community for sharing recipes and experiences.
          </li>
          <li>
            <img
              src={Sparkle}
              alt="Sparkle icon"
              className="about__list-icon"
            />
            Promoting the benefits of homemade food for children's health and
            development.
          </li>
        </ul>
      </section>
      <section>
        <img
          className="about__image"
          src={BabyFoodJars}
          alt="Jars of baby food"
        />
        <h2 className="about__section-title">What We Do</h2>
        <ul className="about__list">
          <li>
            <img
              src={Sparkle}
              alt="Sparkle icon"
              className="about__list-icon"
            />
            Providing simple, organic recipes that are easy to prepare in your
            own kitchen.
          </li>
          <li>
            <img
              src={Sparkle}
              alt="Sparkle icon"
              className="about__list-icon"
            />
            Offering tips and tricks for busy parents.
          </li>
          <li>
            <img
              src={Sparkle}
              alt="Sparkle icon"
              className="about__list-icon"
            />
            Tested by real families with real babies.
          </li>
        </ul>
      </section>
      <section>
        <img className="about__image" src={MomBaby} alt="Our Mission" />
        <h2 className="about__section-title">Our Mission</h2>
        <ul className="about__list">
          <li>
            <img
              src={Sparkle}
              alt="Sparkle icon"
              className="about__list-icon"
            />
            You know exactly what goes into your baby's food. No hidden
            preservatives, artificial colors, or mystery ingredients.
          </li>
          <li>
            <img
              src={Sparkle}
              alt="Sparkle icon"
              className="about__list-icon"
            />
            Making your own baby food costs significantly less than buying
            commercial options, especially organic varieties.
          </li>
          <li>
            <img
              src={Sparkle}
              alt="Sparkle icon"
              className="about__list-icon"
            />
            Preparing food for your baby is an act of love that creates lasting
            memories and strengthens your bond.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default AboutUs;
