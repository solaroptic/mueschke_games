import React, { useState } from "react";
import styles from "./history.module.css";
const History1 = (slides) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  //  usestate above functions below
  const goToPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.slides.length - 1 : currentIndex - 1;
    console.log(newIndex);
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    console.log(newIndex);
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <>
      <div className={styles.leftArrow} onClick={goToPrev}>
        ❰
      </div>
      <div className={styles.rightArrow} onClick={goToNext}>
        ❱
      </div>
      <div className={styles.layover}>
        <img
          src={`${slides.slides[currentIndex].loc}`}
          alt="slides of football"
          className={styles.slideSetup}
        />
        {/* <p className={styles.dots}>⃝ ·🏈 ⭘</p> */}
      </div>
      <div className={styles.dotsGroup}>
        {slides.slides.map((slide, slideIndex) => (
          <div
            className={styles.dots}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </>
  );
};

export default History1;
