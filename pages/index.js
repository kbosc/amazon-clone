import Head from "next/head";
import Banner from "../src/components/Banner";
import Header from "../src/components/Header";
import ProductFeed from "../src/components/ProductFeed";

export default function Home({ products }) {
  // console.log(products)
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon clone</title>
      </Head>

      <Header />
      <main className="max-w-screen-2xl mx-auto ">
        {/* Banner */}
        <Banner />
        {/* ProductFeed */}
        <ProductFeed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(res => res.json())

  return { 
    props: {
      products,
    }
  }
}

// GET https://fakestoreapi.com/products