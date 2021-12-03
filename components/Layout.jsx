import React from 'react'
import Head from 'next/head'
import { Header, Footer } from './'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Aryo's Blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            
            {children}
            
            <Footer />
        </>
    )
}

export default Layout
