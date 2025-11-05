import { useAppContext } from "../context/AppContext";
import ProductCard from "./ProductCard";

const BestSeller = () => {
 
  const {products} = useAppContext()

  return (
    <div className="mt-16">
      <p className="text-2xl md:text-3xl font-medium text-gray-800">
        Best Sellers
      </p>

      <div className='flex'>
        <ProductCard product={products[0]} />
      </div>
    </div>
  );
};

export default BestSeller;
