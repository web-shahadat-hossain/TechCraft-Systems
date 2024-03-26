import Image from "next/image";
import Link from "next/link";

const Card = ({ product }) => {
  console.log(product);
  return (
    <>
      <div className="box">
        <div className="product mtop">
          <Link href={`/product/${product?.id}`}>
            <div className="img">
              {product?.stock >= 0 && product?.discount ? (
                <span className="discount">-10% Off</span>
              ) : (
                ""
              )}

              {product.status ? (
                <span className="discount" style={{ background: "green" }}>
                  In Stock
                </span>
              ) : (
                <span className="discount" style={{ background: "red" }}>
                  Sold Out
                </span>
              )}

              <Image
                src={product?.image}
                alt={product?.name}
                width={100}
                height={100}
                layout="responsive"
                objectFit="contain"
              />
            </div>
          </Link>
          <Link href={`/product/${product?.id}`}>
            <div className="product-details">
              <h3>{product?.name}</h3>
              <div className="rate">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <div className="price">
                <h4>৳ {product?.price}</h4>

                {/* step : 3  
                   if hami le button ma click garryo bahne 
                  */}
                <button>
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
