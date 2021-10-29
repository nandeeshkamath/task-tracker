import React, { useState } from 'react'

const AddTask = ({ addTask, toggleAddButton }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please add a task title')
            return
        }
        if(!day) {
            alert('Please add task time')
            return
        }

        addTask({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)

        toggleAddButton()
    }

    return (
        <form className="mb-5 pt-10" onSubmit={onSubmit}>
            <div>
                <label className="block text-md">Task</label>
                <input
                    className="form-input"
                    type='text'
                    placeholder='Add task'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                ></input>
            </div>
            <div className="block text-md">
                <label>Date and time</label>
                <input
                    className="form-input"
                    type='text'
                    placeholder='Add date'
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                ></input>
            </div>
            <div className="flex text-md object-center justify-between py-4">
                <label>Set reminder</label>
                <input
                    className="flex-1 h-5"
                    type='checkbox'
                    checked={reminder}
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                ></input>
            </div>
            <input type='submit' value='Set Task' className="cust-btn block min-w-full"></input>
        </form>
    ) 
}

export default AddTask
