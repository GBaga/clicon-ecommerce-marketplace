"use client";

import { useParams } from "next/navigation";
import useProductsStore from "@/store/useProductsStore";

function ProductDetail() {
  const params = useParams();
  // const [plus, setPlus] = useState(0);
  const { product, setProduct } = useProductsStore();

  // console.log(params.detail);

  return (
    <div>
      ProductDetail
      <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-xl rounded-2xl flex flex-col md:flex-row gap-8">
        <div className="relative w-full md:w-1/2 h-80 md:h-auto">
          <img
            src={product[params.detail].image_url}
            alt={product[params.detail].name}
            fill
            className="object-cover rounded-xl"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="flex flex-col justify-between w-full md:w-1/2">
          <div>
            <h1 className="text-3xl font-bold mb-4 text-gray-900">
              {product.name}
            </h1>
            <p className="text-gray-700 mb-6">
              {product[params.detail].description}
            </p>
          </div>
          <div>
            <span className="text-2xl font-semibold text-green-600">
              ${product[params.detail].price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
