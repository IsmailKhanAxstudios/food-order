import { useDispatch } from "react-redux";
import { addItem } from "../../store/cartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RestaurantCategoryMenu = ({ menuList, isCart = false }) => {
  const dispatch = useDispatch();

  //toast container
  const notify = () => toast("Item Added to cart Successfully!");
  return menuList?.map((e) => {
    return (
      <div className="p-3 border border-b-slate-50 flex justify-between px-10">
        <div className="w-9/12">
          <div className="flex">
            <div className="font-bold">{e?.card?.info?.name}</div>
            <div className="font-semibold">
              -Rs
              {e?.card?.info?.price / 100 || e?.card?.info?.defaultPrice / 100}
            </div>
            {isCart && (
              <>
                <div className="ml-2 font-bold">Quantity :{e?.quantity}</div>
                <div className="ml-2 font-bold">
                  Total :
                  {e?.quantity *
                    (e?.card?.info?.price / 100 ||
                      e?.card?.info?.defaultPrice / 100)}
                </div>
              </>
            )}
          </div>
          <div>{e?.card?.info?.description}</div>
        </div>
        <div className="relative">
          <img
            className="w-20 rounded-lg"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" +
              e?.card?.info?.imageId
            }
          />
          {!isCart && (
            <span
              className="absolute top-0 bg-slate-50 border rounded-lg p-1 cursor-pointer"
              onClick={() => {
                console.log(e, "Item to add");
                dispatch(addItem(e));
                notify();
              }}
            >
              Add +{" "}
            </span>
          )}
        </div>
      </div>
    );
  });
};

export default RestaurantCategoryMenu;
