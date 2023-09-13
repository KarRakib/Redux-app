import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../Compnents/ProductCard";
import { toggleBrands, toggleStock } from "../../Redux/features/filterSlice";
import { useEffect } from "react";
import { getProducts } from "../../Redux/features/productsSlice";


const Home1 = () => {
const {products}= useSelector(state=> state.products)
  const filter = useSelector(state => state.filters)
 const {brands, inStock} = filter
const dispatch = useDispatch()
useEffect(() => {
    dispatch(getProducts())
  }, [dispatch]);
let content ;
if (products?.length) {
    // Start with all products
    let filteredProducts = products;
  
    // Filter by keyword
    if (filter.keyword) {
      const keywordLower = filter.keyword.toLowerCase();
      filteredProducts = filteredProducts.filter((product) =>
        product.model.toLowerCase().includes(keywordLower)
      );
    }
  
    // Filter by inStock
    if (filter.inStock) {
      filteredProducts = filteredProducts.filter((product) => product.status === true);
    }
  
    // Filter by brands
    if (filter.brands.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        filter.brands.includes(product.brand)
      );
    }
  
    // Create content with the filtered products
  content = filteredProducts.map((product) => (
      <ProductCard key={product.model} product={product} />
    ));
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
          onClick={() => dispatch(toggleBrands("amd"))}
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

export default Home1;