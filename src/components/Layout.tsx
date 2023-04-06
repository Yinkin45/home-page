import Head from 'next/head'
import React from 'react'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = (props: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Michael &ldquo;Miggle&rdquo; Rogers</title>
        <meta name="description" content="Michael 'Miggle' Rogers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="p-8">{props.children}</div>
    </>
  )
}

export default Layout
