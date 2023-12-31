import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../Compnents/ProductCard";
import { toggleBrands, toggleStock } from "../../Redux/features/filterSlice";
import { useEffect } from "react";
import { getProducts } from "../../Redux/features/productsSlice";


const Home = () => {
  const { products } = useSelector(state => state.products)
  console.log('check',products);
  const filter = useSelector(state => state.filters)
  const { brands, inStock, keyword } = filter
  //  check anOther
  
  const filterData = () => {
    return products.filter((item) => {
      // Filter by status
      if (brands !== 'all' && item.brand !== brands) {
        return false;
      }

      // Filter by search query (case-insensitive)
      if (keyword && item.model.toLowerCase().includes(keyword.toLowerCase())) {
        return false;
      }

      return true;
    });
  };

  const filteredData = filterData();
  console.log('chcek', filteredData);

  const dispatch = useDispatch();
  console.log(filter);
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch]);

  let content;
  console.log('check keno', { content });
  if (products?.length) {
    content = products.map((product) => (
      <ProductCard key={product.model} product={product} />
    ));
  }
  if (products.length && (filter.inStock || filter.brands.length)) {
    content = products.filter((product) => {
      if (inStock) {
        return product.status === true;
      }
      return product;
    }).filter((product) => {
      if (filter.brands.length) {
        return filter.brands.includes(product.brand)
      }
      return product;
    })

      .map((product) => <ProductCard key={product.model} product={product} />)
  }
  const activeClass = "text-white bg-indigo-500 border-white";

  return (
    <div className='max-w-7xl gap-14 mx-auto my-10'>
      <div className='mb-10 flex justify-end gap-5'>
        <button
          onClick={() => dispatch(toggleStock())}
          className={`border px-3 py-2 rounded-full font-semibold ${inStock ? activeClass : null
            } `}

        >
          In Stock
        </button>
        <button
          onClick={() => dispatch(toggleBrands("Amd"))}
          className={`border px-3 py-2 rounded-full font-semibold ${brands.includes("amd") ? activeClass : null
            }`}
        >
          AMD
        </button>
        <button
          onClick={() => dispatch(toggleBrands("intel"))}
          className={`border px-3 py-2 rounded-full font-semibold ${brands.includes("intel") ? activeClass : null
            }`}
        >
          Intel
        </button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14'>
        {content}
        {/* {products.map(product=> <ProductCard product={product} key={product._id}></ProductCard>)} */}
      </div>
    </div>
  );
};

export default Home;