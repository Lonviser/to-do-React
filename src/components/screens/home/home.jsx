import React, { useState } from "react";
import TodoItem from "./item/TodoItem";

const data = [
    {
        _id:'1231',
        title: 'Finish the essay collaboration',
        isCompleted: false,
    },
    {
        _id:'123241',
        title: 'Read next chapter of the book',
        isCompleted: false,
    },
    {
        _id:'3241',
        title: 'Send',
        isCompleted: false,
    }
]

const Home = () => {
	const [todos, setTodos] = useState(data)

	const changeTodo = id => {
		const copy = [...todos]
		const current = copy.find(t => t._id === id)
		current.isCompleted = !current.isCompleted
		setTodos(copy)
	}

	const removeTodo = id => setTodos([...todos].filter(t => t._id !== id))
    
    return(
        <div className='text-white w-4/5 mx-auto'>
			<h1 className='text-2xl font-bold text-center mb-10'>Todo for junior</h1>
			{todos.map(todo => (
				<TodoItem
					key={todo._id}
					todo={todo}
					changeTodo={changeTodo}
				/>
			))}
		</div>
    )
}

export default Home;