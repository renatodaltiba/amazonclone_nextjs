import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { useState } from 'react'
import Currency from 'react-currency-formatter'
interface ProductProps {
  data: {
    id: number
    title: string
    price: number
    category: string
    description: string
    image: string
  }
}

const Product = ({ data }: ProductProps) => {
  const [rating] = useState(Math.floor(Math.random() * (5 - 1 + 1)) + 1)

  const [hasPrime] = useState(Math.random() < 0.5)

  return (
    <div className="relative z-30 m-5 flex flex-col bg-white p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {data.category}
      </p>
      <Image
        src={data.image}
        height={200}
        width={200}
        objectFit="contain"
        alt={data.description}
      />

      <h4 className="my-3">{data.title}</h4>
      <div className="flex">
        {Array(rating)
          .fill(1)
          .map((_, i) => (
            <StarIcon key="1" className="h-5 text-yellow-500" />
          ))}
      </div>

      <p className="my-2 text-xs line-clamp-2">{data.description}</p>

      <div className="mb-5">
        <Currency quantity={data.price} currency="USD" />
      </div>
      {hasPrime && (
        <div className="-mt-5 flex items-center space-x-2">
          <img
            className="w-12"
            src="https://links.papareact.com/fdw"
            alt="Prime"
          />
          <p className="text-cs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}

      <button className="button mt-auto">Add to Basket</button>
    </div>
  )
}

export default Product
