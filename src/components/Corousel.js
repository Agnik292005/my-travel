import "./corouselStyle.css";
import { useCallback,useEffect, useState } from "react";

function Corousel({ images }) {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;
   const slideright = useCallback(() => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);
  useEffect(() => {
    if (autoPlay) {
      const timeOut = setTimeout(slideright, 2500);
      return () => clearTimeout(timeOut); // Cleanup on unmount
    }
  }, [current, autoPlay,slideright]);
  

  const slideleft = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };
  

  return (
    <>
      <div className="firstcorousel">
        <div className="basictext">
          <h1>Your Gateway to</h1>
          <h1>Global Adventures</h1>
          <p>
            Explore the world with Voyago, where every journey is designed to
            inspire, excite, and create unforgettable memories.<br></br> Whether
            you're scaling mountain peaks, strolling through historic cities, or
            relaxing on pristine beaches, we ensure a seamless and personalized
            travel experience tailored just for you. <br></br>With expert
            planning, exclusive destinations, and 24/7 support, we make global
            travel effortless and extraordinary. Your next adventure starts
            here!
          </p>
        </div>
      </div>
      <div
        className="imgcorousel"
        onMouseEnter={() => {
          setAutoPlay(false);
          clearTimeout(timeOut);
        }}
        onMouseLeave={() => {
          setAutoPlay(true);
        }}
      >
        <div className="corousel_wrapper">
          {images.map((image, index) => {
            return (
              <div
                key={index}
                className={
                  index === current
                    ? "ccorousel_card  ccorousel_card-active  "
                    : "ccorousel_card"
                }
              >
                <img className="card_img" src={image.image} alt="" />
              </div>
            );
          })}
          <div className="corousel_arrow_left" onClick={slideleft}>
            &lt;
          </div>
          <div className="corousel_arrow_right" onClick={slideright}>
            &gt;
          </div>

          <div className="corousel_pagination">
            {images.map((_, index) => {
              return (
                <div
                  key={index}
                  className={
                    index === current
                      ? "pagination_dot  pagination_dot-active  "
                      : "pagination_dot"
                  }
                  onClick={() => setCurrent(index)}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Corousel;
