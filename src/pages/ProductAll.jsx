import React from "react";
import ProductCard from "../components/ShortComponets/ProductCard";
import { useSearchParams } from "react-router-dom";
import { getProducts } from "../api";

function ProductAll() {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const [error, setError] = React.useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category");

  const displayedProducts = categoryFilter
    ? products.filter((product) => product.category === categoryFilter)
    : products;

  React.useEffect(() => {
    async function loadProducts() {
      setLoading(true);
      try {
        const data = await getProducts();

        setProducts(data);
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  const collectedCategory = displayedProducts
    .map((item) => item.category)
    .flat();
  const allCategory = [...new Set(collectedCategory)];

  function handleFilterChange(key, value) {
    setSearchParams((prevValue) => {
      if (value === null) {
        prevValue.delete(key);
      } else {
        prevValue.set(key, value);
      }

      return prevValue;
    });
  }

  const categoryEl = allCategory.map((catItem) => {
    let categoryClass = "";
    if (catItem === "Herbs") {
      categoryClass = ` ${`bg-green-500`}`;
    } else if (catItem === "Mushroom") {
      categoryClass = `${`bg-yellow-600`}`;
    } else categoryClass = ` ${`bg-indigo-400`}`;

    return (
      <button
        // onClick={() => setSearchParams({category: catItem})}
        onClick={() => handleFilterChange("category", catItem)}
        className={`text-white px-4 py-2 rounded-md ${categoryClass}`}
      >
        {catItem}
      </button>
    );
  });

  const productElement = displayedProducts.filter(item=>item.available).map((item) => {
    const { id, img, title, description, price, category, tags } = item;

    
      const singleTagEl = tags.map((singleTag, index) => {
        return (
          <p className="mr-2 mb-2 p-1 italic" key={index}>
            #{singleTag}
          </p>
        );
      });

      return (
        <div className="product-card w-2/3 sm:w-1/2 md:w-4/6 rounded-md text-left col-span-1 flex flex-col overflow-hidden mx-auto mb-6 pb-4">
          <ProductCard
            key={id}
            img={img}
            description={description.split(" ", 10).join(" ")}
            title={title}
            category={category}
            price={price}
            imgClass={`w-full product-img -z-1`}
            categoryClass={
              category === "Herbs"
                ? "bg-green-500"
                : category === "Mushroom"
                ? "bg-yellow-600"
                : "bg-indigo-400 "
            }
            children={"Read More..."}
            childrenClass={`float-right text-red-700`}
            goToDetails={item.id}
            // state={{search:`?${searchParams.toString()}`}}
            state={{
              search: `?${searchParams.toString()}`,

              category: categoryFilter,
            }}
            goToCart={"/cart"}
          />

          <div className="flex flex-wrap justify-end pe-3  pt-3 mt-4 text-xs font-light">
            {singleTagEl}
          </div>
        </div>
      );
    
  });

  if (loading) {
    return <h1 className="text-center w-full text-3xl h-screen" aria-live="polite">Loading...</h1>;
  }

  if (error) {
    return <h1 className="text-center w-full text-3xl h-screen"aria-live="assertive">There was an error: {error.message}</h1>;
  }
  return (
    <section className="section container ">
      <h1 className=" text-xl sm:text-2xl mt-10 font-bold text-center pb-4">
        Explore our Products{" "}
      </h1>

      <div className="flex   w-auto mx-auto s text-center flex-wrap justify-center gap-4 mb-20 mt-10">
        {categoryEl}

        {categoryFilter ? (
          <button
            // onClick={() => setSearchParams({category: null})}
            onClick={() => handleFilterChange("category", null)}
            className=" py-2 font-semibold text-black"
          >
            Clear Filter
          </button>
        ) : null}
      </div>
      <div></div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 p-3 mx-auto item-center mt-6">
        {productElement}
      </div>
    </section>
  );
}

export default ProductAll;
