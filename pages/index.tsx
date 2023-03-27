import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ignite 2023 Firebase</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-gray-100 text-gray-800 text-center">
        <h1 className="pt-20 text-center text-3xl">
          Ignite 2023 Firebase Tutorial
        </h1>
        <h3 className="pt-4 text-xl text-gray-700">Mobile Order</h3>

        {/* Profile photo */}
      </main>
    </>
  );
}

export async function getServerSideProps() {
  // check if is signed in with firebase auth

  return {
    props: {},
  };
}
