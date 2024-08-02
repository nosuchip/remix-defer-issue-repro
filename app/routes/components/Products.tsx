import { Await, useLoaderData } from "@remix-run/react";

import { Suspense } from "react";
import { loader } from "../api/products";

export { loader };

export default function ProductsList() {
  const { products } = useLoaderData<typeof loader>();

  console.log(`Typeof products:`, products);

  return (
    <div>
      <h1>Products</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={products}>
          <ul>{JSON.stringify(products)}</ul>
        </Await>
      </Suspense>
    </div>
  );
}
