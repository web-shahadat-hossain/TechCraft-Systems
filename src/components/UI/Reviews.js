const Reviews = ({ product }) => {
  return (
    <div>
      {product?.reviews?.map((review) => (
        <div>
          <p>{review.comment}</p>
          <h4>{review.user}</h4>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
