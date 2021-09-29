import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import MyInfo from '../components/MyInfo'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ height: '100vh' }}>
        <Hero />
      </main>
      <MyInfo />

    </div>
  )
}
