const Description = ({ product }) => {
  return (
    <>
      {product?.keyFeatures.map((info, i) => (
        <p key={i}>
          {" "}
          <span>🔸</span> <span>{info.name} :</span> <span>{info.value}</span>
        </p>
      ))}
    </>
  );
};

export default Description;
