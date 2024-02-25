/* eslint-disable react/prop-types */
import img from "../../Images/img1.png";
import "./FeatureCards.css";
import Button from "../Button";
import { useEffect, useState } from "react";

function FeatureCards({ premium, title, description, mainHighlight, rating }) {
  const [ratingText, setRatingText] = useState("");
  // const [star, setStar] = useState(0);

  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  useEffect(() => {
    if (Number(rating) > 9.1) {
      setRatingText("Excellent");
      // setStar(5);
    } else if (Number(rating) > 8.1) {
      setRatingText("Very Good");
      // setStar(4);
    } else if (Number(rating) > 7.1) {
      setRatingText("Good");
      // setStar(3);
    } else {
      setRatingText("Bad");
      // setStar(2);
    }
  }, [rating]);

  return (
    <>
      <div id="featureCards">
        <div className="feature-img-block">
          {premium && (
            <div className="premium">
              <i className="ri-trophy-line"></i>
              <div>{premium}</div>
            </div>
          )}
          <img src={img} alt="img" />
        </div>
        <div className="feature-content">
          <div className="feature-title">{title}</div>
          <div className="feature-description">{description}</div>
          <div className="feature-title">Main Highlight</div>
          <div className="feature-description">{mainHighlight}</div>

          {showContent && (
            <div
              className="featureRat"
              style={{
                backgroundColor: "#FFF4ED",
                width: "505px",
                height: "116px",
                display: "flex",
                flexDirection: "column",
                gap: "3px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "5px",
                  padding: "5px",
                  alignItems: "center",
                  justifyContent: "start",
                }}
              >
                <span
                  style={{
                    padding: "2px",
                    color: "#1B88F4",
                    backgroundColor: "#FFFFFF",
                    fontSize: "1rem",
                    fontWeight: "400",
                  }}
                >
                  9.9
                </span>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "#4B5665",
                    fontWeight: "400",
                  }}
                >
                  Building Responsive
                </p>
              </div>
              <div style={{ display: "flex", gap: "5px", padding: "5px" }}>
                <span
                  style={{
                    padding: "2px",
                    color: "#1B88F4",
                    backgroundColor: "#FFFFFF",
                    fontSize: "1rem",
                    fontWeight: "400",
                  }}
                >
                  9.9
                </span>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "#4B5665",
                    fontWeight: "400",
                  }}
                >
                  Building Responsive
                </p>
              </div>
              <div style={{ display: "flex", gap: "5px", padding: "5px" }}>
                <span
                  style={{
                    padding: "2px",
                    color: "#1B88F4",
                    backgroundColor: "#FFFFFF",
                    fontSize: "1rem",
                    fontWeight: "400",
                  }}
                >
                  9.9
                </span>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "#4B5665",
                    fontWeight: "400",
                  }}
                >
                  Building Responsive
                </p>
              </div>
            </div>
          )}
          <div className="show-more" onClick={toggleContent}>
            Show more
          </div>
        </div>
        <div className="ratings">
          <div className="rating-box">
            <div className="ratingValue">{rating}</div>
            <div className="ratingText">{ratingText}</div>
            {/* { star } */}
          </div>
          <Button text="View" width="232px" height="48px" bdRadius="10px" />
        </div>
      </div>
    </>
  );
}

export default FeatureCards;
