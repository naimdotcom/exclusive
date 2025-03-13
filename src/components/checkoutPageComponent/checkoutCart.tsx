import { cart } from "../../utils/data";

type Props = {
  cart: cart[];
};

const CheckoutCart = ({ cart }: Props) => {
  return (
    <div>
      <ul className="">
        {cart?.map((item) => (
          <li
            key={item._id}
            className="grid items-center grid-cols-5 gap-4 py-3 "
          >
            <picture className="col-span-1">
              <img
                className="w-14"
                src={item.product.images[0]}
                alt={item.product.name}
              />
            </picture>
            <div className="col-span-3">{item.product.name}</div>
            <span className="col-span-1 justify-self-end">
              ${item.product.price} * {item.quantity}
            </span>
          </li>
        ))}
      </ul>

      <div>
        <div className="flex justify-between py-4 border-b-2">
          <h2>Subtotal:</h2>
          <p>
            $
            {cart?.reduce(
              (acc, item) => acc + item.product.price * item.quantity,
              0
            )}
          </p>
        </div>
        <div className="flex justify-between py-4 border-b-2">
          <h2>Shipping:</h2>
          <p>Free</p>
        </div>
        <div className="flex justify-between py-4 ">
          <h2>Total:</h2>
          <p>
            $
            {cart?.reduce(
              (acc, item) => acc + item.product.price * item.quantity,
              0
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCart;
