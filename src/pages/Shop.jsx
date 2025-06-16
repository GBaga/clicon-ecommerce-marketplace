"use client";

import Link from "next/link";
import useProductsStore from "@/store/useProductsStore";

function Shop() {
  const { product, setProduct } = useProductsStore();

  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased mt-20">
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {product.map((item, index) => (
          <Link href={`/shop/${item.id}`}>
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={item.image_url}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-1">
                  {item.name}
                </h2>
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                  {item.description}
                </p>
                <div className="text-blue-600 font-bold text-md">
                  ${item.price.toFixed(2)}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}

export default Shop;
