import { useRouter } from "next/router";
import Layout from '../components/Layout'
import React, {useState,useEffect} from 'react'
import { useTasks } from '../context/taskContext'

const inititalState = {title: "", description: ""};

const TaskFormPage = () => {

    const [task, setTask] = useState(inititalState);
    const { createTask, tasks } = useTasks();
    const router = useRouter();

    const handleChange = e => {
        setTask({ ...task, [e.target.name]: e.target.value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        createTask(task.title, task.description);
        console.log(tasks);
    }

    return (
        <Layout>
            <div className="flex justify-center items-center h-full">
                <form className="bg-gray-700 p-10 h-2/4" onSubmit={handleSubmit}>
                    <h1>Add A Task</h1>
                    <input type="text" name="title" className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5" placeholder="Write a title" onChange={handleChange} value={task.title}/>
                    <textarea rows="5" name="description" className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5" placeholder="Write a description" onChange={handleChange} value={task.description}></textarea>    
                    <button className="bg-green-500 hover:bg-green-400 px-4 py-2 rounded-lg disabled:opacity-50 w-full" disabled={!task.title}>Save</button>
                </form>      
            </div> 
        </Layout>
    )
}

export default TaskFormPage
