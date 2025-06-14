"use client";

import Link from "next/link";

function Shop() {
  return (
    <div>
      shop page
      <div className="flex flex-col gap-4 underline">
        <Link href={"/shop/1"}>product 1</Link>
        <Link href={"/shop/2"}>product 2</Link>
        <Link href={"/shop/3"}>product 3</Link>
      </div>
    </div>
  );
}

export default Shop;
