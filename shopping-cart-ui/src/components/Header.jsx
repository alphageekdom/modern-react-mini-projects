import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../hooks/useCart';

const Header = () => {
  const { cart } = useCart();
  const itemCount = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <header className="flex items-center justify-between bg-white p-4 shadow-md">
      <h1 className="text-2xl font-bold text-blue-600">ShopPal</h1>

      <div className="relative">
        <FaShoppingCart className="text-2xl text-gray-700" />
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
            {itemCount}
          </span>
        )}
      </div>
    </header>
  );
};

export default Header;
