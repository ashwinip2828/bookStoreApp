import React from 'react'

const Cards = ({item}) => {
  return (
    <>
    <div className='mt-4 my-3 p-3'>
    <div className="card w-92 bg-base-100 shadow-xl hover:scale-110 duration-200 dark:bg-slate-900 dark:text-white ">
  <figure><img src={item.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions flex justify-between">
      <div className="badge badge-outline">${item.price}</div> 
      <div className="curser-pointer px-2 rounded-full py-1 border-[2px] hover:text-white hover:bg-pink-600  duration-200">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards
