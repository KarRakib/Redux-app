import React from "react";
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { IoIosListBox } from "react-icons/io";
import { BiSearchAlt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { changeKeyword } from "../../Redux/features/filterSlice";

const Navbar = () => {
  const {cart} = useSelector(state=> state.cart)
 const dispatch = useDispatch()
 const {keyword} = useSelector(state=> state.filters)


  const totalQuantity = cart.reduce((sum,item)=> sum + item.quantity ,0)
  console.log(totalQuantity);
  const handleChange = e =>{
   dispatch(changeKeyword(e.target.value));
  }
  console.log('key',keyword);
  return (
    <nav className='h-14 bg-indigo-200 rounded-full m-2 max-w-7xl mx-auto px-5'>
      <ul className='h-full  mx-auto flex justify-between items-center gap-3 font-semibold text-indigo-900'>
        <h1>Moon Tech</h1>

        <li className='flex bg-white mx-auto h-8 w-full max-w-lg  rounded-full pr-3'>
          <input
            className='h-8 rounded-full w-full text-sm border-0 focus:ring-0 outline-none'
            type='text'
            onChange={handleChange}
            name='search'
            id='search'
          />
          <button>
            <BiSearchAlt />
          </button>
        </li>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/top-rated'>Top Rated</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/dashboard'>Dashboard</Link>
        </li>
        <Link to='/'>
          <li title='Wishlist' className='bg-indigo-500 p-2 rounded-full'>
            <IoIosListBox className='text-white' />
          </li>
        </Link>
        <Link to='/cart'>
          <li title='cart' className='bg-indigo-500 p-2 relative rounded-full'>
            <p className="absolute text-white  rounded-full bottom-5 ml-4 ">{totalQuantity}</p>
            <BsFillCartFill className='text-white ' />
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;