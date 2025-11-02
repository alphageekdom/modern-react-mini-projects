const CartItemCard = ({ item, removeFromCart }) => {
  return (
    <li className="flex items-center justify-between py-2">
      <div>
        <p className="font-semibold">{item.name}</p>
        <p className="text-sm text-gray-500">
          {item.qty} x ${item.price}
        </p>
      </div>

      <button
        onClick={() => removeFromCart(item.id)}
        className="cursor-pointer text-sm text-red-500 hover:underline"
      >
        Remove
      </button>
    </li>
  );
};

export default CartItemCard;
