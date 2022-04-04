import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon
} from '@heroicons/react/outline'
import Image from 'next/image'

const Header = () => (
  <header>
    <div className="flex grow items-center bg-amazon_blue-default p-1 py-2">
      <div className="mt-2 flex grow items-center sm:grow-0">
        <Image
          src="https://links.papareact.com/f90"
          width={150}
          height={40}
          objectFit="contain"
          alt="Logo Amazon"
          className="cursor-pointer"
        />
      </div>

      <div className="hidden h-10 grow cursor-pointer items-center justify-center rounded-md bg-yellow-400 hover:bg-yellow-500 sm:flex">
        <input
          className="h-full w-6 shrink grow rounded-l-md p-2 py-4 focus:outline-none"
          type="text"
        />
        <SearchIcon className="h-12 p-4" />
      </div>
      <div className="mx-6 flex items-center space-x-6 whitespace-nowrap text-xs text-white">
        <div className="link">
          <p>Hello Renato</p>
          <p className="font-extrabold md:text-sm">Account {'&'} list</p>
        </div>
        <div className="link">
          <p>Returns</p>
          <p className="font-extrabold md:text-sm">{'&'} Orders</p>
        </div>
        <div className="link relative flex items-center">
          <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-yellow-400 text-center font-bold text-black md:right-10">
            0
          </span>

          <ShoppingCartIcon className="h-10" />
          <p className="mt-2 hidden font-extrabold md:inline md:text-sm">
            Basket
          </p>
        </div>
      </div>
    </div>

    <div className="flex items-center space-x-3 bg-amazon_blue-light p-2 pl-6 text-sm text-white">
      <p className="link flex items-center">
        <MenuIcon className="mr-1 h-6" />
        All
      </p>

      <p className="link">Prime Video</p>
      <p className="link">Amazon Business</p>
      <p className="link">{'Today'} Deals</p>
      <p className="link hidden lg:inline-flex">Electronics</p>
      <p className="link hidden lg:inline-flex">Food & Grocery</p>
      <p className="link hidden lg:inline-flex">Prime</p>
      <p className="link hidden lg:inline-flex">Buy Again</p>
      <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
      <p className="link hidden lg:inline-flex">Health & Personal Care</p>
    </div>
  </header>
)

export default Header
