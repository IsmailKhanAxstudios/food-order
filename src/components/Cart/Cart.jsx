import { useSelector } from "react-redux";
import RestaurantCategoryMenu from "../RestaurantCategoryMenu/RestaurantCategoryMenu";
import { Link, Outlet } from "react-router-dom";
const Cart = () => {
  const items = useSelector((state) => state.cart.items);

  return (
    <div className="bg-slate-200 items-center mb-5 py-4 px-3 border rounded-lg">
      <RestaurantCategoryMenu menuList={items} isCart={true} />
      <Link to="/checkout">
        <button className="button w-full m-auto">Check Out</button>
      </Link>
      <Outlet />
    </div>
  );
};

export default Cart;
