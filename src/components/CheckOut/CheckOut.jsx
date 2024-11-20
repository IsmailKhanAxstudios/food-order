import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const CheckOut = () => {
  const items = useSelector((state) => state.cart.items);
  {
    console.log(items);
  }
  let total = 0;
  items.map((e) => {
    total +=
      e?.quantity *
      ((e?.card?.info?.price || e?.card?.info?.defaultPrice) / 100);
  });
  console.log(total);
  return (
    <>
      <h1 className="w-full font-bold text-center">Checkout</h1>
      <h2>Total : Rs {total}</h2>
    </>
  );
};
export default CheckOut;
