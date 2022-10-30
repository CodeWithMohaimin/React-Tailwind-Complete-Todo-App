import React,{useState} from 'react'
import Todos from './Todos'
import NewTodo from './NewTodo'

const HomeTodo = () => {

    const [todo, setTodo] = useState([])

    const handleAddTodo = (todo) => {
        setTodo((previousTodo) => {
            return [...previousTodo, todo]
        })
    }
    

    return (
            
        <div className='bg-gray-800 p-2'>
            <h1 className='text-center text-white font-semibold text-5xl py-4'>Todo App</h1>

            <div className='min-h-screen flex justify-start text-center flex-col'>
                <NewTodo onAddTodo={handleAddTodo} />
                <Todos todos={todo} />
            </div>
        </div>
        
  )
}

export default HomeTodo
