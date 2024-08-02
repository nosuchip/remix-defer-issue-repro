export const collections = {
  products: {
    async findMany() {
      console.log(">> DB querying");
      await new Promise<void>((resolve) => setTimeout(() => resolve(), 3000));
      console.log(">> DB queried");

      return [
        { name: "Product 1" },
        { name: "Product 2" },
        { name: "Product 3" },
      ];
    },
  },
};
