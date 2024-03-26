import RootLayout from "@/components/Layouts/RootLayout";
import ProductDetailContent from "@/components/UI/ProductDetailContent";
import ProductDetailsToggle from "@/components/UI/ProductDetailsToggle";
// import RelatedProducts from "@/components/UI/RelatedProducts";
// import ProductDetailsToggle from "@/components/sections/ProductDetailsToggle";
import css from "@/styles/productDetails.module.css";
import Head from "next/head";
import Image from "next/image";
const productDetails = ({ product }) => {
  console.log(product);
  return (
    <>
      <Head>
        <title>Baraqah Shop - {product?.title} </title>
        <meta
          name="description"
          content="Discover a world of style and elegance at Baraqah Shop, the leading E-commerce platform. Explore our exquisite collection of Attar, trendy Jerseys, traditional Panjabis, modest Borkas, cutting-edge Gadgets, adorable Kids' fashion, exclusive Sneakers, and fashionable Bags"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <section className={`${css.product_details}`}>
          <div className={`container ${css.product_details_container}`}>
            <div className={css.images_box}>
              <Image
                src={product?.image}
                alt={product?.title}
                width={100}
                height={100}
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <div>
              <ProductDetailContent product={product} />
            </div>
          </div>

          <div className={`${css.product_feature}`}>
            <ProductDetailsToggle product={product} />
          </div>

          {/* <RelatedProducts category={product?.category} /> */}
        </section>
      </div>
    </>
  );
};

export default productDetails;

productDetails.getLayout = function getLayout(page) {
  return <RootLayout> {page} </RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/data");
  const product = await res.json();
  const paths = product?.map((p) => ({
    params: { id: p?.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`http://localhost:5000/data/${params.id}`);
  const data = await res.json();

  return {
    props: {
      product: data,
    },
  };
};
