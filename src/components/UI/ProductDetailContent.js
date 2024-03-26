import css from "@/styles/productDetails.module.css";

const ProductDetailContent = ({ product }) => {
  return (
    <section>
      <section className={css.product_details_box}>
        <summary>
          <h5>
            {product?.category} <i className="fa-solid fa-angle-right"></i>{" "}
            {product?.name}
          </h5>
          <h2>{product?.name}</h2>
          <div className={css.review_box}>
            <span>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half-stroke"></i>
            </span>
            <span>(13 customer reviews)</span>
          </div>
          <h4 className={css.price}>
            {" "}
            Deal of the Day:{" "}
            {product?.discount ? (
              <>
                {" "}
                <del>৳ {product?.price}</del>{" "}
                <span>
                  ৳
                  {(
                    Number(product?.price) -
                    (Number(product?.price) * Number(product?.discount)) / 100
                  ).toFixed(2)}
                </span>{" "}
              </>
            ) : (
              <>
                <span>৳ {product?.price}</span>{" "}
              </>
            )}
          </h4>
          <p className={css.description}>{product.description}</p>

          <div className={css.product_data_info}>
            <p>
              Available:{" "}
              {product?.status ? (
                <span> In Stock</span>
              ) : (
                <span style={{ color: "red" }}> Out of Stock</span>
              )}
            </p>

            {product.size && (
              <div className={css.size_chart}>
                Size:
                <select
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  style={{ marginLeft: "5px" }}
                >
                  <option value="">Select Size</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </select>
              </div>
            )}
          </div>

          <div>
            <div>
              <p className={css.quantity}>
                ফোনে অর্ডার করুন: <a href="tel:+09696136171">09696-136171</a>
              </p>
            </div>
          </div>
          <div className={css.button_group}>
            {product?.stock ? (
              <button
                onClick={handleBuyNow}
                className="btn-primary"
                style={{ backgroundColor: "black" }}
              >
                Buy Now{" "}
              </button>
            ) : (
              <button
                onClick={() => toast.error("দুঃখিত এই পন্যটি এখন স্টক নেই")}
                className="btn-primary"
                style={{ backgroundColor: "black" }}
              >
                Buy Now{" "}
              </button>
            )}

            {product.stock ? (
              <button
                onClick={() => addToCartHandler(product)}
                className="btn-primary"
              >
                Add to Cart
              </button>
            ) : (
              <button
                onClick={() => toast.error("দুঃখিত এই পন্যটি এখন স্টক নেই")}
                className="btn-primary"
              >
                Add to Cart
              </button>
            )}
          </div>
        </summary>
      </section>
    </section>
  );
};

export default ProductDetailContent;
