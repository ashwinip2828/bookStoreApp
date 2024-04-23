import React from 'react';
import Cards from './Cards';
import list from '../../public/list.json';
import {Link} from "react-router-dom"

const Course = () => {
  return (
    <>
    <div className='max-w-screen-2xl mx-auto container md:px-20 px-4'>
      <div className='mt-115 items-center justify-center text-center'>
        <h1 className='text-2xl font-semibold md:text-4xl mt-20'>We're delighted to have you <span className='text-pink-500' >here! :)</span> </h1>
        <p className='mt-10'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ipsam minus inventore tenetur voluptas ex nihil sit itaque. Quas porro, impedit tempora reprehenderit, eligendi placeat cumque iure facere aliquam explicabo magnam.ellendus voluptates provident ullam unde nulla quidem voluptatum omnis, laudantium veritatis, cumque voluptatem totam ad deleniti amet! Totam necessitatibus dicta sed tempore ut explicabo ab cupiditate nulla, dolorem hic blanditiis maxime?
        </p>
        <Link to="/">
        <button className='bg-pink-500 mt-6 text-white px-4 py-2 rounded-md hover:bg-pink-900 duration-300'>Back </button>
        </Link>
      </div>
      <div className='mt-12 grid md:grid-cols-4 grid-cols-1'>
        {
          list.map((item) => (
            <Cards key={item.id} item={item}/>
          ))
        }
      </div>

    </div>
    </>
  )
}

export default Course
