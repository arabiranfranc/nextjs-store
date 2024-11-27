import ProductsContainer from "@/components/products/ProductsContainer";

const ProductsPage = async ({
  searchParams: searchParamsPromise,
}: {
  searchParams: Promise<{ layout?: string; search?: string }>;
}) => {
  const searchParams = await searchParamsPromise;

  const layout = searchParams?.layout || "grid";
  const search = searchParams?.search || "";

  return (
    <>
      <ProductsContainer layout={layout} search={search} />
    </>
  );
};

export default ProductsPage;
