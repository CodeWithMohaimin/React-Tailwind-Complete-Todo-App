import React from 'react'
import { VscTrash } from "react-icons/vsc";
import { VscArrowDown } from "react-icons/vsc";

const Todo = (props) => {
    
    const {id, title, desc} = props.todo;
  return (
      <article className='p-1 md:p-4  my-4 bg-gray-700 max-w-lg mx-auto rounded-md'>
          <div>
              <h2 className='text-gray-400 font-bold text-right p-2'> Todo {id}</h2>

              <div className=' rounded-md mt-4'>
                  <h1 className='text-teal-300 text-left p-2 '>Title <VscArrowDown className='inline' /></h1>

                  <h1 className='text-2xl text-gray-300 text-left px-2'>{title}</h1>
              </div>
              

              <div className='rounded-md mt-4'>
                  <p className='text-teal-300 text-left p-2 '>Description <VscArrowDown className='inline'/></p>

                  <p className='text-gray-200 text-left p-2 text-base md:text-lg font-normal tracking-wider'>{desc}</p>
              </div>
          </div>

          <button className='mt-8 mb-2 text-white px-2 py-1 rounded-full'><VscTrash className='inline text-4xl text-red-500' /></button>

      </article>
  )
}

export default Todo
