import RootLayout from "@/components/Layouts/RootLayout";
import Banner from "@/components/UI/Banner";
import Head from "next/head";

export default function Home() {
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
      </main>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
