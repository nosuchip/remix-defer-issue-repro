import { Await, useLoaderData } from "@remix-run/react";

import type { MetaFunction } from "@remix-run/node";
import { Suspense } from "react";
import { loader } from "~/routes/data-providers/products";

export { loader };

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const { products } = useLoaderData<typeof loader>();

  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">Deferred products list</h1>

      <h1>Products</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ul>
          <Await resolve={products}>
            {(resolvedProducts) => JSON.stringify(resolvedProducts)}
          </Await>
        </ul>
      </Suspense>
    </div>
  );
}
