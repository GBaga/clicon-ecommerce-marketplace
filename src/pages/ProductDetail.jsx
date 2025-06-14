"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import useUserStore from "@/store/userStore";

function ProductDetail() {
  const params = useParams();
  // const [plus, setPlus] = useState(0);
  const { plus, setPlus, setMinus, y } = useUserStore();

  // console.log(params.detail);

  return (
    <div className="flex flex-col gap-6">
      ProductDetail
      <h1>product N: {params.detail}</h1>
      <h2>{plus}</h2>
      <h2>{y}</h2>
      <button onClick={() => setPlus(plus + 5)}>click</button>
      <button onClick={() => setMinus()}>click</button>
    </div>
  );
}

export default ProductDetail;
