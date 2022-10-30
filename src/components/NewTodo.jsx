import React, { useState } from 'react';

const NewTodo = () => {

    const [todo, setTodo] = useState({ title: "", description: "" });
    const {title, description} = todo;

    // for on change time updating state
    const handleChange = (event) => {
        const name = event.target.name;
        setTodo((oldTodo) => {
            return { ...oldTodo, [name]: event.target.value }
        });
        
    }

    // for submit 
    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(todo);
    }
    


  return (
      <form onSubmit={handleSubmit} className='flex flex-col max-w-lg mx-auto w-full mb-20 max-h-96'>
          <input
              onChange={handleChange}
              value={title}
              type="text"
              name='title'
              placeholder=' Type your title'
              className='my-8 p-2 outline-none font-normal '
          />
          <textarea
              onChange={handleChange}
              value={description}
              name="desc"
              id="desc"
              placeholder='Type your description'
              className='p-2 outline-none font-normal '
          >
          </textarea>

          <button
              onSubmit={handleSubmit}
              type='submit'
              className='px-8 py-2 m-4 text-pink-500 font-semibold text-1xl rounded-full bg-gray-600 hover:bg-gray-700'
          >Add</button>
      </form>
  )
}

export default NewTodo
