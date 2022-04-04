import Header from 'components/Header'
// eslint-disable-next-line import/order
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      <Header />
    </div>
  )
}
