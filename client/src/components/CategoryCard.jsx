import React from 'react'
import { categories } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const CategoryCard = () => {

    const {navigate} = useAppContext()

  return (
    <div className='mt-16'>
        <p className='text-2xl md:text-3xl font-medium text-gray-800'>
            Categories
        </p>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 mt-6 gap-6'>
            {categories.map((val, index) => (
                    <div key={index} className='group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center' onClick={() => {navigate(`/products/${val.path.toLowerCase()}`)
                    scrollTo(0, 0)}} style={{backgroundColor: val.bgColor}}>
                        <img src={val.image} alt={val.text} className='group-hover:scale-108 transition max-w-28' />
                        <p className='text-sm font-medium'>
                            {val.text}
                        </p>
                    </div>
            ))}
        </div>
    </div>
  )
}

export default CategoryCard