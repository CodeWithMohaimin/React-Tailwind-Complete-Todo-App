import React from 'react'
import { VscTrash } from "react-icons/vsc";

const Todo = (props) => {
    const {id, title, description} = props.todo;
  return (
      <article className=' my-2 p-2 bg-gray-600 max-w-lg mx-auto rounded-md'>
          <div>
              <h2 className='text-gray-500 font-bold text-left p-4'> Todo {id}</h2>
              <h1 className='text-2xl text-gray-400 '>{title}</h1>
              <p className='text-gray-200 p-2 mt-4 text-lg font-light tracking-wider'>{description}</p>
          </div>
          <button className='mt-8 mb-2 bg-red-400 text-white px-2 py-1 rounded-full'><VscTrash className='inline ' /> Delete</button>
      </article>
  )
}

export default Todo
