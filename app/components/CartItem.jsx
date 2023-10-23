import { BsTrash, BsTrash2Fill } from "react-icons/bs";
const CartItem = (product) => {
  console.log(product);
  return (
    <div className="flex items-center  justify-between mb-6">
      <div className="flex-[2]">
        <img
          src={product.img}
          alt="Product Image"
          className=" object-cover rounded"
        />
      </div>
      <div className=" flex-[2] pl-4">
        <h2 className="text-sm lg:text-lg font-semibold mb-2">
          {product.name}
        </h2>
        <p className="text-gray-600 lg:text-sm text-[11px] mb-1">
          Длина: 1500мм
        </p>
        <p className="text-gray-600 lg:text-sm text-[11px] mb-1">Цвет: Таль</p>
      </div>
      <div className=" flex flex-1 justify-center gap-1 lg:gap-4 items-center">
        <button className=" btn btn--out-black !py-1">-</button>
        <p className="px-2 lg:px-4 py-1 rounded-lg  bg-neutral-300">
          {product.count}
        </p>
        <button className=" !py-1 btn btn--out-black">+</button>
      </div>
      <button className="ml-[8px]">
        <BsTrash />
      </button>
    </div>
  );
};
export default CartItem;
