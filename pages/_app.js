import React, { useEffect, useState } from 'react'
import { Layout, LoadingTransition } from '../components'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'

import 'tailwindcss/tailwind.css'

import '../styles/global.scss'

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true)
  
  const router = useRouter()
  
  useEffect(() => {
    setIsLoading(true)
    
    setTimeout(() => {
      setIsLoading(false)
    }, 3000);
    
    const handleRouteChange = () => {
      NProgress.start();
      NProgress.inc(.25)
    }
    
    const handleRouteChangeComplete = () => {
      NProgress.done(true)
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
      <LoadingTransition isLoading={isLoading} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
