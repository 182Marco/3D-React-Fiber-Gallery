import * as C from "..";
import { useOverlaySlideShow } from "./overlaySlideShow.hook";
import "./styles.scss";

const OverlaySlideShow = () => {
  const h = useOverlaySlideShow();
  return (
    <>
      <div className={`overlay-container ${h.visible ? "visible" : "hidden"}`}>
        <svg
          className="overlay-logo"
          viewBox="0 0 342 35"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z"
            fill="currentColor"
          ></path>
        </svg>
        <div className="overlay-controls">
          <svg
            className="overlay-button left"
            onClick={() =>
              h.setSlide(prev => (prev > 0 ? prev - 1 : C.Slide.length - 1))
            }
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>
          <svg
            className="overlay-button right"
            onClick={() =>
              h.setSlide(prev => (prev < C.Slide.length - 1 ? prev + 1 : 0))
            }
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </div>
        <div className="overlay-content">
          <h1 className="overlay-title">{C.Slide[h.displaySlide]?.name}</h1>
          <p className="overlay-description">
            {C.Slide[h.displaySlide]?.description}
          </p>
          <div className="overlay-stats">
            <div className="overlay-stat">
              <p className="overlay-price">
                ${C.Slide[h.displaySlide]?.price.toLocaleString()}
              </p>
              <p className="overlay-subtext">After Federal Tax Credit</p>
            </div>
            <div className="overlay-stat">
              <p className="overlay-range">
                {C.Slide[h.displaySlide]?.range}km
              </p>
              <p className="overlay-subtext">With one single charge</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { OverlaySlideShow };
