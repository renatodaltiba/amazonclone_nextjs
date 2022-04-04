import Product from 'components/Product'

interface Props {
  data: {
    id: number
    title: string
    price: number
    category: string
    description: string
    image: string
  }[]
}

const ProductFeed = ({ data }: Props) => (
  <div className="mx-auto grid grid-flow-row-dense md:-mt-72 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {data?.slice(0, 4).map((product) => (
      <Product key={product.id} data={product} />
    ))}

    <img
      className="md:col-span-full"
      src="https://links.papareact.com/dyz"
      alt="Banner"
    />

    <div className="md:col-span-4">
      {data?.slice(4, 5).map((product) => (
        <Product key={product.id} data={product} />
      ))}
    </div>

    {data?.slice(5, data?.length).map((product) => (
      <Product key={product.id} data={product} />
    ))}
  </div>
)

export default ProductFeed
