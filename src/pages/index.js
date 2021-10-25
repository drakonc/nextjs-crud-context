import React from 'react'
import Layout from '../components/Layout'
import { useTasks } from '../context/taskContext'


const Home = () => {
  const { tasks } = useTasks();
  return (
    <Layout>
      <div>Hello world </div>
    </Layout>
  )
}

export default Home
