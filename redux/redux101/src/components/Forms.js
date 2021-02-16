import React from 'react'

const Forms = ({ todos, addTodo }) => {
    const [content, updateContent] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        const newItem = {
            id: 2,
            content
        }
        addTodo(newItem)
    }

    return (
        <>
        <form onSubmit={(e) => handleSubmit(e)}>
            <input type="text" value={content} onChange={(e) => updateContent(e.target.value)}/>
            <input type="submit" />
        </form>
        <ul>
            {todos.map((todo) => {
                return <li key={todo.id}>{todo.content}</li>
            })}
        </ul>
        </>
    )
}

export default Forms;
