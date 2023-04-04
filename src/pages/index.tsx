import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Michael &ldquo;Miggle&rdquo; Rogers</title>
        <meta name="description" content="Michael 'Miggle' Rogers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={"bg-gray-900 text-gray-100 text-2xl text-center"}>
        <div>Test Homepage</div>
      </main>
    </>
  );
}
