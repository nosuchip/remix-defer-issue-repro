import { LoaderFunctionArgs, defer } from "@remix-run/node";

import { collections } from "~/db/db.server";

export const loader = async (params: LoaderFunctionArgs) => {
  console.log("Server code is bundled");

  const productsPromise = collections.products.findMany();

  return defer({
    products: productsPromise,
  });
};
