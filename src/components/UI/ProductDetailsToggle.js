import { useState } from "react";
import Description from "../UI/Description";
import css from "@/styles/productDetails.module.css";
import Reviews from "./Reviews";
const ProductDetailsToggle = ({ product }) => {
  const [selectedTab, setSelectedTab] = useState("description");

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };
  return (
    <section className={`container ${css.productDetails_toggle}`}>
      <div>
        <div className={css.toggleBtnBox}>
          <button
            onClick={() => handleTabChange("description")}
            className={`${selectedTab === "description" && css.active}`}
          >
            Description
          </button>
          <button
            onClick={() => handleTabChange("reviews")}
            className={`${selectedTab === "reviews" && css.active}`}
          >
            Reviews (0)
          </button>
        </div>
        {selectedTab === "description" ? (
          <Description product={product} />
        ) : (
          <Reviews product={product} />
        )}
      </div>
    </section>
  );
};

export default ProductDetailsToggle;
