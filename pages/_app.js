import React, { useEffect, useState } from 'react'
import { Layout, LoadingTransition } from '../components'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'

import 'tailwindcss/tailwind.css'

import '../styles/global.scss'

function MyApp({ Component, pageProps }) {
  const [useLoader, setUseLoader] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  
  const router = useRouter()
  
  useEffect(() => {
    setIsLoading(true)
    setUseLoader(true)
    
    setTimeout(() => {
      setUseLoader(false)
      setIsLoading(false)
    }, 3000);
    
    const handleRouteChange = () => {
      setIsLoading(true);
      NProgress.start();
      NProgress.inc(.25)
    }
    
    const handleRouteChangeComplete = () => {
      setTimeout(() => {
        NProgress.done(true)
        setIsLoading(false)
      }, 500);
    }
    
    const handleRouteChangeError = () => {
      NProgress.done()
      NProgress.start()
    }

    router.events.on('routeChangeStart', handleRouteChange)
    router.events.on('routeChangeComplete', handleRouteChangeComplete)
    router.events.on('routeChangeError', handleRouteChangeError)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
      router.events.off('routeChangeComplete', handleRouteChangeComplete)
      router.events.off('routeChangeError', handleRouteChangeError)
    }
  }, [])
  
  return (
    <>
      <LoadingTransition isLoading={isLoading} useLoader={useLoader} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
