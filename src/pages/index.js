import React from 'react'
import Layout from '../components/Layout'
import { useTasks } from '../context/taskContext'
import { VscTrash, VscTasklist } from "react-icons/vsc";


const Home = () => {
  const { tasks } = useTasks();
  return (
    <Layout>
      {
        tasks.length === 0 ? (
            <div className="block">
              <h2 className="text-2xl">There are no tasks</h2>
              <VscTasklist size="8rem" />
            </div>
          ):(
            <div className="w-7/10">
              {tasks.map((task,i) => (
                <div key={task.id}  className="bg-gray-700 hover:bg-gray-600 cursor-pointer px-20 py-5 m-2 flex justify-between">
                  <span className="text-5xl mr-5">{i}</span>
                  <div>
                    <div className="flex justify-between">
                      <h1 className="font-bold">{task.title}</h1>
                      <button className="bg-red-700 hover:bg-red-600 px-3 py-1 inline-flex items-center">
                        <VscTrash className="mr-2" /> Delete
                      </button>
                    </div>
                    <p className="text-gray-300">{task.description}</p>
                    <span className="text-gray-400">{task.id}</span>
                  </div>
                </div>
              ))}
            </div>
          )
      }
    </Layout>
  )
}

export default Home
