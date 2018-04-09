import React from 'react'
import { Link } from 'react-router-dom'

import Layout from '../../components/Layout'

const Home = () => {
  return (
    <Layout>
      <p>Hello World of React and Webpack! HMR</p>
      <p>
        <Link to='/dynamic'>Navigate to Dynamic Page</Link>
      </p>
    </Layout>
  )
}

export default Home
