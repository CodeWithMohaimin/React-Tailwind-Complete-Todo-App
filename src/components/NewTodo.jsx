import React from 'react'

const NewTodo = () => {
  return (
      <div className='flex flex-col'>
          <input
              className='my-8 p-2 outline-none font-normal'
              type="text"
              placeholder=' Type your title'
          />
          <textarea
              className='p-2 outline-none font-normal max-w-full max-h-52 min-h-min'
              name="desc"
              id="desc"
              placeholder='Type your description'>
          </textarea>
      </div>
  )
}

export default NewTodo
