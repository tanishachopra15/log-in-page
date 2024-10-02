import * as React from 'react'
import { useState, useEffect } from 'react'
import './TodoPage.css'

import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://rirjfepqqrafebdehefw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpcmpmZXBxcXJhZmViZGVoZWZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQzMDAxMTgsImV4cCI6MjAyOTg3NjExOH0.exJTQEsTAjPzsBKHKtu-9P3MzMV-j-onbPHMPPBM7KM'
const supabase = createClient(supabaseUrl, supabaseKey)

const TodoPages = () => {

    const [todos, setTodos] = useState([])
    const [currTodo, setCurrTodo] = useState({ todo: "" })
    const url = "http://localhost:3200"

    const [token, setToken] = useState('')
    async function getSession() {
        const { data } = await supabase.auth.getSession()
        const {session} = data
        console.log(session.access_token);
        setToken(session.access_token)
        console.log(data)
    }
    const init = async () => {
        fetch(url, {
            headers:{
                authorization : ''+token
            }
        }).then(async (val) => {
            const data = await val.json()
            setTodos(data)
        })
    }
    useEffect(() => {
        if (token)
            init()
        getSession()
    }, [token])

    const deleteItem = (id) => {
        fetch(url + `?id=${id}`, {
            method: "DELETE",
            headers:{
                authorization : ''+token
            }
        }).then(() => {
            init()
        })
    }
    const addItem = () => {
        fetch(url, {
            method: "POST",
            body: JSON.stringify(currTodo),
            headers: {
                "Content-Type": "application/json",
                authorization : ''+token,
            }
        }).then((val) => {
            init()
            setCurrTodo({
                todo: ''
            })
        })
    }
    const onChangehandler = (e) => setCurrTodo({ todo: e.target.value })

    return (
        <div >
            <div className="todo-header">
                <div className="todo-content">
                    <input type="text" placeholder="Add your todo " value={currTodo.todo} onChange={onChangehandler}></input>
                    <button onClick={addItem}>Add</button>
                </div>
                <div className='todos-list'>
                    {todos.map((todoItem, index) => (
                        <div key={index} className='todo-details'>
                            <div>{todoItem.todo}</div>
                            <button className='delete-button' onClick={() => deleteItem(todoItem.id)}>Delete</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TodoPages