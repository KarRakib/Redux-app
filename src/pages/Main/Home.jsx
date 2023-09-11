import { useDispatch, useSelector } from "react-redux";
// import ProductCard from "../../components/ProductCard";
// import { toggleBrand, toggleStock } from "../../redux/actions/filterActions";
// import loadProductData from "../../redux/thunk/products/fetchProducts";
import { useState } from "react";
import ProductCard from "../../Compnents/ProductCard";
import { toggleBrands, toggleStock } from "../../Redux/features/filterSlice";
import { useEffect } from "react";


const Home = () => {
  const [products, setProducts] = useState([])
  // const filters = useSelector((state) => state.filter.filters);
  useEffect(() => {
 fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);
  // const products = useSelector((state) => state.product.products);
  // const inStock = useSelector(state => state.filters.inStock)
  // const brands = useSelector(state => state.filters.brands)
  const filter = useSelector(state => state.filters)
const {brands, inStock} = filter

  const dispatch = useDispatch();
  console.log(filter);


  const activeClass = "text-white bg-indigo-500 border-white";

  let content;
  console.log('check keno',content);

  if (products.length) {
    content = products.map((product) => (
      <ProductCard key={product.model} product={product} />
    ));
  }
  // if (products.length && (filter.inStock || filter.brands.length) ) {
  //   content = products.filter((product) => {
  //     if (inStock) {
  //       return product.status === true;

  //     }
  //     return product;
  //   }).filter((product)=>{
  //     if(filter.brands.length){
  //       return filter.brands.includes(product.brand)
  //     }
  //     return product;
  //   })
     
  //     .map((product) => <ProductCard key={product.model} product={product} />)
  // }
  if (products.length && (filter.inStock || filter.brands.length)) {
    content = products
      .filter((product) => {
        if (inStock) {
          return product.status === true;
        }
        console.log('check',product);
        return product;
      })
      .filter((product) => {
        if (filter.brands.length) {
          return filter.brands.includes(product.brand);
        }
        return product;
      })
      .map((product) => <ProductCard key={product.model} product={product} />);
  }
  
  

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
      </div>
    </div>
  );
};

export default Home;