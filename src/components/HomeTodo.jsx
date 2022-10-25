import React from 'react'
import Todos from './Todos'

const HomeTodo = () => {

    const dummyTodo = [
        {
            id: 1,
            title: 'One todo title',
            description: 'One todo description in here',
        },
        {
            id: 2,
            title: 'Two todo title',
            description: 'Two todo description in here. this is description in the second todo. Two todo description in here. this is description in the second todo. ',
        },
    ]

    return (
            
        <div className='bg-gray-700'>
            <h1 className='text-center text-white font-semibold text-5xl py-4'>Todo App</h1>

            <div className='min-h-screen flex justify-start text-center flex-col'>
                
                <Todos todos={dummyTodo} />
                
            </div>
        </div>
        
  )
}

export default HomeTodo
