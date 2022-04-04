import Banner from 'components/Banner'
import Header from 'components/Header'
import ProductFeed from 'components/ProductFeed'
// eslint-disable-next-line import/order
import { GetServerSideProps } from 'next'
// eslint-disable-next-line import/order
import Head from 'next/head'

interface Props {
  products: {
    id: number
    title: string
    price: number
    category: string
    description: string
    image: string
  }[]
}

export default function Home({ products }: Props) {
  return (
    <div className="h-screen ">
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      <Header />

      <main className="mx-auto max-w-screen-2xl bg-gray-100">
        <Banner />

        <ProductFeed data={products} />
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const products = await fetch('https://fakestoreapi.com/products').then(
    (res) => res.json()
  )

  return {
    props: {
      products
    }
  }
}
