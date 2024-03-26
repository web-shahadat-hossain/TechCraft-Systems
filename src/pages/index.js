import RootLayout from "@/components/Layouts/RootLayout";
import Banner from "@/components/UI/Banner";
import Card from "@/components/UI/Card";
import Head from "next/head";

export default function Home({ products }) {
  console.log(products);
  return (
    <>
      <Head>
        <title>TechCraft Systems</title>
        <meta
          name="description"
          content="Build Your Custom AMD Ryzen or Intel Gaming PC from TechCraft Systems  PC Builder. Visit Star Tech shop or Order Online to get delivery Anywhere in BD"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="home">
          <div className="container d_flex hero-container ">{<Banner />}</div>
        </section>

        <section className="grid1 container">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  // Fetch data from the API endpoint
  const response = await fetch("http://localhost:5000/data");

  // Extract JSON from the response
  const allData = await response.json();

  const randomIndexes = getRandomIndexes(allData.length, 6);
  const randomData = randomIndexes.map((index) => allData[index]);

  return {
    props: {
      products: randomData,
    },
  };
}

function getRandomIndexes(max, count) {
  const indexes = [];
  while (indexes.length < count) {
    const randomIndex = Math.floor(Math.random() * max);
    if (!indexes.includes(randomIndex)) {
      indexes.push(randomIndex);
    }
  }
  return indexes;
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
