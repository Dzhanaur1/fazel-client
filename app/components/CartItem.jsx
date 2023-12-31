import { addItem, reduceItem, removeItem } from "@/redux/cart/slice";
import Link from "next/link";
import { BsTrash } from "react-icons/bs";
import { useDispatch } from "react-redux";
const CartItem = (product) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center  justify-between mb-6">
      <div className="flex-[2]">
        <Link href={`catalog/item/${product.id}`}>
          <img
            src={product?.image}
            alt="Product Image"
            className=" object-cover rounded"
          />
        </Link>
      </div>
      <div className=" flex-[2] pl-4">
        <h2 className="text-sm lg:text-lg font-semibold mb-2">
          {product?.name}
        </h2>
        <p className="text-gray-600 lg:text-sm text-[11px] mb-1">
          Размеры:
          <br />
          {product?.length} x {product?.width} x{product?.height} мм
        </p>
        <p className="text-gray-600 lg:text-sm text-[11px] mb-1">
          Материал: Лиственница
        </p>
      </div>
      <div className=" flex flex-1 justify-center gap-1 lg:gap-4 items-center">
        <button
          onClick={() => dispatch(reduceItem(product))}
          className=" btn btn--out-black !py-1"
        >
          -
        </button>
        <p className="px-2 lg:px-4 py-1 rounded-lg  bg-neutral-300">
          {product?.count}
        </p>
        <button
          onClick={() => dispatch(addItem(product))}
          className=" !py-1 btn btn--out-black"
        >
          +
        </button>
      </div>
      <button
        onClick={() => dispatch(removeItem(product))}
        className="ml-[8px]"
      >
        <BsTrash />
      </button>
    </div>
  );
};
export default CartItem;
