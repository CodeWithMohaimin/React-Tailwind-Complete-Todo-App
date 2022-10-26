import React from 'react'

const NewTodo = () => {


    const handleSubmit = (event) => {
        event.preventDefault()
    }


  return (
      <form className='flex flex-col max-w-lg mx-auto w-full mb-20'>
          <input
              type="text"
              placeholder=' Type your title'
              className='my-8 p-2 outline-none font-normal '
          />
          <textarea
              name="desc"
              id="desc"
              placeholder='Type your description'
              className='p-2 outline-none font-normal '
          >
          </textarea>

          <button
              onClick={handleSubmit}
              className='px-8 py-2 m-4 text-pink-500 font-semibold text-1xl rounded-full bg-gray-600'>Add</button>
      </form>
  )
}

export default NewTodo
